import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://dummyjson.com"
})

export const NewApi = axios.create({
    baseURL: "https://6a73ed3915e0453fe1b43f97.mockapi.io"
    
})

export const AnimeApi = axios.create({
    baseURL: "https://kitsu.io/api/edge/anime"
})