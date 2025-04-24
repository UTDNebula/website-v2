'use client';

import { Disclosure, Transition, TransitionRootProps } from '@headlessui/react';
import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import Arrow from '@/../public/icons/arrow-white.svg';
import FilledChevronUpRoyal from '@/../public/icons/filled-chevron-up-royal.svg';
import FilledChevronUpWhite from '@/../public/icons/filled-chevron-up-white.svg';
import Map from '@/../public/icons/map.svg';
import HamburgerRoyal from '@/../public/icons/menu-royal.svg';
import HamburgerWhite from '@/../public/icons/menu-white.svg';
import Pencil from '@/../public/icons/pencil.svg';
import Puzzle from '@/../public/icons/puzzle.svg';
import Star from '@/../public/icons/star.svg';
import TrendingUp from '@/../public/icons/trending-up.svg';
import UserGroup from '@/../public/icons/user-group.svg';
import Users from '@/../public/icons/users.svg';
import X from '@/../public/icons/x.svg';

type BaseItem = { name: string };

interface LinkItem extends BaseItem {
  link: string;
}

interface ParentItem extends BaseItem {
  children: {
    name: string;
    link: string;
    iconSrc?: StaticImageData;
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
  {
    name: 'Our Projects',
    children: [
      {
        name: 'Jupiter',
        link: '/projects/jupiter',
        description: 'Find and connect with student organizations',
        iconSrc: Users,
      },
      {
        name: 'Trends',
        link: '/projects/trends',
        description: 'Help plan coursework through grade and professor stats',
        iconSrc: TrendingUp,
      },
      {
        name: 'Skedge',
        link: '/projects/skedge',
        description: 'Integrate grade and professor stats into Schedule Planner',
        iconSrc: TrendingUp,
      },
      {
        name: 'Rooms',
        link: '/projects/rooms',
        description: 'Find open rooms at UT Dallas',
        iconSrc: Map,
      },
      {
        name: 'API & Platform',
        link: '/projects/api',
        description:
          'Integrate ' +
          (new Date().getFullYear() - 2017) +
          '+ years of historical UTD data into your applications',
        iconSrc: Puzzle,
      },
      {
        name: 'Planner',
        link: '/projects/planner',
        description: 'Help plan degree and course requirements',
        iconSrc: Pencil,
      },
    ],
  },
];

const childItems: Array<LinkItem> = [
  {
    name: 'Membership',
    link: '/membership',
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
  royal?: boolean;
}

export default function Navbar(props: Props) {
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

  const dropShadow = props.shadow ? 'drop-shadow-sm' : '';
  const textShadow = props.shadow ? 'text-shadow' : '';

  return (
    <Disclosure as="nav" className={clsx('py-10 px-4', props.className ?? '')}>
      {({ open: displayMobileMenu, close: closeMobileMenu }) => (
        <div className="flex items-center lg:place-content-evenly place-content-between">
          <span ref={ref} className="w-0 h-0 absolute invisible lg:w-5" />
          <CloseOnResizeManager
            call={() => {
              closeMobileMenu();
              closeAllSubmenus();
            }}
          />
          <Link className="flex items-center" href="/">
            <Image
              src={props.royal ? '/icon-royal.svg' : '/icon-white.svg'}
              alt={'logo'}
              width={90}
              height={70}
              priority
              className={dropShadow}
            />
          </Link>
          <Disclosure.Button className="cursor-pointer lg:hidden">
            <Image
              src={props.royal ? HamburgerRoyal : HamburgerWhite}
              alt=""
              className={clsx('w-8', dropShadow)}
            />
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
                className={clsx(
                  displayMobileMenu ? 'block' : 'hidden',
                  'cursor-pointer place-self-end',
                )}
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
                    onMouseLeave={() => {
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
                        <div className="contents lg:block">
                          <Disclosure.Button
                            ref={(el) => {
                              buttonRefs.current[outerIndex] = el;
                            }}
                            onClick={handler}
                            className={clsx(
                              displayMobileMenu && 'place-content-between',
                              'cursor-pointer w-full flex gap-1 items-center',
                            )}
                          >
                            <p
                              className={clsx(
                                textShadow,
                                props.royal && !displayMobileMenu && 'text-royal',
                              )}
                            >
                              {item.name}
                            </p>
                            <Image
                              src={
                                props.royal && !displayMobileMenu
                                  ? FilledChevronUpRoyal
                                  : FilledChevronUpWhite
                              }
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
                                  className="hover:transition-none transition-all lg:w-96 lg:border lg:border-white/0 lg:hover:border-white/100 lg:rounded-3xl"
                                >
                                  <Link
                                    href={child.link}
                                    className="lg:p-8 flex lg:flex-col gap-2"
                                    target={child.link.includes('http') ? '_blank' : ''}
                                  >
                                    {child.iconSrc && (
                                      <Image src={child.iconSrc} alt="" className="" />
                                    )}
                                    <span className="lg:flex lg:flex-col gap-1">
                                      <span className="flex gap-2 w-full">
                                        <h2 className="font-bold lg:text-2xl">{child.name}</h2>
                                        <Image
                                          src={Arrow}
                                          alt=""
                                          className="-rotate-90 lg:block hidden"
                                        />
                                      </span>
                                      <p>{child.description}</p>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </div>
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
                        props.royal && !displayMobileMenu && 'text-royal',
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/calendar"
                className={clsx(
                  'justify-self-end w-max px-4 py-2 rounded-full border whitespace-nowrap',
                  textShadow,
                  props.royal && !displayMobileMenu ? 'text-royal border-royal' : 'border-white',
                )}
              >
                Get Involved
              </Link>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

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
