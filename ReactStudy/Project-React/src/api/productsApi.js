import { apiClient } from "./apiClient"

export async function getProducts() {
    const response = await apiClient.get(`/products`)
    return response.data.products
}

export async function createProduct(params) {
    const response = await apiClient.post(`/products`)
    return response.data.products
}
