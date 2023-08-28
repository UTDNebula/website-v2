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
                        <a>
                           
                            {item.name}
                            </a>
                        {item.children && (
                            <ul className="group-hover:block hidden">
                                {item.children.map((child, innerIndex) => (
                                    <li key={`menu-${outerIndex}-${innerIndex}`}>
                                        {child.name}
                                    </li>
                                ))}
                            </ul>
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