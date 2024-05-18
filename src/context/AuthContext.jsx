import { createContext, useCallback, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useReauthenticateMutation, useSignInMutation } from "../redux/api/authApi";
import { getCookie } from "../utils/cookie";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){

    //Api calls
    const [signIn] = useSignInMutation()
    const [refresh] = useReauthenticateMutation()

    //Global State
    const isAuthenticated = useSelector((state) => state?.root?.isAuthenticated)
    const token = getCookie('token')

    const login = useCallback(async (payload) => {
        return await signIn(JSON.stringify(payload))
    },[signIn])

    useEffect(() => {
        if(!isAuthenticated && token){
            refresh()
        }
    },[isAuthenticated,token,refresh])

    return <AuthContext.Provider value={{
        isAuthenticated,token,login
    }}>
        {children}
    </AuthContext.Provider>
}