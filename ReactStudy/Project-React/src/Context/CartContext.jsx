import { useContext, useReducer } from "react"
import data from "./CartContext.jsx"

const CartContext = createContext()

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const product = action.payload
            const alreadyInCart = state.some(item => item.id == product.id)
            if (alreadyInCart) {
                return state
            }
            return [...state, action.payload]
        }
        case "CLEAR_CART": {
            return []
        }
        case "REMOVE_FROM_CART": {
            return state.filter(value => value.id !== action.payload)
        }
        default:
            return state
    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [])

    function addToCart(product) {
        dispatch({type: "ADD_TO_CART", payload: product})
    }

    function clearCart() {
        dispatch({type: "CLEAR_CART"})
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
