import "./index.css";
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app/App.js';
import { HashRouter } from "react-router-dom";
import store from './store/index.js';
import { Provider } from 'react-redux';

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);