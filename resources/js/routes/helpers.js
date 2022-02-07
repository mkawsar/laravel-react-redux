import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute({children, isAuthenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                (isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location},
                        }}
                    />
                ))
            }
        />
    );
}

export function PublicRoute({children, isAuthenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                (!isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: {from: location}
                        }}
                    />
                ))
            }
        />
    );
}
