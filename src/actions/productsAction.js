import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
} from '../types';
import axiosClient from '../config/axios';

export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());

        axiosClient.post('/products', product)
            .then(response => {
                console.log(response);
                dispatch(addProductSuccess(product));
            })
            .catch(error => {
                console.log(error);
                dispatch(addProductError());
            })

    }
}

export const newProduct = () => ({
    type: ADD_PRODUCT
})

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR
})