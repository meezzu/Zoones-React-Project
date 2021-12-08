import {combineReducers} from 'redux';
import periodFilterReducer from './periodFilter/periodFilterReducer';

const rootReducer = combineReducers({
periodFilter: periodFilterReducer
});
export default rootReducer;