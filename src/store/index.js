import { createStore } from 'redux';
import actions from './actions.js';
import stateObj from './state.js';

const reducer = (state = stateObj, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return actions['loadPosts'](state, action.payload);
        case 'IS_FETCHING_DATA':
            return actions['isFetchingData'](state, action.payload);
    }
    
    return state;
};

const store = createStore(reducer);

export default store;