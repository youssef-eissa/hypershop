import { useState } from "react"

interface UserToken {
token: string;
}
export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token') as string
        const userToken = JSON.parse(tokenString) as UserToken
        return userToken?.token

    }
    
    const [token, setToken] = useState<string>(getToken())
    const saveToken = (usertoken: UserToken) => {
        localStorage.setItem('token', JSON.stringify(usertoken))
        setToken(usertoken?.token)
    }
    
    return {
        setToken: saveToken,
        token
    }
}
