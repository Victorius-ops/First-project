import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { persist } from "zustand/middleware";

export const useUsersFavFilms= create(devtools(
    persist(
        (set) =>({
            users: [],
            isReg: false,
            isAuth: false,
            changeIsReg: (action) => {
                // localStorage.setItem("Test", "Hello")
                // let data_local = localStorage.getItem("UsersList")
                
                set({
                    isReg: action
                })
            }
        }),
        {
            name:"UsersList"
        }
)))