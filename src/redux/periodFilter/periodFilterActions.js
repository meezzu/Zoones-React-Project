import {FILTER_PERIOD_REQUEST, FILTER_PERIOD_SUCCESS, FILTER_PERIOD_FAILURE} from './periodFilterDataTypes';

const fetchFilterRequest = () => {
    return {
        type: FILTER_PERIOD_REQUEST
    }
};

const fetchFilterSuccess = (data) => {
    return {
        type: FILTER_PERIOD_SUCCESS,
        payload: data
    }
};

const fetchFilterFailure = (error) => {
    return {
        type: FILTER_PERIOD_FAILURE,
        payload: error
        
    }
};


export const filterPeriod = (value) => (dispatch) => {

    dispatch(fetchFilterSuccess(value));

} 
