import axios from "axios";
import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { persist } from "zustand/middleware";

export const useUserData = create(devtools(
    persist(
        (set) => ({
            users: [],
            isLoad: true,
            error: "",
            catchError: false,
            changeError: (data) => {
                const a = "asd"
                const c = a + data
                set({
                    error: c
                })
            },
            loadUsers: async (a, b) => {
                // async const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
                // return ({
                //     users: response.data
                // })

                set({
                    isLoad: true,
                    error: "",
                    catchError: false,
                })
                    let isLoaded = localStorage.getItem("user-data") // null = false
                    if (isLoaded) {
                        console.log("Данные существуют")
                        set({
                            isLoad: false,
                            error: "",
                            catchError: false,
                        })
                    } else {
                        try {
                            // Promise - объект, который обещает вернуть результат позже
                            // pending - ожидание
                            // fulfilled - успешно выполнено
                            // rejected - произошла ошибка

                            // const promise = new Promise((resolve, reject) => {
                            //     setTimeout(() => {
                            //         resolve("Данные загружены")
                            //     }, 2000)

                            //     console.log("Начало")

                            //     promise.then((result) => {
                            //         console.log(result)
                            //     })

                            //     console.log("Конец")
                            // })
                            // npm install @tanstack/react-query
                            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
                        set({
                            users: response.data
                        })
                        } catch (error) {
                            set({
                                error: error.message,
                                catchError: true
                            })
                        } finally {
                            set({
                                isLoad: false
                            })
                        }
                        }
            }
        }), 
        {
            name: "user-data"
        }
)))