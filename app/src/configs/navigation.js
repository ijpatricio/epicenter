export default {
  // main navigation - side menu
  menu: [
    {
      text: '',
      key: '',
      items: [
        {
          icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '/dashboard'
        },
        {
          icon: 'mdi-format-list-group', key: 'menu.collections', text: 'Collections', link: '/collections'
        },
      ]
    },
  ],

  // footer links
  footer: [
    // {
    //   text: 'Docs',
    //   key: 'menu.docs',
    //   href: 'https://vuetifyjs.com',
    //   target: '_blank'
    // },
  ]
}
