import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Item = {
    name: string
    link: string
}

type TopLevelItem = Item & {
    children?: Item[]
}

const items: TopLevelItem[] = [
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Projects',
        link: '/projects',
        children: [
            {
                name: 'Project 1',
                link: '/project-1',
            },
            {
                name: 'Project 2',
                link: '/project-2',
            },
        ],
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'Resources',
        link: '/resources',
        children: [
            {
                name: 'Resource 1',
                link: '/resource-1',
            },
            {
                name: 'Resource 2',
                link: '/resource-2',
            },
        ],
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