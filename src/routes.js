// Books categories

const Routes = [
  {
    name: 'HomePage',
    path: '/home',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Basket',
    path: '/basket',
  },
  {
    name: 'Favorites',
    path: '/favorites',
  },
  {
    name: 'Categories',
    path: '/categories',
    subRoutes: [
      {
        name: 'Arts',
        rusName: 'Искусство',
        path: '/categories/arts'
      },
      {
        name: 'Business and economy',
        rusName: 'Бизнес и экономика',
        path: '/categories/business_economy'
      },
      {
        name: 'Information technology',
        rusName: 'Информационные технологии',
        path: '/categories/IT'
      },
      {
        name: 'Literature for children',
        rusName: 'Литература для детей',
        path: '/categories/children'
      },
      {
        name: 'Scientific literature',
        rusName: 'Научная литератора',
        path: '/categories/scientific'
      }
    ]
  }
]

export default Routes;