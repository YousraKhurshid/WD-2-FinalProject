export const reducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN": {
            return { ...state, token: action.token };
        }
        case "USER_LOGOUT": {
            return { ...state, token: null };
        }
        case "SET_USER": {
            return { ...state, user: action.payload };
        }
        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.item] };
        }
        case "REMOVE_FROM_CART": {
            // Remove the item from the cart based on its index
            const updatedCart = state.cart.filter((item, index) => index !== action.index);
            return { ...state, cart: updatedCart };
        }
        default: {
            return state;
        }
    }
};
