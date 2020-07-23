import * as Types from '../../configs/actionType';

export const toggleCartHidden = () => {
    return {
        type: Types.TOGGLE_CART_HIDDEN
    }
}

export const addToCart = (item) => {
    return {
        type: Types.ADD_TO_CART,
        payload: item
    }
}

export const removeItemIfQuantityEqualOne = (item) => {
    return {
        type: Types.REMOVE_ITEM_IF_QUANTITY_EQUAL_ONE,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: Types.REMOVE_CART_ITEM,
        payload: item
    }
}