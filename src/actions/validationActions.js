import {
    VALIDATE_FORM,
    VALIDATE_FORM_ERROR,
    VALIDATE_FORM_SUCCESS
} from '../types';

export function validateFormAction() {
    return (dispatch) => {
        dispatch(startValidation());
    }
}

export const startValidation = () => {
    return {
        type: VALIDATE_FORM
    }
}

export const validationError = () => {
    return {
        type: VALIDATE_FORM_ERROR
    }
}

export const validationSuccess = () => {
    return {
        type: VALIDATE_FORM_SUCCESS
    }
}