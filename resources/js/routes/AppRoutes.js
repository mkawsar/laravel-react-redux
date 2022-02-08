import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './helpers';
import ProtectedRoutes from './ProtectedRoutes';

const AuthLogin = lazy(() => import('../components/auth/Login'));
const RegisterPage = lazy(() => import('../components/auth/Register.js'));

export function AppRoutes({isAuthenticated}) {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PublicRoute path="/" isAuthenticated={isAuthenticated} exact>
                        <AuthLogin/>
                    </PublicRoute>
                    <PublicRoute path="/login" isAuthenticated={isAuthenticated} exact>
                        <AuthLogin/>
                    </PublicRoute>
                    <PublicRoute path="/register" isAuthenticated={isAuthenticated} exact>
                        <RegisterPage/>
                    </PublicRoute>
                    <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
                        <ProtectedRoutes/>
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </Router>
    );
}
