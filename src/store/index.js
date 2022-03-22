import { createStore } from 'redux';
import actions from './actions.js';
import stateObj from './state.js';

const reducer = (state = stateObj, action) => {
    switch (action.type) {
        case 'getHomeData':
            actions['getHomeData']();
            break;
    }
    
    return state;
};

const store = createStore(reducer);

export default store;