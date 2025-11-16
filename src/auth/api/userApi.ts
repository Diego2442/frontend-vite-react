import axios from 'axios'

const userApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/users`
})

//Interceptores
userApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }
    return config
})

export { userApi }