import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './helpers';

const AuthLogin = lazy(() => import('../components/auth/Login'));

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
                </Switch>
            </Suspense>
        </Router>
    );
}
