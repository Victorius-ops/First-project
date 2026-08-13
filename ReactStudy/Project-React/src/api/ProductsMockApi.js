import { NewApi } from "./apiClient"

export async function getMockProducts() {
    const response = await NewApi.get(`/Products`)
    return response.data
}
export async function postProducts(params) {
    const response = await NewApi.post(`/Products` , params)
}
export async function updateProducts(id, update) {
    const response = await NewApi.put(`/Products/${id}`, update)
}
export async function deleteProducts(id) {
    const response = await NewApi.delete(`/Products/${id}`)
}