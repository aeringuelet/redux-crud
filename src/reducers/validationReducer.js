import {
    VALIDATE_FORM,
    VALIDATE_FORM_ERROR,
    VALIDATE_FORM_SUCCESS
} from '../types';

const initialState = {
    error: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_FORM:
            return {
                ...state,
                error: null
            }

        case VALIDATE_FORM_SUCCESS:
            return {
                ...state,
                error: null
            }

        case VALIDATE_FORM_ERROR:
            return {
                ...state,
                error: true
            }
    
        default:
            return initialState;
    }
}