import { Link } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import {useCartStore} from "../data/useCartStore"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import MutationTest from "../components/Mutation";
import axios from "axios";
import { useEffect, useState } from "react";
import { getMockProducts } from "../api/ProductsMockApi";

function TunsTack() {
    const carts = useCartStore((store) => store.carts)
    const addToCart = useCartStore((store) => store.addToCart)

    const [data, setData] = useState([])


    async function getFetch() {
        const response = await axios.get("https://6a70d6caf687776c13efc152.mockapi.io/products/")
        setData(response.data)
    }

    async function addProduct(params) {
        const response = await axios.post("https://6a70d6caf687776c13efc152.mockapi.io/products/", params)
        console.log(response.data)
    }

    async function updateProduct(id, updates) {
        const response = await axios.put(`https://6a70d6caf687776c13efc152.mockapi.io/products/${id}`, updates)
        return response.data
    }

    async function deleteProduct(id) {
        const response = await axios.delete(`https://6a70d6caf687776c13efc152.mockapi.io/products/${id}`, { data: {reason: "duplicate"} })
        console.log("Удалённый объект: ", response.data)
        console.log("Статус: ", response.status)
        return response.data
    }

    const newProduct = {
        title: "Gaming Monitor",
        price: 450,
        category: "electronics",
        description: "High refresh rate monitor",
        inStock: true
    }

    useEffect(() => {
        getFetch()
        let product = getMockProducts()
        console.log(`result ${product.data}`)
    }, [])

    // https://6a70d6caf687776c13efc152.mockapi.io/products/
    
    console.log(data)
    function ProductsComponent() {
        const {
            data: products,
            isPending,
            isError,
            error,
            refetch
        } = useQuery({
            queryKey: ["products"],
            queryFn: getProducts,
            staleTime: 60 * 1000,
            refetchInterval: 60 * 1000,
            refetchOnMount: true,
            refetchOnWindowFocus: true,
        })

        console.log("наш query")

        // return (
        //     <h1>Товары</h1>
        // )
    }

    return(
        <>
        {/* <button onClick={() => addToCart(`Test`)}>test</button>
       <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        <h3>Контакты:</h3> */}
        <div>
            <button onClick={() => deleteProduct("1")}>Добавить товар</button>
            {/* <ContactsList/> */}
            <ProductsComponent />
            <MutationTest />
        </div>
        </>
    )
}
export default TunsTack