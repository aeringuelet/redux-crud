import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
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

        default:
            return state;
    }
}