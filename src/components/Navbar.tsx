import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Transition, TransitionRootProps } from '@headlessui/react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import FilledChevronUp from '@/../public/filled-chevron-up-white.svg';
import Arrow from '@/../public/arrow-white.svg';
import X from '@/../public/x.svg';
import Hamburger from '@/../public/menu-alt-3.svg';
import Puzzle from '@/../public/puzzle.svg';
import Users from '@/../public/users.svg';
import UserGroup from '@/../public/user-group.svg';
import TrendingUp from '@/../public/trending-up.svg';
import Pencil from '@/../public/pencil.svg';
import Map from '@/../public/map.svg';
import Star from '@/../public/star.svg';

type BaseItem = { name: string };

interface LinkItem extends BaseItem {
  link: string;
}

interface ParentItem extends BaseItem {
  children: {
    name: string;
    link: string;
    iconSrc?: any;
    description: string;
  }[];
}

const parentItems: Array<ParentItem> = [
  {
    name: 'About Us',
    children: [
      {
        name: 'Mission & Values',
        link: '/about/mission',
        description: "About our organization's mission and values",
        iconSrc: Star,
      },
      {
        name: 'Governance',
        description: 'Learn about the structure of the club and different leadership positions',
        link: '/about/governance',
        iconSrc: UserGroup,
      },
    ],
  },
];

const childItems: Array<LinkItem> = [
  {
    name: 'Our Projects',
    link: '/projects',
  },
  {
    name: 'Membership',
    link: '/resources/roles',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];

const transitionProps: TransitionRootProps<typeof Fragment> = {
  as: Fragment,
  enter: 'transition duration-75 ease-out',
  enterFrom: 'transform scale-95 -translate-y-5 opacity-0',
  enterTo: 'transform scale-100 translate-y-0 opacity-100',
  leave: 'transition duration-75 ease-out',
  leaveFrom: 'transform scale-100 translate-y-0 opacity-100',
  leaveTo: 'transform scale-95 -translate-y-5 opacity-0',
};

interface Props {
  className?: string;
  shadow?: boolean;
}

const Navbar = (props: Props) => {
  const [submenuCloseCallbacks, setSubmenuCloseCallbacks] = useState<Record<string, () => void>>(
    {},
  );
  const closeAllSubmenus = useCallback(() => {
    Object.values(submenuCloseCallbacks).forEach((cb) => cb());
  }, [submenuCloseCallbacks]);

  const ref = useRef<HTMLSpanElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(Array(parentItems.length));
  const [shouldDisplayDesktopMenu, setShouldDisplayDesktopMenu] = useState(true);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setShouldDisplayDesktopMenu(ref.current.clientWidth > 0);

    const obs = new ResizeObserver(([entry]) => {
      setShouldDisplayDesktopMenu(entry.contentRect.width > 0);
    });
    obs.observe(ref.current);

    return () => {
      obs.disconnect();
    };
  }, [ref]);

  const textShadow = props.shadow === true ? '[text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]' : '';
  const dropShadow = props.shadow === true ? '[filter:_drop-shadow(0_0_4px_rgb(0_0_0_/_0.4))]' : '';

  return (
    <Disclosure
      as="nav"
      className={clsx(
        'flex py-10 items-center lg:place-content-evenly place-content-between px-4',
        props.className ?? '',
      )}
    >
      {({ open: displayMobileMenu, close: closeMobileMenu }) => (
        <>
          <span ref={ref} className="w-0 h-0 absolute invisible lg:w-5" />
          <CloseOnResizeManager
            call={() => {
              closeMobileMenu();
              closeAllSubmenus();
            }}
          />
          <Link className="flex items-center" href="/">
            <Image
              src={'/icon-white.svg'}
              alt={'logo'}
              width={90}
              height={70}
              priority
              className={dropShadow}
            />
          </Link>
          <Disclosure.Button className="lg:hidden">
            <Image src={Hamburger} alt="" className={clsx('w-8', dropShadow)} />
          </Disclosure.Button>
          <Transition {...transitionProps} show={shouldDisplayDesktopMenu || displayMobileMenu}>
            <Disclosure.Panel
              static
              as="div"
              className={clsx(
                displayMobileMenu
                  ? 'flex flex-col absolute top-0 left-0 bg-dark-gradient outline backdrop-blur-md p-4 gap-5'
                  : 'hidden',
                'lg:contents w-full text-white font-semibold',
              )}
            >
              <button
                className={clsx(displayMobileMenu ? 'block' : 'hidden', 'place-self-end')}
                onClick={() => closeMobileMenu()}
              >
                <Image src={X} alt="" className="w-4" />
              </button>
              <ul className="contents w-full h-min">
                {parentItems.map((item, outerIndex) => (
                  <Disclosure
                    as="li"
                    key={`menu-parent-${outerIndex}`}
                    className="group contents lg:block"
                    onMouseEnter={(e) => {
                      if (!shouldDisplayDesktopMenu) return;
                      if (e.currentTarget.getAttribute('data-headlessui-state') !== 'open') {
                        buttonRefs.current[outerIndex]?.click();
                        buttonRefs.current[outerIndex]?.focus();
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!shouldDisplayDesktopMenu) return;
                      setTimeout(() => {
                        const li = buttonRefs.current[outerIndex]?.parentElement;
                        if (li?.matches(':hover')) {
                          return;
                        }
                        if (li?.getAttribute('data-headlessui-state') === 'open') {
                          buttonRefs.current[outerIndex]?.click();
                        }
                      }, 500);
                    }}
                  >
                    {({ open: submenuOpen, close: closeSubmenu }) => {
                      const handler = () => {
                        setSubmenuCloseCallbacks((prev) => ({
                          ...prev,
                          [item.name]: closeSubmenu,
                        }));
                        if (displayMobileMenu) return;
                        Object.entries(submenuCloseCallbacks)
                          .filter(([k]) => k != item.name)
                          .forEach(([, v]) => v());
                      };
                      return (
                        <>
                          <Disclosure.Button
                            ref={(el) => (buttonRefs.current[outerIndex] = el)}
                            onClick={handler}
                            className={clsx(
                              displayMobileMenu && 'place-content-between',
                              'w-full flex gap-1 items-center',
                            )}
                          >
                            <p className={textShadow}>{item.name}</p>
                            <Image
                              src={FilledChevronUp}
                              alt=""
                              className={clsx(
                                submenuOpen ? 'rotate-0' : 'rotate-180',
                                'w-3 transition-transform',
                                dropShadow,
                              )}
                            />
                          </Disclosure.Button>
                          <Transition {...transitionProps}>
                            <Disclosure.Panel
                              as="ul"
                              className={clsx(
                                'lg:absolute lg:w-full lg:bg-dark-gradient lg:backdrop-blur-md border border-x-0 border-opacity-25 lg:left-0 lg:top-20 lg:mt-6 lg:py-10 lg:px-20 justify-items-center lg:flex-wrap lg:flex lg:gap-10 contents',
                              )}
                            >
                              {item.children.map((child, innerIndex) => (
                                <li
                                  key={`menu-${outerIndex}-${innerIndex}`}
                                  className="hover:transition-none transition-all lg:w-96 border border-white lg:hover:border-opacity-100 border-opacity-0 lg:rounded-3xl lg:p-8 flex lg:flex-col gap-2"
                                >
                                  {child.iconSrc && (
                                    <Image src={child.iconSrc} alt="" className="" />
                                  )}
                                  <Link
                                    href={child.link}
                                    className="lg:flex lg:flex-col gap-1"
                                    target={child.link.includes('http') ? '_blank' : ''}
                                  >
                                    <span className="flex gap-2 w-full">
                                      <h2 className="font-bold lg:text-2xl">{child.name}</h2>
                                      <Image
                                        src={Arrow}
                                        alt=""
                                        className="-rotate-90 lg:block hidden"
                                      />
                                    </span>
                                    <p>{child.description}</p>
                                  </Link>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      );
                    }}
                  </Disclosure>
                ))}
                {childItems.map((item, outerIndex) => (
                  <li key={`menu-child-${outerIndex}`}>
                    <Link
                      href={item.link}
                      className={clsx(
                        displayMobileMenu && 'flex place-content-between w-full',
                        textShadow,
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/meetings"
                className={clsx(
                  'justify-self-end w-max px-4 py-2 rounded-full border whitespace-nowrap',
                  textShadow,
                )}
              >
                Get Involved
              </Link>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const CloseOnResizeManager = (props: { call: () => void }) => {
  const { call } = props;
  useEffect(() => {
    window.addEventListener('resize', call);
    return () => {
      window.removeEventListener('resize', call);
    };
  }, [call]);
  return null;
};

export default Navbar;
