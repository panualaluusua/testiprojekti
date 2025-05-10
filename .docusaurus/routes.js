import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/testiprojekti/docs',
    component: ComponentCreator('/testiprojekti/docs', '1a9'),
    routes: [
      {
        path: '/testiprojekti/docs',
        component: ComponentCreator('/testiprojekti/docs', '8a8'),
        routes: [
          {
            path: '/testiprojekti/docs',
            component: ComponentCreator('/testiprojekti/docs', 'f1a'),
            routes: [
              {
                path: '/testiprojekti/docs/',
                component: ComponentCreator('/testiprojekti/docs/', '963'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/testiprojekti/docs/architecture',
                component: ComponentCreator('/testiprojekti/docs/architecture', 'b08'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/testiprojekti/docs/changelog',
                component: ComponentCreator('/testiprojekti/docs/changelog', '375'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/testiprojekti/docs/roadmap',
                component: ComponentCreator('/testiprojekti/docs/roadmap', '34b'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/testiprojekti/docs/testiprojekti/api',
                component: ComponentCreator('/testiprojekti/docs/testiprojekti/api', '318'),
                exact: true
              },
              {
                path: '/testiprojekti/docs/testiprojekti/intro',
                component: ComponentCreator('/testiprojekti/docs/testiprojekti/intro', 'aff'),
                exact: true
              },
              {
                path: '/testiprojekti/docs/testiprojekti/kaytto',
                component: ComponentCreator('/testiprojekti/docs/testiprojekti/kaytto', 'c74'),
                exact: true
              },
              {
                path: '/testiprojekti/docs/video_demo_material',
                component: ComponentCreator('/testiprojekti/docs/video_demo_material', '149'),
                exact: true
              },
              {
                path: '/testiprojekti/docs/vision',
                component: ComponentCreator('/testiprojekti/docs/vision', 'daa'),
                exact: true,
                sidebar: "someSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
