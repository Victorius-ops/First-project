import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getMockProducts, getProducts } from "../api/ProductsMockApi";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

function FilmSearch({value, UserInput}) {

    

    // function useDebounces(value, delay) {
    //     const [debouncedSearch, setDebouncedSearch] = useState("")
        
    //     useEffect(() => {
    //         const timer = setTimeout(() => {
    //             setDebouncedSearch(value)
    //         }, delay)

    //         return () => {
    //             clearTimeout(timer)
    //         }
    //     }, [value, delay])
    // }
    // useDebounces(search, 500)
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 500)
   
    const moviesQuery = useQuery({
        queryKey: ["movies", debouncedSearch],
        queryFn: () => getProducts(debouncedSearch),
    })


    // /anime?page=3&limit=10 

    return(
        <>
        <div>
            <input 
                type="text" 
                value={search} 
                onChange={(event) => setSearch(event.target.value)} 
            />
            <input type="text"
                placeholder="Введите название фильма"
                value={value}
                onChange={(e) => UserInput(e.target.value)}
             />
        </div>
        
        </>
    )
}
export default FilmSearch