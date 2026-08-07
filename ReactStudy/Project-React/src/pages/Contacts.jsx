import { Link } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import {useCartStore} from "../data/useCartStore"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import TunsTack from "./tunsstack";

function Contacts() {
    const carts = useCartStore((store) => store.carts)
    const addToCart = useCartStore((store) => store.addToCart)
    
    function ProductsComponent() {
        const {
            data: products,
            isPending,
            isError,
            error,
            refetch
        } = useQuery({
            queryKey: ["products", 5],
            queryFn: getProducts
        })
        console.log("наш query")
        // console.log(query)

        return (
            <h1>Товары</h1>
        )
    }

    return(
        <>
        <button onClick={() => addToCart(`Test`)}>test</button>
       <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        <h3>Контакты:</h3>
        <div>
            <ContactsList/>
            <ProductsComponent />
            <TunsTack/>
        </div>
        </>
    )
}
export default Contacts