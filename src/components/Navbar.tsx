import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { useEffect } from 'react'

type BaseItem = {name: string}

interface LinkItem extends BaseItem {
    link: string
}

interface ParentItem extends BaseItem {
    children: {
        name: string
        link: string
        // icon?: string
        // TODO: idk what type icon should be lol
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
    return (
        <Disclosure as="nav" className="flex py-10 items-center md:place-content-evenly place-content-between px-4">
            {({ open: displayMobileMenu, close }) => (
                <>
                    <CloseOnResizeManager call={close} />
                    <Link className='flex items-center' href='/'>
                        <Image src={'/icon-white.svg'} alt={'logo'} width={90} height={70} priority />
                    </Link>
                    <Disclosure.Button className="md:hidden">
                        {/* TODO: icon */}
                        burger
                    </Disclosure.Button>
                    <Disclosure.Panel static as="div" className={clsx(displayMobileMenu ? 'flex flex-col absolute top-0 left-0 bg-black/40 backdrop-blur-md p-4 gap-4' : 'hidden', 'md:contents w-full text-white font-semibold')}>
                        {({open: submenuOpen})=>(
                            <>
                            <button className={clsx(displayMobileMenu ? 'block' : 'hidden', 'place-self-end')} onClick={()=>close()}>
                                X
                                {/* TODO: real icon lol */}
                                </button>
                            <ul className='contents w-full h-min'>
                                {parentItems.map((item, outerIndex) => {
                                    const classes = clsx(displayMobileMenu && 'flex place-content-between w-full')
                                    return (
                                    <Disclosure as="li" key={`menu-parent-${outerIndex}`} className='group'>
                                        <Disclosure.Button className='w-full'>
                                            {<span className={classes}>
                                                {item.name}
                                                {/* TODO: chevron up icon. */}
                                                <span className={clsx( submenuOpen && 'rotate-180')}>^</span>
                                            </span>}
                                        </Disclosure.Button>

                                        {/* // TODO: this bg is a gradient in figma
                                        // md:group-hover:flex md:hidden */}
                                        <Disclosure.Panel as="ul" className={clsx("md:absolute md:w-screen md:bg-black/40 md:backdrop-blur-md md:left-0 md:py-16 md:px-20 justify-items-center flex-wrap  flex")}>
                                            {item.children.map((child, innerIndex) => (
                                                // TODO link
                                                <li key={`menu-${outerIndex}-${innerIndex}`} className='hover:transition-none transition-all md:w-96 border border-white hover:border-opacity-100 border-opacity-0 rounded-3xl p-8 m-8 flex flex-col gap-1'>
                                                    <h2 className="font-bold text-2xl">
                                                        {child.name}
                                                        {/* TODO: arrow right icon */}
                                                    </h2>
                                                    <p>
                                                        {child.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </Disclosure.Panel>

                                    </Disclosure>
                                )})}
                                {childItems.map((item, outerIndex) => {
                                    const classes = clsx(displayMobileMenu && 'flex place-content-between w-full')
                                    return (
                                    <li key={`menu-child-${outerIndex}`}>
                                        <Link href={item.link} className={classes}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )})}
                            </ul>
                            <button className='justify-self-end w-max px-4 py-2 rounded-full border whitespace-nowrap'>
                                {/* TODO: where is this supposed to link to */}
                                Get Involved
                            </button>
                        </>
                        )}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        
    )
}

const CloseOnResizeManager = (props: {call: ()=> void}) => {
    useEffect(()=>{
        const obs = new ResizeObserver(()=>{
            props.call()
        })
        obs.observe(document.body)
        return ()=>obs.disconnect()
    }, [])
    return null
}

export default Navbar