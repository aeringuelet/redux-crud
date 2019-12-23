import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCTS_START,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS
} from '../types';

import axiosClient from '../config/axios';

export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(newProduct());

        axiosClient.post('/products', product)
            .then(response => {
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

export function getProductsAction() {
    return dispatch => {
        dispatch(getProductsStart());

        axiosClient.get("/products")
            .then(response => {
                dispatch(getProductsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(getProductsError())
            })
    }
}

export const getProductsStart = () => ({
    type: GET_PRODUCTS_START
})

export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR
})