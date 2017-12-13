import * as types from '../constants/ActionTypes'

const middleware = store => next => action => {
    next(action);
    if(action.type == types.OBJMSG){
        // localStorage.setItem("msg", JSON.stringify(store.getState().msg))
    }
    // const data = action.payload;
//     if(action.type == types.OBJMSG) {
       // localStorage.setItem("Bought", JSON.stringify(store.getState().bought))
//   }
    return;
}
export default middleware;