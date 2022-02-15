import React from 'react';
import Sidebar from './Sidebar.js';
import HomeView from './homeview/HomeView.js';
import StudentsView from './StudentsView.js';
import TeachersView from './TeachersView.js';
import EventView from './EventView.js';
import FinanceView from './FinanceView.js';
import FoodView from './FoodView.js';
import UserView from './UserView.js';
import ChatView from './ChatView.js';
import ActivityView from './ActivityView.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <Sidebar/>
            <Routes>
                <Route exact path="/" element={<HomeView/>}></Route>
                <Route exact path="/students" element={<StudentsView/>}></Route>
                <Route exact path="/teachers" element={<TeachersView/>}></Route>
                <Route exact path="/event" element={<EventView/>}></Route>
                <Route exact path="/finance" element={<FinanceView/>}></Route>
                <Route exact path="/food" element={<FoodView/>}></Route>
                <Route exact path="/user" element={<UserView/>}></Route>
                <Route exact path="/chat" element={<ChatView/>}></Route>
                <Route exact path="/activity" element={<ActivityView/>}></Route>
            </Routes>
        </React.Fragment>
    )
}

export default App;