import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function category(state = InitialState.love, action) {
    let {type, payload} = action;

    switch(type) {
        case types.LOVE:
            return [...state, payload]
        // case types.WRITEMSG:
        //     return 
        default:
            return state;
    }
};