export type GoverancePeriod = {
  [group: string]: {
    [role: string]: string;
  };
};

export const periodToLeadershipMap = new Map<string, GoverancePeriod>([
  [
    '2025-2026',
    {
      Officers: {
        President: 'tgh210002',
        'Vice President': 'axt220137',
        'Executive Director': 'ejb230002',
        Secretary: 'jaz220003',
        Treasurer: '',
      },
      'Division Heads': {
        'Head of Engineering': 'axs220398',
        'Head of Design': '',
        'Head of Product': '',
        'Head of Marketing': 'exw210007',
      },
      'Project Leads': {
        'API & Platform Lead': '',
        'New Project Lead': '',
        'Jupiter Lead': 'bck220000',
        'Trends & Skedge Lead': 'exs210031',
      },
      'Our Club Sponsor': {
        'Professor and Club Sponsor': 'jxc064000',
      },
    },
  ],
  [
    '2024-2025',
    {
      Officers: {
        President: 'flh220002',
        'Vice President': 'tgh210002',
        'Executive Director': 'jjp210000',
        Secretary: 'hxn200016',
        Treasurer: 'txr220020',
      },
      'Division Heads': {
        'Head of Engineering': 'ksi230000',
        'Head of Design': '',
        'Head of Product': 'sxn200066',
        'Head of Marketing': 'jaz220003',
      },
      'Project Leads': {
        'Jupiter Lead': 'ejb230002',
        'Trends & Skedge Lead': 'axt220137',
        'API & Platform Lead': 'jjp210000',
        'Planner Lead': '',
      },
      'Our Club Sponsor': {
        'Professor and Club Sponsor': 'jxc064000',
      },
    },
  ],
  [
    '2023-2024',
    {
      Officers: {
        President: 'cnl210000',
        'Vice President': 'dml190001',
        'Executive Director': 'jrs190008',
        Secretary: 'sxd200087',
        Treasurer: 'axr200071',
      },
      'Division Heads': {
        'Head of Design': 'npn190002',
        'Head of Engineering': 'jxa220013',
        'Head of Product': 'sxl220024',
        'Head of Marketing': 'flh220002',
      },
      'Project Leads': {
        'Planner Lead': 'rxt220032',
        'Jupiter Lead': 'rdo190000',
        'Trends & Skedge Lead': 'wgs190000',
        'API & Platform Lead': 'jjp210000',
      },
      'Our Club Sponsor': {
        'Professor and Club Sponsor': 'jxc064000',
      },
    },
  ],
  [
    '2022-2023',
    {
      Officers: {
        President: 'rxr180000',
        'Vice President': 'ecb180001',
        'Executive Director': 'cbm200003',
        Secretary: 'nxw180000',
        Treasurer: 'rsj180004',
      },
      'Division Heads': {
        'Head of Design': 'sxs180000',
        'Head of Engineering': 'dml190001',
        'Head of Product': 'hxk180000',
        'Head of Marketing': 'sxn180076',
      },
      'Project Leads': {
        'Planner Lead': 'cnl210000',
        'Jupiter Lead': 'jrs190008',
        'Guide Lead': 'wec190000',
        'Trends Lead': 'wgs190000',
        'Skedge Lead': 'axs200279',
        'API & Platform Lead': 'amb150230',
      },
      'Our Club Sponsor': {
        'Professor and Club Sponsor': 'jxc064000',
      },
    },
  ],
]);
