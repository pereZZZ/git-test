import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function category(state = InitialState.love, action) {
    let {type, payload} = action;

    switch(type) {
        case types.LOVE:
            return [...state, payload]
        case types.DELLOVE:
            return state.filter((item, index)=>{return item.id!=payload.id});
        default:
            return state;
    }
};