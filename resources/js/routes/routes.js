import {lazy} from 'react';

export default [
    {
        path: 'dashboard',
        component: lazy(() => import('../components/home/Dashboard')),
        exact: true
    }
];
