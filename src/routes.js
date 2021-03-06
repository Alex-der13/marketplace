const Routes = [
    {
        name: 'HomePage',
        path: '/marketplace',
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
        name: 'Favorite',
        path: '/favorite',
    },
    {
        name: 'Categories',
        path: '/categories',
        subRoutes: [
            {
                name: 'Arts',
                rusName: 'Искусство',
                path: '/category/arts',
            },
            {
                name: 'Business and economy',
                rusName: 'Бизнес и экономика',
                path: '/category/business_economy',
            },
            {
                name: 'Information technology',
                rusName: 'Информационные технологии',
                path: '/category/it',
            },
            {
                name: 'Literature for children',
                rusName: 'Литература для детей',
                path: '/category/children',
            },
            {
                name: 'Scientific literature',
                rusName: 'Научная литература',
                path: '/category/scientific',
            },
        ],
    },
];

export default Routes;
