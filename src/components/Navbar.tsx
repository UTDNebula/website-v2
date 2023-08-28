import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

type Item = {
    name: string
    link: string
    icon?: string
    // idk what type icon should be lol
}

type TopLevelItem = Item & {
    children?: (Item & {description: string})[]
}

const items: TopLevelItem[] = [
    {
        name: 'About Us',
        link: '/about',
        children: [
            {
                name: 'Mission & Values',
                link: '/about/mission',
                description: 'About our organization\'s mission and values',
            },
            {
                name: 'Governance',
                "description": "Learn about the structure of the club and different leadership positions",
                link: '/about/governance',
            }
        ]
    },
    {
        name: 'Our Projects',
        link: '/projects',
        // TODO: include icons
        children: [
            {
                name: 'Planner',
                link: '/projects/planner',
                description: 'Help plan degree and course requirements',
            },
            {
                name: 'Jupiter',
                link: '/projects/jupiter',
                description: 'Find and connect with student organizations',
            },
            {
                name: 'Sk.edge/Trends',
                link: '/projects/skedge',
                "description": "Help plan UTD coursework through stats"
            },
            {
                name: 'API and Platform',
                link: '/projects/api',
                "description": "Integrate our database of X+ years of historical UTD data into your own applications"
            },
            {   
                name: 'Guide',
                link: '/projects/guide',
                "description": "An all-in-one guide to life at UTD"
            }
        ]
    },
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
    // TODO: when breakpoint switches from desktop -> mobile or vice versa, close the menu
    return (
        <Disclosure as="div" className="flex justify-between">
            {({ open, close }) => (
                <>
                    <Link className='flex items-center' href='/'>
                    <Image src={'/icon-white.svg'} alt={'logo'} width={90} height={70} priority />
                    </Link>
                    <Disclosure.Button className="md:hidden">
                        {/* TODO: icon */}
                        burger
                    </Disclosure.Button>
                    <Disclosure.Panel static as="nav" className={clsx(open ? 'flex flex-col absolute top-0 left-0 bg-black/40 backdrop-blur-md' : 'hidden','md:flex justify-between py-10 items-center w-full text-white')}>
                        <button className='md:hidden justify-self-start' onClick={()=>close()}>
                            X
                            {/* TODO: real icon lol */}
                            </button>
                        <ul className='flex justify-around w-full h-min flex-col md:flex-row'>
                            {items.map((item, outerIndex) => (
                                <li key={`menu-${outerIndex}`} className='group'>
                                    <Link href={item.link} >
                                        {item.name}
                                    {/* TODO: chevron up icon. note rotate doesn't work */}
                                    {item.children && (<span className='group-hover:rotate-180'>^</span>)}
                                    </Link>
                                    {/* TODO: will need to render another disclosure here */}
                                    {item.children && (
                                        // TODO: this bg is a gradient in figma
                                        <ul className="absolute w-screen bg-black/40 backdrop-blur-md left-0 py-16 px-20 justify-items-center flex-wrap group-hover:flex hidden">
                                            {item.children.map((child, innerIndex) => (
                                                // TODO link
                                                <li key={`menu-${outerIndex}-${innerIndex}`} className='hover:transition-none transition-all w-96 border border-white hover:border-opacity-100 border-opacity-0 rounded-3xl p-8 m-8 flex flex-col gap-1'>
                                                    <h2 className="font-bold text-2xl">
                                                        {child.name}
                                                        {/* TODO: arrow right icon */}
                                                    </h2>
                                                    <p>
                                                        {child.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button className='justify-self-end'>
                            {/* TODO: style this button */}
                            Get Involved
                        </button>
                    </Disclosure.Panel>
                    
                </>
            )}
        </Disclosure>
        
    )
}

export default Navbar