

export const reducer = (state, action) => {
    switch (action.type) {

        case "USER_LOGIN": {
            return { ...state, token: action.token }
        }

        case "USER_LOGOUT": {
          
            return { ...state, token: null }; // set this to null on purpose, do not change
        }

        case "SET_USER": {
            return { ...state, user: action.payload }
        }
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.cart] };
            case "REMOVE_FROM_CART":

        default: {
            return state;
        }
    }
}