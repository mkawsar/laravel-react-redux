import { useEffect } from 'react';
import action from '../../redux/Settings/actions';
import { useDispatch, useSelector } from 'react-redux'

function UserList() {
    const { loader } = useSelector(state => state.settingReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (loader) {
            dispatch({
                type: action.GET_USER_LIST
            })
        }
    })

    return (
        <div className="dashboard">
            <h1>User List</h1>
        </div>
    );
}

export default UserList;
