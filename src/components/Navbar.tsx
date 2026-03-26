'use client';

import Arrow from '@/../public/icons/arrow-white.svg';
import FilledChevronUpRoyal from '@/../public/icons/filled-chevron-up-royal.svg';
import FilledChevronUpWhite from '@/../public/icons/filled-chevron-up-white.svg';
import HamburgerRoyal from '@/../public/icons/menu-royal.svg';
import HamburgerWhite from '@/../public/icons/menu-white.svg';
import Star from '@/../public/icons/star.svg';
import UserGroup from '@/../public/icons/user-group.svg';
import X from '@/../public/icons/x.svg';
import ApiLogoStandalone from '@/icons/ApiLogo';
import ClubsLogoStandalone from '@/icons/ClubsLogo';
import NebulaLogo from '@/icons/NebulaLogo';
import NotebookLogoStandalone from '@/icons/NotebookLogo';
import PlannerLogoStandalone from '@/icons/PlannerLogo';
import RoomsLogoStandalone from '@/icons/RoomsLogo';
import SkedgeLogoStandalone from '@/icons/SkedgeLogo';
import TrendsLogoStandalone from '@/icons/TrendsLogo';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionRootProps,
} from '@headlessui/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

type Item = { name: string } & (
  | {
      link: string;
    }
  | {
      children: {
        name: string;
        link: string;
        iconSrc?: StaticImageData;
        icon?: React.FC<React.SVGProps<SVGSVGElement>>;
        description: string;
      }[];
    }
);

const items: Array<Item> = [
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
        name: 'Clubs',
        link: '/projects/clubs',
        description: 'Find and connect with student organizations',
        icon: ClubsLogoStandalone,
      },
      {
        name: 'Trends',
        link: '/projects/trends',
        description: 'Help plan coursework through grade and professor stats',
        icon: TrendsLogoStandalone,
      },
      {
        name: 'Skedge',
        link: '/projects/skedge',
        description: 'Integrate grade and professor stats into Schedule Planner',
        icon: SkedgeLogoStandalone,
      },
      {
        name: 'Rooms',
        link: '/projects/rooms',
        description: 'Find open rooms at UT Dallas',
        icon: RoomsLogoStandalone,
      },
      {
        name: 'API & Platform',
        link: '/projects/api',
        description:
          'Integrate ' +
          (new Date().getFullYear() - 2017) +
          '+ years of historical UTD data into your applications',
        icon: ApiLogoStandalone,
      },
      {
        name: 'Notebook',
        link: '/projects/notebook',
        description: 'Discover and share course notes',
        icon: NotebookLogoStandalone,
      },
      {
        name: 'Planner',
        link: '/projects/planner',
        description: 'Help plan degree and course requirements',
        icon: PlannerLogoStandalone,
      },
    ],
  },
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
  const numParentItems = items.filter((item) => 'children' in item).length;
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(Array(numParentItems));
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
    <Disclosure as="nav" className={`relative z-50 py-10 px-4 ${props.className ?? ''}`}>
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
            <NebulaLogo
              className={`w-22 h-17 ${props.royal ? 'fill-royal' : 'fill-white'} ${dropShadow}`}
            />
          </Link>
          <DisclosureButton className="cursor-pointer lg:hidden">
            <Image
              src={props.royal ? HamburgerRoyal : HamburgerWhite}
              alt=""
              className={`w-8 ${dropShadow}`}
            />
          </DisclosureButton>
          <Transition {...transitionProps} show={shouldDisplayDesktopMenu || displayMobileMenu}>
            <DisclosurePanel
              static
              as="div"
              className={`${
                displayMobileMenu
                  ? 'flex flex-col absolute top-0 left-0 bg-dark-gradient outline backdrop-blur-md p-4 gap-5'
                  : 'hidden'
              } lg:contents w-full text-white font-semibold`}
            >
              <button
                className={`${displayMobileMenu ? 'block' : 'hidden'} cursor-pointer place-self-end`}
                onClick={() => closeMobileMenu()}
              >
                <Image src={X} alt="" className="w-4" />
              </button>
              <ul className="contents w-full h-min">
                {items.map((item, outerIndex) => {
                  if ('link' in item) {
                    return (
                      <li key={`menu-child-${outerIndex}`}>
                        <Link
                          href={item.link}
                          className={`${displayMobileMenu && 'flex place-content-between w-full'} ${textShadow} ${props.royal && !displayMobileMenu && 'text-royal'}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <Disclosure
                      as="li"
                      key={`menu-parent-${outerIndex}`}
                      className="contents lg:block"
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
                          const li = buttonRefs.current[outerIndex]?.parentElement?.parentElement;
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
                            <DisclosureButton
                              ref={(el) => {
                                buttonRefs.current[outerIndex] = el;
                              }}
                              onClick={handler}
                              className={`${displayMobileMenu && 'place-content-between'} cursor-pointer w-full flex gap-1 items-center`}
                            >
                              <p
                                className={`${textShadow} ${props.royal && !displayMobileMenu && 'text-royal'}`}
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
                                className={`${submenuOpen ? 'rotate-0' : 'rotate-180'} w-3 transition-transform ${dropShadow}`}
                              />
                            </DisclosureButton>
                            <Transition {...transitionProps}>
                              <DisclosurePanel
                                as="ul"
                                className="lg:absolute lg:w-full lg:bg-dark-gradient lg:backdrop-blur-md lg:left-0 lg:top-20 lg:mt-6 lg:py-10 lg:px-20 justify-items-center lg:grid lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] lg:gap-10 contents"
                              >
                                {item.children.map((child, innerIndex) => (
                                  <li
                                    key={`menu-${outerIndex}-${innerIndex}`}
                                    className="group hover:transition-none transition-all lg:w-full lg:border-2 lg:border-white/0 lg:hover:border-white/100 lg:rounded-3xl"
                                  >
                                    <Link
                                      href={child.link}
                                      className="lg:p-8 flex lg:flex-col gap-2"
                                      target={child.link.startsWith('http') ? '_blank' : ''}
                                    >
                                      {child.iconSrc && <Image src={child.iconSrc} alt="" />}
                                      {child.icon && (
                                        <child.icon className="fill-white h-12 w-12 shrink-0" />
                                      )}
                                      <span className="lg:flex lg:flex-col gap-1">
                                        <span className="flex gap-2 w-full">
                                          <h2 className="font-bold lg:text-2xl">{child.name}</h2>
                                          <Image
                                            src={Arrow}
                                            alt=""
                                            className="-rotate-90 lg:block hidden lg:transition lg:group-hover:translate-x-1"
                                          />
                                        </span>
                                        <p>{child.description}</p>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </DisclosurePanel>
                            </Transition>
                          </div>
                        );
                      }}
                    </Disclosure>
                  );
                })}
              </ul>
              <Link
                href="/resources/calendar"
                className={`justify-self-end w-max px-4 py-2 rounded-full border-2 whitespace-nowrap ${textShadow} ${props.royal && !displayMobileMenu ? 'text-royal border-royal' : 'border-white'}`}
              >
                Get Involved
              </Link>
            </DisclosurePanel>
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
