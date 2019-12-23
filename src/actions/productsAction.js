import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCTS_START,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_GET,
    DELETE_PRODUCT_SUCCESS
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

export const deleteProductAction = id => {
    return dispatch => {
        dispatch(getProductToDelete());

        axiosClient.delete(`/products/${id}`)
            .then(response => {
                dispatch(deleteProductSuccess(id));
            })
            .catch(error => {
                console.log(error);
                dispatch(deleteProductError());
            })
    }
}

export const getProductToDelete = () => ({
    type: DELETE_PRODUCT_GET
})

export const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
})

export const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR
})