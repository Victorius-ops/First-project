import { AnimeApi } from "./apiClient";

export async function getAnimeMovies({page, limit}) {
    const offset = (page - 1) * limit
    const response = await AnimeApi.get("", {
        params: {
            "page[limit]": limit,
            "page[offset]": offset
        } 
    })
    return response.data
}