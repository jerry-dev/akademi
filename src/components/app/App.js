import React from 'react';
import Sidebar from '../sidebar/Sidebar.js';
import HomeView from '../homeview/HomeView.js';
import StudentsView from '../studentsview/StudentsView.js';
import TeachersView from '../teachersview/TeachersView.js';
import EventView from '../eventview/EventView.js';
import FinanceView from '../financeview/FinanceView.js';
import FoodView from '../foodview/FoodView.js';
import UserView from '../userview/UserView.js';
import ChatView from '../chatview/ChatView.js';
import ActivityView from '../activityview/ActivityView.js';
import { Routes, Route } from 'react-router-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';

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