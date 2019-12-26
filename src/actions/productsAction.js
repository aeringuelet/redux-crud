import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCTS_START,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_GET,
    DELETE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_GET,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR,
    EDITED_PRODUCT_START
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

export const editProductAction = id => {
    return dispatch => {
        dispatch(getProductToEdit());

        axiosClient.get(`/products/${id}`)
            .then(response => {
                dispatch(editProductSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(editProductError());
            })
    }
}

export const getProductToEdit = () => ({
    type: EDIT_PRODUCT_GET
})

export const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

export const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR
})

export const editedProductAction = product => {
    return dispatch => {
        dispatch(editedProductStart());

        axiosClient.put(`/products/${product.id}`, product)
            .then(response => {
                dispatch(editedProductSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(editedProductError());
            })
    }
}

export const editedProductStart = () => ({
    type: EDITED_PRODUCT_START
})

export const editedProductSuccess = product => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
})

export const editedProductError = () => ({
    type: EDITED_PRODUCT_ERROR
})