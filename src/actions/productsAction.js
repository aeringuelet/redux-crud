import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
} from '../types';

export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());
        dispatch(addProductSuccess(product))
    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
})

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})