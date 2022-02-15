import "./index.css";
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app/App.js';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);