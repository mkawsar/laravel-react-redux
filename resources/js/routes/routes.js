import {lazy} from 'react';
import {
    HomeOutlined,
    UserSwitchOutlined
} from '@ant-design/icons'

export default [
    {
        path: 'dashboard',
        component: lazy(() => import('../components/home/Dashboard')),
        exact: true,
        title: 'Home',
        icon: <HomeOutlined/>
    },
    {
        path: 'user/list',
        component: lazy(() => import('../components/settings/UserList')),
        exact: true,
        title: 'Users',
        icon: <UserSwitchOutlined/>
    }
];
