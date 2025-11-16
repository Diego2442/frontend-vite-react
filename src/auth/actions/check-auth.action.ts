import { userApi } from "../api/userApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const checkAuthAction = async():Promise<AuthResponse> => {
    const token = (localStorage.getItem('token'))
    if(!token) throw new Error('No token found')
    
    try {
        const { data } = await userApi.get<AuthResponse>(`/user`)

        localStorage.setItem('token', JSON.stringify(data.token))

        return data        
    } catch (error) {
        localStorage.removeItem('token')
        console.log(error)
        throw new Error('Token expired or not valid')
    }
}