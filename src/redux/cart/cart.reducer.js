import * as Types from '../../configs/actionType';
import { addItemToCart, removeItemIfQuantityEqual } from './cart.utils';
const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.TOGGLE_CART_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        case Types.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case Types.REMOVE_ITEM_IF_QUANTITY_EQUAL_ONE:
            return {
                ...state,
                cartItems: removeItemIfQuantityEqual(state.cartItems, action.payload)
            }
        case Types.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;