import { Link } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import {useCartStore} from "../data/useCartStore"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import MutationTest from "../components/Mutation";
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteProducts, getMockProducts } from "../api/ProductsMockApi";
import { useForm } from "react-hook-form";

function TunsTack() {

    // let data121 = [
    //     {
    //         id: 1,
    //         title: "123123123"
    //     },
    //     {
    //         id: 2,
    //         title: "123kmasdij"
    //     }
    // ]

    // let search = "123123123"

    // for (const element of data121) {
    //     if (search.toLowerCase() == element.title.toLowerCase()) {
    //         console.log(`Найденный элемент: ${element}`)
    //         console.log(element)
    //     }
    // }

    // const result = data121.filter((item) => {
    //     return item.title.toLowerCase().includes(search.toLowerCase())
    // })
    // console.log(result)

    // const result2 = data121.find((item) => item.title.toLowerCase().includes(search))
    // console.log(result2)

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
async function getSome() {
        const promise = await axios.get("https://6a73ed3915e0453fe1b43f97.mockapi.io/Products/")
        console.log(promise.data)
        return promise.data
    }
    useEffect(() => {
        async function load() {
            getFetch()
            let product = await getMockProducts()
            const some = await getSome()
            console.log(product)
        }
        load()
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

        function GetProductsComponent() {
        const {
            data: products,
            isPending,
            isError,
            error,
            refetch
        } = useQuery({
            queryKey: ["product"],
            queryFn: getMockProducts
        })}
        // return (
        //     <h1>Товары</h1>
        // )
    }
    const [point, setPoint] = useState('ADD')
    function ADD() {
        setPoint(`ADD`)
    }
    function POST() {
        setPoint(`POST`)
    }
    function PUT() {
        setPoint(`PUT`)
    }
    function DEL() {
        setPoint(`DEL`)
    }
      const { register, handleSubmit, formState: { errors } } = useForm()
      function onSubmit(data) {
        console.log(data)
    }
    return(
        <>
        {/* <button onClick={() => addToCart(`Test`)}>test</button>
       <button className="GoTo"><Link to="/" className="clear">На главную</Link></button> 
        <h3>Контакты:</h3> */}
        <button onClick={() => ADD()}>Запросить</button>
        <button onClick={() => POST()}>Добавить</button>
        <button onClick={() => PUT()}>Изменить</button>
        <button onClick={() => DEL()}>Удалить</button>
        {/* if (point == ADD) {
            getMockProducts()
        } else if (point == POST) {
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {
                required: "Введите название товара",
                minLength: {
                    value: 3,
                    message: "Минимум 3 символа"
                },
                maxLength: {
                    value: 60,
                    message: "Максимум 60 символов"
                }
            })} placeholder="Название" />
            {
                errors.title && (
                    <p>{errors.title.message}</p>
                )
            }
            <input {...register("price")} placeholder="Название" />
            <input {...register("category")} placeholder="Название" />
            <button type="submit">Добавить</button>
        </form>
        } else if (point == PUT) {
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {
                required: "Введите название товара",
                minLength: {
                    value: 3,
                    message: "Минимум 3 символа"
                },
                maxLength: {
                    value: 60,
                    message: "Максимум 60 символов"
                }
            })} placeholder="Название" />
            {
                errors.title && (
                    <p>{errors.title.message}</p>
                )
            }
            <input {...register("price")} placeholder="Название" />
            <input {...register("category")} placeholder="Название" />
            <button type="submit">Добавить</button>
        </form>
        } else if (point == DEL) {
            deleteProducts()
        } */}
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