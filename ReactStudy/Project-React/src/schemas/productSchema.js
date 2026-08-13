import {z} from "zod"


export const productSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Название должно содержать минимум 3 символа")
        .max(60, "Название не должно быть длинее 60 символов"),
    price: z
        .number({message: "Цена должна быть числом"})
        .min(58, "Цена не может быть меньше 58$")
        .max(800, "Цена не может быть больше 800$")
        .positive("Число не может быть меньше 0"),
    category: z 
        .string()
        .trim()
        .min(6, "Название не может быть менее 6 символов")
        .max(66, "Название не может быть длиннее 66 символов"),
    sellerEmail: z
        .string()
        .email("Введите корректный email"),
    inStock: z.boolean()
})