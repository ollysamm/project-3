import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/project-3/markdown-page',
    component: ComponentCreator('/project-3/markdown-page', '474'),
    exact: true
  },
  {
    path: '/project-3/docs',
    component: ComponentCreator('/project-3/docs', '298'),
    routes: [
      {
        path: '/project-3/docs/category/how-to-guides',
        component: ComponentCreator('/project-3/docs/category/how-to-guides', '04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/category/tips-and-tricks',
        component: ComponentCreator('/project-3/docs/category/tips-and-tricks', 'd76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/customization',
        component: ComponentCreator('/project-3/docs/customization', 'ca5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/faqs',
        component: ComponentCreator('/project-3/docs/faqs', '9b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/getting_started',
        component: ComponentCreator('/project-3/docs/getting_started', 'dea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/how-to_guides/tips_and_tricks copy',
        component: ComponentCreator('/project-3/docs/how-to_guides/tips_and_tricks copy', 'b1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/terms',
        component: ComponentCreator('/project-3/docs/terms', '484'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/tips_and_tricks/tips_and_tricks',
        component: ComponentCreator('/project-3/docs/tips_and_tricks/tips_and_tricks', '192'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/project-3/docs/troubleshooting',
        component: ComponentCreator('/project-3/docs/troubleshooting', 'bd9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/project-3/',
    component: ComponentCreator('/project-3/', 'fa3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
