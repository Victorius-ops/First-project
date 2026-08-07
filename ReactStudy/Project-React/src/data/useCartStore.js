import { create } from "zustand";
import {devtools} from "zustand/middleware"

export const useCartStore = create(devtools((set) => ({
    carts: [],
    title: "123",
    
    addToCart: (cart) => {
        set((state) => {
            const new_carts = [...state.carts, cart]
            console.log(state.carts)
            return ({
                carts: new_carts,
                title: `241`
            })
        })
    },
    
})))

// () => ({

// })

// create((set) => ({
//     asdasd....,
//     addTo: () => {
//         set((state) => {
//             const ...;
//             asds...
//             console.log()..,
//             return ({
                
//             })
//         })
//     }

// }))