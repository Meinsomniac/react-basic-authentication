import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl:'https://dummyjson.com/',
    prepareHeaders:(headers,{getState}) => {
        
        return headers
    }
})

export const authApi = createApi({
    reducerPath:'api',
    baseQuery,
    tagTypes:['api'],
    endpoints:{}
})