import { Route, Switch } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    LoginOutlined
} from '@ant-design/icons';
import actions from '../redux/Authentication/action';
import routes from './routes';
import { Link } from 'react-router-dom';

const {Header, Content, Sider, Footer} = Layout;

function ProtectedRoutes() {
    const {name, logOutLoader} = useSelector(state => state.authenticationReducer);

    const dispatch = useDispatch();
    let onLogout = () => {
        dispatch({
            type: actions.LOGOUT,
        });
    };



    return (
        <Layout>
            <Header>
                <div className='header-info'>
                    <div className='name'>{name}</div>
                    <Button danger type='primary' icon={<LoginOutlined/>} loading={logOutLoader} onClick={onLogout}/>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}>
                        {routes.map(({component: Component, path, exact, title, icon}, index) => (
                            <Menu.Item key={index+1} icon={icon}>
                                <Link to={`/${path}`}/> {title}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Content style={{padding: '0 24px', minHeight: 280}}>
                    <Switch>
                        {routes.map(({component: Component, path, exact}, index) => (
                            <Route path={`/${path}`} key={index}>
                                <Component/>
                            </Route>
                        ))}
                    </Switch>
                </Content>
            </Layout>
            <Footer style={{textAlign: 'center'}}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
    );
}

export default ProtectedRoutes;
