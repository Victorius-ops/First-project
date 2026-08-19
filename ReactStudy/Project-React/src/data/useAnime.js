import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { persist } from "zustand/middleware";

export const useUsersFavFilms= create(devtools(
    persist(
        (set) =>({
            Anime: [],

        }),
        {
            name:"AnimeList"
        }
)))