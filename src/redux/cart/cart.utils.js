export const addItemToCart = (cartItems, cartItemToAdd) => {
    /**
     * add to cart: 
     * b1: check id đã tồn tại hay chưa, chưa tồn tại add vào checkout page
     * b2: tồn tại rồi, clone data của cartItem và thay đổi giá trí quantity cộng thêm 1
     */
    const exitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); // cartItem hiện tại
    if (exitingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemIfQuantityEqual = (cartItems, cartItemToRemove) => {
    /**
     * remove khi số lượng < 1
     * b1: tìm cart với id khi click
     * b2: check nếu mà cartItem hiện tại có === 1 hay k,
     * b3: tạo 1 obj mới, khi click thì giảm quantity
     */
    const exitstingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)   //cartItem hiện tại
    if (exitstingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )


}