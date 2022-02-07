import { useEffect } from 'react';
import Spinner from './components/global/Spinner';
import { AppRoutes } from './routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux'
import actions from './redux/Authentication/action';


function ReactApp() {
    //Getting isAuthenticated store value from Authentication reducer.
    const {isAuthenticated, validateUserLoader} = useSelector(state => state.authenticationReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch({
                type: actions.GET_AUTH_USER,
            });
        }
    }, [])

    return <AppRoutes isAuthenticated={isAuthenticated}/>
}

export default ReactApp;
