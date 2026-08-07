import { useMutation } from "@tanstack/react-query"
import { createProduct } from "../api/productsApi"
import { useForm } from "react-hook-form"
import { useState } from "react"

function MutationTest() {
    const [price, setPrice] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    // const createProductMutation = useMutation({
    //     mutationFn: createProduct
    // })

    // function onSubmit(data) {
    //     createProductMutation.mutate(data)
    // }

    function onSubmit(data) {
        console.log(data)
    }

    return (
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
    )
}
export default MutationTest
