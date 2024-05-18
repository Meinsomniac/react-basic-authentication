import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../utils/cookie";

const baseQuery = fetchBaseQuery({
    baseUrl:'https://dummyjson.com/',
    prepareHeaders:(headers,{getState},) => {
        const isAuthenticated = getState()?.root?.isAuthenticated
        const token = getCookie('token')
        if(isAuthenticated || token) headers.set('Authorization', `Bearer ${token}`)
        else headers.set('Content-Type','application/json')
        return headers
    }
})

export const authApi = createApi({
    reducerPath:'auth',
    baseQuery,
    endpoints:(builder) => ({
        signIn:builder.mutation({
            query:(body) => ({
                url:'auth/login',
                method:'POST',
                body,
            }),
            transformResponse:(res) => {
                return res
            }
        }),
        reauthenticate:builder.mutation({
            query:(body) => ({
                url:'auth/refresh',
                method:'POST',
                body,
            }),
            transformResponse:(res) => {
                return res
            }
        })
    })
})

export const {useSignInMutation,useReauthenticateMutation} = authApi