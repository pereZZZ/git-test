import { combineReducers } from 'redux';
import love from './love';
import allrepo from './allrepo'

const reducers = combineReducers({
    love,
    allrepo
});

export default reducers;