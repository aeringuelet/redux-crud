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

const initialState = {
    products: [],
    error: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null,
            }
    
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            }

        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: true 
            }

        case GET_PRODUCTS_START:
            return {
                ...state, 
                loading: true
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: false,
                products: action.payload
            }

        case GET_PRODUCTS_ERROR:
            return {
                ...state, 
                loading: false,
                error: true,
                products: []
            }

        case DELETE_PRODUCT_GET:
            return {
                ...state
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter(prod => prod.id !== action.payload)
            }

        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}