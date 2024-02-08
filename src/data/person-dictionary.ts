
interface Person {
    name: string;
    linkedIn: string;
}

const personMap = new Map<string, Person>([
    ['cnl210000', {
        name: 'Caleb Lim',
        linkedIn: 'caleeb-lim'
    }],
    ['dml190001', {
        name: 'David Launikitis',
        linkedIn: 'dlaunikitis'
    }],
    ['axr200071', {
        name: 'Amrit Rathie',
        linkedIn: 'amrit-rathie'
    }],
    ['jrs190008', {
        name: 'Jake Spann',
        linkedIn: 'jake-spann-35210615a'
    }],
    ['sxd200087', {
        name: 'Shaurya Dwivedi',
        linkedIn: 'shaurya-dwivedi'
    }],
    ['jxa220013', {
        name: 'Jason Antwi-Appah',
        linkedIn: 'jasonaa'
    }],
    ['sxl220024', {
        name: 'Sharon Lnu',
        linkedIn: 'sharon-lnu-6949801a3'
    }],
    ['flh220002', {
        name: 'Frances Hill',
        linkedIn: 'flhill'
    }],
    ['npn190002', {
        name: 'Hilary Nguyen',
        linkedIn: 'hilary-nguyen'
    }],
    ['wgs190000', {
        name: 'William Skaggs',
        linkedIn: 'william-skaggs-4b86881b7'
    }],
    ['rdo190000', {
        name: 'Ruben Olano',
        linkedIn: 'rubendolano'
    }],
    ['jjp210000', {
        name: 'Josh Pahman',
        linkedIn: 'jpahm'
    }],
    ['rxt220032', {
        name: 'Ragini Tiwari',
        linkedIn: 'msraginitiwari'
    }],
    ['rxr180000', {
        name: 'Ryan Radloff',
        linkedIn: 'ryan-radloff'
    }],
    ['ecb180001', {
        name: 'Eric Boysen',
        linkedIn: 'eric-boysen-a16243192'
    }],
    ['cbm200003', {
        name: 'Charlie Mahana',
        linkedIn: 'charliemahana'
    }],
    ['rsj180004', {
        name: 'Rajmeet Juneja',
        linkedIn: 'rajmeetjuneja'
    }],
    ['nxw180000', {
        name: 'Nathan Williams',
        linkedIn: 'nathan-williams-357a5b61'
    }],
    ['sxs180000', {
        name: 'Shreyas Subramanian',
        linkedIn: 'shreyas-subramanian'
    }],
    ['sxn180076', {
        name: 'Shreya Nallamothu',
        linkedIn: 'shreya-n-1a334a1b8'
    }],
    ['hxk180000', {
        name: 'Harsha Ketaraju',
        linkedIn: 'harsha-ketaraju'
    }],
    ['amb150230', {
        name: 'Adam Brunn',
        linkedIn: 'adammcadamson'
    }],
    ['wec190000', {
        name: 'Willie Chalmers III',
        linkedIn: 'willie-chalmers-iii'
    }],
    ['axs200279', {
        name: 'Adam Szumski',
        linkedIn: 'aszumski'
    }],
    ['jxc064000', {
        name: 'John Cole',
        linkedIn: 'john-cole-52650592'
    }]
]);

module.exports.personMap = personMap


interface Leadership {
    [key: string]: {
        [key: string]: string
    }
}

const periodToLeadershipMap = new Map<string, Leadership>([
    ['2023-2024': {
        'Officers': {
            'President': 'cnl210000',
            'Vice President': 'dml190001',
            'Executive Director': 'jrs190008',
            'Secretary': 'sxd200087',
            'Treasurer': 'axr200071'
        },
        'Division Heads': {
            'Head of Design': 'npn190002',
            'Head of Engineering': 'jxa220013',
            'Head of Product': 'sxl220024',
            'Head of Marketing': 'flh220002'
        },
        'Project Leads': {
            'Planner Lead': 'rxt220032',
            'Jupiter Lead': 'rdo190000',
            'Trends & Skedge Lead': 'wgs190000',
            'API & Platform Lead': 'jjp210000'
        },
        'Our Club Sponsor': {
            'Professor and Club Sponsor': 'jxc064000'
        }
    }],
    ['2022-2023': {
        'Officers': {
            'President': 'rxr180000',
            'Vice President': 'ecb180001',
            'Executive Director': 'cbm200003',
            'Secretary': 'nxw180000',
            'Treasurer': 'rsj180004'
        },
        'Division Heads': {
            'Head of Design': 'sxs180000',
            'Head of Engineering': 'dml190001',
            'Head of Product': 'hxk180000',
            'Head of Marketing': 'sxn180076'
        },
        'Project Leads': {
            'Planner Lead': 'cnl210000',
            'Jupiter Lead': 'jrs190008',
            'Guide Lead': 'wec190000',
            'Trends Lead': 'wgs190000',
            'Skedge Lead': 'axs200279',
            'API & Platform Lead': 'amb150230'
        },
        'Our Club Sponsor': {
            'Professor and Club Sponsor': 'jxc064000'
        }
    }]
])
