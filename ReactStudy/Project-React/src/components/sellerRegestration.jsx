import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sellerSchema } from "../schemas/sellerSchema"


function SellerRegestration() {
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(sellerSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            Email: "",
            age: "",
            password: "",
            confirmpass: ""
        }
    })

      function onSubmit2(data) {
        console.log("DATA:", data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit2)} noValidate>
                <label>
                    <h4>Имя продавца</h4>
                    <input {...register("name")} placeholder="Джон" />
                </label>
                            {
                errors.name?.message && (
                    <p role="alert">{errors.name.message}</p>
                )
            }
                <label>
                    <h4>Почта продовца</h4>
                    <input {...register("Email")} placeholder="test@gmail.com" />
                </label>
                            {
                errors.Email?.message && (
                    <p role="alert">{errors.Email.message}</p>
                )
            }
                <label>
                    <h4>Возраст продавца</h4>
                    <input type="number" {...register("age")} placeholder="18" />
                </label>
                            {
                errors.age?.message && (
                    <p role="alert">{errors.age.message}</p>
                )
            }
                <label>
                    <h4>Пароль</h4>
                    <input {...register("password")} placeholder="18" />
                </label>
                            {
                errors.password?.message && (
                    <p role="alert">{errors.password.message}</p>
                )
            }
                <label>
                    <h4>Подтверждение пароля</h4>
                    <input {...register("confirmpass")} placeholder="18" />
                </label>
                            {
                errors.confirmpass?.message && (
                    <p role="alert">{errors.confirmpass.message}</p>
                )
            }
            <label>
                <select {...register("category")}>
                    <option value="">Выберите категорию</option>
                    <option value="Electronic">Электроника</option>
                    <option value="Clothes">Одежда</option>
                    <option value="Auto">Автотовары</option>
                    <option value="Etc">Другое</option>
                </select>
            </label>
            <br />
            <label>
                <input {...register("terms")} type="checkbox"/>
                Я принимаю условия пользовательского соглашения
            </label>
                         {
                errors.terms?.message && (
                    <p role="alert">{errors.terms.message}</p>
                )
            }
                 <button type="submit">Проверить данные</button>
            </form>
            </div>
    )
}

export default SellerRegestration