/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      items: ['history', 'overview', 'quickstart'],
    },
    'xchange',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'dashboard',
        'layout',
        'equipment',
        {
          type: 'category',
          label: 'Modules/Towns',
          items: ['module', 'drop-zones', 'consignees', 'equipment-requests'],
        },
        'trainlists',
        {
          type: 'category',
          label: 'Trains',
          items: ['train', 'train-route', 'train-orders'],
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
  tutorialSidebar: [
    'tutorial/intro',
    'tutorial/create_equipment',
    'tutorial/create_module',
    'tutorial/create_consignee',
    'tutorial/create_drop_zone',
    'tutorial/equipment_requests',
    'tutorial/yard',
    'tutorial/create_train',
    'tutorial/train_route',
    'tutorial/generate_trainlist',
    'tutorial/add_interest',
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

export default sidebars;
