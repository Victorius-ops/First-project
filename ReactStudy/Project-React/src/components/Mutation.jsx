import { useMutation } from "@tanstack/react-query"
import { createProduct, addProduct } from "../api/productsApi"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "../schemas/productSchema"
import SellerRegestration from "./sellerRegestration"

function MutationTest() {
    const [price, setPrice] = useState("")
    const { 
        register, 
        reset, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(productSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            price: "",
            category: "",
            sellerEmail: "",
            inStock: false
        }
    })

    
    // const moviesQuery = useQuery({
    //     queryKey: ["movies"],
    //     queryFn: getMovies
    // })

    
    const {
        mutate,
        isPending,
        isError,
        isSuccess,
        error,
        data: createdProduct
    } = useMutation({
        mutationFn: addProduct,
        onSuccess: (createdProduct) => {
            console.log("Сервер создал: ", createdProduct)
            reset()
        },
        onError: (error) => {
            console.log("STATUS:", error.response?.status)
            console.log("RESPONSE:", error.response?.data)
            console.log("ERROR:", error)  
        },
        onSettled: () => {
            console.log("Запрос завершился: успехом или ошибкой")
        }
    })

    async function onSubmit(data) {
        mutate(data)
    }
    return (
        <div>
            <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>
                <h2>Название</h2>
                <input {...register("title")} placeholder="Например, Игровая мышь" />
            </label>
            {
                errors.title?.message && (
                    <p role="alert">{errors.title.message}</p>
                )
            }
            <label>
                <h2>Цена</h2>
                <input type="number" step="0.01" {...register("price", { valueAsNumber: true })} placeholder="1500" />
            </label>
            {
                errors.price?.message && (
                    <p role="alert">{errors.price.message}</p>
                )
            }
            <label>
                <h2>Категория</h2>
                <select {...register("category")}>
                    <option value="">Выберите категорию</option>
                    <option value="laptops">Ноутбуки</option>
                    <option value="smartphones">Смартфоны</option>
                    <option value="accessories">Аксессуары</option>
                </select>
            </label>
            {
                errors.category?.message && (
                    <p role="alert">{errors.category.message}</p>
                )
            }
            <label>
                <h2>Email продавца</h2>
                <input type="email" {...register("sellerEmail")} placeholder="seller@example.com" />
            </label>
            {
                errors.sellerEmail?.message && (
                    <p role="alert">{errors.sellerEmail.message}</p>
                )
            }
            <label>
                <h2>Товар в наличии <input type="checkbox" {...register("inStock")} /></h2>
                
            </label>
            <button type="submit">Проверить данные</button>
        </form>
        </div>
        <div>
            <h2>Регистрация продавца</h2>
            <SellerRegestration />
        </div>
        </div>
    )
}
export default MutationTest
