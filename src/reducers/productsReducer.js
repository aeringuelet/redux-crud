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
    EDIT_PRODUCT_ERROR,
    EDIT_PRODUCT_SUCCESS,
    EDITED_PRODUCT_START,
    EDITED_PRODUCT_ERROR,
    EDITED_PRODUCT_SUCCESS
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    product: {}
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
                loading: true,
                product: {}
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state, 
                loading: false,
                error: false,
                products: action.payload,
                product: {}
            }

        case GET_PRODUCTS_ERROR:
            return {
                ...state, 
                loading: false,
                error: true,
                products: [],
                product: {}
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

        case EDIT_PRODUCT_GET:
            return {
                ...state,
                error: null
            }

        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }

        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                product: action.payload
            }  

        case EDITED_PRODUCT_START:
            return {
                ...state,
                error: null
            }

        case EDITED_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }

        case EDITED_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.map(prod => (prod.id === action.payload.id ? prod = action.payload : prod))
            }

        default:
            return state;
    }
}