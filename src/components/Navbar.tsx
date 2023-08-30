import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { useEffect } from 'react'
import FilledChevronUp from "@/../public/filled-chevron-up.svg"
import Arrow from "@/../public/arrow.svg";
import X from "@/../public/x.svg";
import Hamburger from "@/../public/menu-alt-3.svg";
import Puzzle from "@/../public/puzzle.svg";
import Users from "@/../public/users.svg";
import UserGroup from "@/../public/user-group.svg";
import TrendingUp from "@/../public/trending-up.svg";
import Pencil from "@/../public/pencil.svg";
import Map from "@/../public/map.svg";
import Star from "@/../public/star.svg";


type BaseItem = {name: string}

interface LinkItem extends BaseItem {
    link: string
}

interface ParentItem extends BaseItem {
    children: {
        name: string
        link: string
        iconSrc?: any
        description: string
    }[]
}

const parentItems: Array<ParentItem> = [
        {
        name: 'About Us',
        children: [
            {
                name: 'Mission & Values',
                link: '/about/mission',
                description: 'About our organization\'s mission and values',
                iconSrc: Star,
            },
            {
                name: 'Governance',
                "description": "Learn about the structure of the club and different leadership positions",
                link: '/about/governance',
                iconSrc: UserGroup,
            }
        ]
    },
    {
        name: 'Our Projects',
        children: [
            {
                name: 'Planner',
                link: '/projects/planner',
                description: 'Help plan degree and course requirements',
                iconSrc: Pencil,
            },
            {
                name: 'Jupiter',
                link: '/projects/jupiter',
                description: 'Find and connect with student organizations',
                iconSrc: Users,
            },
            {
                name: 'Sk.edge/Trends',
                link: '/projects/skedge',
                "description": "Help plan UTD coursework through stats",
                iconSrc: TrendingUp,
            },
            {
                name: 'API and Platform',
                link: '/projects/api',
                "description": "Integrate X+ years of historical UTD data into your applications",
                iconSrc: Puzzle,
            },
            {   
                name: 'Guide',
                link: '/projects/guide',
                "description": "An all-in-one guide to life at UTD",
                iconSrc: Map,
            }
        ]
}
]

const childItems: Array<LinkItem> = [
    
    {
        name: 'Membership',
        link: '/membership',
    },
    {
        name: 'Newsletter',
        link: '/newsletter',
    },
    {
        name: 'Contact Us',
        link: '/contact',
    },
]

const Navbar = () => {
    // NOTE: weird hover issue is caused by the relative class on the explore the galaxy text
    // TODO: only allow one submenu to be open at once in non mobile view
    return (
        <Disclosure as="nav" className="flex py-10 items-center md:place-content-evenly place-content-between px-4">
            {({ open: displayMobileMenu, close }) => (
                <>
                    <CloseOnResizeManager call={close} />
                    <Link className='flex items-center' href='/'>
                        <Image src={'/icon-white.svg'} alt={'logo'} width={90} height={70} priority />
                    </Link>
                    <Disclosure.Button className="md:hidden">
                        <Image src={Hamburger} alt=""className="w-8"/>
                    </Disclosure.Button>
                    <Disclosure.Panel static as="div" className={clsx(displayMobileMenu ? 'flex flex-col absolute top-0 left-0 bg-black/40 backdrop-blur-md p-4 gap-5' : 'hidden', 'md:contents w-full text-white font-semibold')}>
                        <button className={clsx(displayMobileMenu ? 'block' : 'hidden', 'place-self-end')} onClick={()=>close()}>
                            <Image src={X} alt="" className="w-4" />
                        </button>
                        <ul className='contents w-full h-min'>
                            {parentItems.map((item, outerIndex) => 
                                <Disclosure as="li" key={`menu-parent-${outerIndex}`} className='group contents md:block'>
                                    {({open: submenuOpen})=>(
                                        <>
                                            <Disclosure.Button className={clsx(displayMobileMenu && 'place-content-between', 'w-full flex gap-1 items-center')}>
                                                <p>{item.name}</p>
                                                <Image src={FilledChevronUp} alt="" className={clsx( submenuOpen ? 'rotate-0' : 'rotate-180', "w-3 transition-transform")}/>
                                            </Disclosure.Button>

                                            {/* TODO: this bg is a gradient in figma */}
                                            <Disclosure.Panel as="ul" className={clsx("md:absolute md:w-screen md:bg-black/40 md:backdrop-blur-md md:left-0 md:py-12 md:px-20 justify-items-center md:flex-wrap md:flex md:gap-10 contents")}>
                                                {item.children.map((child, innerIndex) => (
                                                    <li key={`menu-${outerIndex}-${innerIndex}`} className='hover:transition-none transition-all md:w-96 border border-white md:hover:border-opacity-100 border-opacity-0 md:rounded-3xl md:p-8 flex md:flex-col gap-2'>
                                                        {child.iconSrc && <Image
                                                            src={child.iconSrc}
                                                            alt=""
                                                            className=""
                                                        />}
                                                            <Link href={child.link} className='md:flex md:flex-col gap-1'>
                                                                <span className="flex gap-2 w-full">
                                                                    <h2 className="font-bold md:text-2xl">
                                                                        {child.name}
                                                                    </h2>
                                                                    <Image
                                                                        src={Arrow}
                                                                        alt=""
                                                                        className="-rotate-90 md:block hidden"
                                                                        />
                                                                </span>
                                                            <p>
                                                                {child.description}
                                                            </p>
                                                            </Link>
                                                    </li>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )}
                            {childItems.map((item, outerIndex) => 
                                <li key={`menu-child-${outerIndex}`}>
                                    <Link href={item.link} className={clsx(displayMobileMenu && 'flex place-content-between w-full')}>
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <button className='justify-self-end w-max px-4 py-2 rounded-full border whitespace-nowrap'>
                            {/* TODO: where is this supposed to link to */}
                            Get Involved
                        </button>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        
    )
}

const CloseOnResizeManager = (props: {call: ()=> void}) => {
    useEffect(() => {
        const obs = new ResizeObserver(()=>{
            // props.call()
        })
        obs.observe(document.body)
        return () => obs.disconnect()
    }, [props])
    return null
}

export default Navbar