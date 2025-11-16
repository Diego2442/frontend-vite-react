import { userApi } from "@/auth/api/userApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const loginAction = async(email: string, password: string): Promise<AuthResponse> => {

    try {
        
        const { data } = await userApi.post<AuthResponse>('/login', {
            email,
            password
        })

        return data

    } catch (error) {
        console.log(error)
        throw error
    }

}