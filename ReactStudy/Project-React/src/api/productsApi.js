import { apiClient, NewApi } from "./apiClient"

export async function getProducts() {
    const response = await apiClient.get(`/products`)
    return response.data.products
}

export async function createProduct(params) {
    const response = await apiClient.post(`/products`)
    return response.data.products
}

export async function addProduct(productData) {
    const response = await NewApi.post(`/Products`, productData)
    return response.data
}