import {z} from "zod"


export const sellerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Название должно содержать минимум 3 символа")
        .max(30, "Название не должно быть длинее 60 символов"),
    Email: z
        .string()
        .email("Введите корректный email"),
    age: z.coerce.number()
        .min(18, "Регистрация возможна с 18 лет")
        .max(100, "Возраст не может быть более 100 лет"),
    password: z
        .string().regex(/ ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$ /, "Пароль должен содержать хотя бы 1 цифру и заглавную букву"),
    confirmpass: z.string(),
    }).refine((data) => data.password === data.confirmpass, {
    message: 'Пароли не совпадают',
    path: ['confirmpass'],
    category: z.enum(["Electronic", "Clothes", "Auto", "Etc"]),
    terms: z
    .boolean()
    .refine((val) => val === true, {
    message: "Вы должны согласиться с условиями использования",
    })
    })