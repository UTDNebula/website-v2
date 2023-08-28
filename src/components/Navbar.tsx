import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

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
    return (
        <nav className={clsx('flex justify-between p-10 items-center w-full h-32 text-white')}>
            <Link className='justify-self-start' href='/'>
            <Image src={'/icon-white.svg'} alt={'logo'} width={90} height={70} priority />
            </Link>
            <ul className='flex justify-around w-full h-min'>
                {items.map((item, outerIndex) => (
                    <li key={`menu-${outerIndex}`} className='group'>
                        <Link href={item.link} >
                            {item.name}
                        </Link>
                        {item.children && (
                            <>
                            {/* TODO: chevron up icon. note rotate doesn't work */}
                            <span className='group-hover:rotate-180'>^</span>
                            {/* TODO: this bg is a gradient in figma */}
                            <ul className={"absolute w-screen bg-black/40 backdrop-blur-md left-0 py-16 px-20 justify-items-center flex-wrap" + (outerIndex == 0 ? " flex" : " group-hover:flex hidden")}>
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
                            </>
                        )}
                    </li>
                ))}
                </ul>
                <button className='justify-self-end'>
                    Get Involved
                </button>
              
        </nav>
    )
}

export default Navbar