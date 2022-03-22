import { createStore } from 'redux';
import actions from './actions.js';
import initialState from './state.js';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getHomeData':
            actions['getHomeData']();
            break;
    }
    
    return state;
};

const store = createStore(reducer);

export default store;