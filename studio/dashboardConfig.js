export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7a7a2137faae762db33acf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-art3i419',
                  apiId: 'fbbb2926-0ebd-45a2-abc3-4254c8aec780'
                },
                {
                  buildHookId: '5d7a7a1f4fd55bde39620560',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ydb2rrpg',
                  apiId: 'c834d36e-1aa8-454f-a15f-7836189f9a66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shishak/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ydb2rrpg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
