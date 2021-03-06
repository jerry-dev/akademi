import "./index.css";
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app/App.js';
import { HashRouter } from "react-router-dom";
import store from './store/index.js';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);