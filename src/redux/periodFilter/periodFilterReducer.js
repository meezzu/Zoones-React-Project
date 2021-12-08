import {FILTER_PERIOD_REQUEST, FILTER_PERIOD_SUCCESS, FILTER_PERIOD_FAILURE} from './periodFilterDataTypes';

const initialState = {
loading: false,
data: [],
err: ""
}

const periodFilterReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTER_PERIOD_REQUEST: return {
            ...state, loading: true,

        };
        case FILTER_PERIOD_SUCCESS: return {
            loading: false,
            data: action.payload,
            err: "",     
         };
        case FILTER_PERIOD_FAILURE: return {
            loading: false,
            data: [],
            err: action.payload
        };
        default: return state;
    }
};
export default periodFilterReducer;