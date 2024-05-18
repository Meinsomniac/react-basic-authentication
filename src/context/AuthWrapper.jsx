import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export const AuthWrapper = ({children}) => {
    const navigate = useNavigate()
    const data = useAuth()
    useEffect(() => {
        if((data?.isAuthenticated && !data?.token) || !data?.isAuthenticated) navigate('/sign-in')
        else if(data?.isAuthenticated) navigate('/home')
    },[data?.isAuthenticated,data?.token,navigate])

    return children
}