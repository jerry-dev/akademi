import React from 'react';
import Sidebar from './Sidebar.js';
import HomeView from './homeview/HomeView.js';

const App = () => {
    return (
        <React.Fragment>
            <Sidebar/>
            <HomeView/>
        </React.Fragment>
    )
}

export default App;