import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

import App from "./ReactApp";

ReactDOM.render(
    /*Redux Provider is included access the store values from anywhere inside the child components.*/
    <Provider store={store()}>
        <App/>
    </Provider>, document.getElementById('app'));
