// @ts-check

// v6 (current) sidebars; v5 lives in versioned_sidebars/

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      items: ['history', 'overview', 'whats-new', 'quickstart', 'upgrading'],
    },
    'xchange',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'dashboard',
        'layout',
        'preferences',
        'equipment',
        {
          type: 'category',
          label: 'Modules/Towns',
          items: ['module', 'drop-zones', 'consignees', 'equipment-requests'],
        },
        {
          type: 'category',
          label: 'Trains',
          items: ['train', 'train-route', 'train-orders'],
        },
        'trainlists',
        {
          type: 'category',
          label: 'Timetable',
          items: ['timetable', 'station-order', 'timetable-reports'],
        },
        'reports',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: ['terminology', 'comments'],
    },
    'faq',
    'releaseNotes',
  ],
};

export default sidebars;
