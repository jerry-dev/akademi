import { createStore } from 'redux';
import actions from './actions.js';
import initialState from './state.js';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_HOMEVIEW_DATA':
            return actions['loadHomeViewData'](state, action.payload);
        case 'IS_FETCHING_DATA':
            return actions['isFetchingData'](state, action.payload);
    }
    
    return state;
};

const store = createStore(reducer);

export default store;