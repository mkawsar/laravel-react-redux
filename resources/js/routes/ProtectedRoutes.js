import { Route, Switch } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LoginOutlined } from '@ant-design/icons';
import actions from '../redux/Authentication/action';
import routes from './routes';

const {Header, Content} = Layout;

function ProtectedRoutes() {
    const {name, logOutLoader} = useSelector(state => state.authenticationReducer);

    const dispatch = useDispatch();

    return (
        <Layout className='layout'>
            <Header>
                <div className='header-info'>
                    <div className='name'>{name}</div>
                    <Button danger type='primary' icon={<LoginOutlined/>}
                            loading={logOutLoader}
                    />
                </div>
            </Header>

            <Content sytle={{padding: '0 50px'}}>
                <Switch>
                    {routes.map(({component: Component, path, exact}, index) => (
                        <Route path={`/${path}`} key={index} exact={exact}>
                            <Component/>
                        </Route>
                    ))}
                </Switch>
            </Content>
        </Layout>
    );
}

export default ProtectedRoutes;
