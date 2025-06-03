import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/graph-explorer/docsite/__docusaurus/debug',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug', '0f1'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/config',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/config', '861'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/content',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/content', '95c'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/globalData',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/globalData', 'c53'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/metadata',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/metadata', 'af4'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/registry',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/registry', 'a25'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/__docusaurus/debug/routes',
    component: ComponentCreator('/graph-explorer/docsite/__docusaurus/debug/routes', '0b2'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog',
    component: ComponentCreator('/graph-explorer/docsite/blog', '071'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/archive',
    component: ComponentCreator('/graph-explorer/docsite/blog/archive', '727'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/authors',
    component: ComponentCreator('/graph-explorer/docsite/blog/authors', '679'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/graph-explorer/docsite/blog/authors/all-sebastien-lorber-articles', '748'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/authors/yangshun',
    component: ComponentCreator('/graph-explorer/docsite/blog/authors/yangshun', '264'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/first-blog-post',
    component: ComponentCreator('/graph-explorer/docsite/blog/first-blog-post', '47c'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/long-blog-post',
    component: ComponentCreator('/graph-explorer/docsite/blog/long-blog-post', '5a5'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/mdx-blog-post',
    component: ComponentCreator('/graph-explorer/docsite/blog/mdx-blog-post', 'efd'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/tags',
    component: ComponentCreator('/graph-explorer/docsite/blog/tags', 'caa'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/tags/docusaurus',
    component: ComponentCreator('/graph-explorer/docsite/blog/tags/docusaurus', '380'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/tags/facebook',
    component: ComponentCreator('/graph-explorer/docsite/blog/tags/facebook', '463'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/tags/hello',
    component: ComponentCreator('/graph-explorer/docsite/blog/tags/hello', '7ab'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/tags/hola',
    component: ComponentCreator('/graph-explorer/docsite/blog/tags/hola', 'ef7'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/blog/welcome',
    component: ComponentCreator('/graph-explorer/docsite/blog/welcome', '243'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/markdown-page',
    component: ComponentCreator('/graph-explorer/docsite/markdown-page', 'c4c'),
    exact: true
  },
  {
    path: '/graph-explorer/docsite/',
    component: ComponentCreator('/graph-explorer/docsite/', '374'),
    routes: [
      {
        path: '/graph-explorer/docsite/',
        component: ComponentCreator('/graph-explorer/docsite/', '78a'),
        routes: [
          {
            path: '/graph-explorer/docsite/',
            component: ComponentCreator('/graph-explorer/docsite/', '1a9'),
            routes: [
              {
                path: '/graph-explorer/docsite/Advanced Deployments/containerenvvars',
                component: ComponentCreator('/graph-explorer/docsite/Advanced Deployments/containerenvvars', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Advanced Deployments/deployinginecs',
                component: ComponentCreator('/graph-explorer/docsite/Advanced Deployments/deployinginecs', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Advanced Deployments/deployingineks',
                component: ComponentCreator('/graph-explorer/docsite/Advanced Deployments/deployingineks', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Advanced Deployments/usingcognito',
                component: ComponentCreator('/graph-explorer/docsite/Advanced Deployments/usingcognito', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Developer Guide/buildfromsource',
                component: ComponentCreator('/graph-explorer/docsite/Developer Guide/buildfromsource', '102'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Developer Guide/contrib',
                component: ComponentCreator('/graph-explorer/docsite/Developer Guide/contrib', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Developer Guide/roadmap',
                component: ComponentCreator('/graph-explorer/docsite/Developer Guide/roadmap', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Getting Started/architecture',
                component: ComponentCreator('/graph-explorer/docsite/Getting Started/architecture', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Getting Started/deployment-models',
                component: ComponentCreator('/graph-explorer/docsite/Getting Started/deployment-models', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Getting Started/systemrequirements',
                component: ComponentCreator('/graph-explorer/docsite/Getting Started/systemrequirements', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Using Graph Explorer/connections',
                component: ComponentCreator('/graph-explorer/docsite/Using Graph Explorer/connections', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Using Graph Explorer/tshooting',
                component: ComponentCreator('/graph-explorer/docsite/Using Graph Explorer/tshooting', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/Using Graph Explorer/visualizing',
                component: ComponentCreator('/graph-explorer/docsite/Using Graph Explorer/visualizing', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/graph-explorer/docsite/',
                component: ComponentCreator('/graph-explorer/docsite/', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
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
