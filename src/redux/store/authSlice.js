import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../api/authApi"
import { setCookie } from "../../utils/cookie";

export const authSlice = createSlice({
    name:'root',
    initialState:{
        isAuthenticated:false,
        profile:{}
    },
    reducers:{
        initialize:(state,{payload}) => {
            state.isAuthenticated = payload
            state.profile = {}
        }
    },
    extraReducers:(builder) => {
        builder.addMatcher(authApi.endpoints.signIn.matchFulfilled,(state,{payload}) => {
            if(payload?.token){
                setCookie('token',payload.token,1)
                state.isAuthenticated = true;
                delete state.profile.token;
                state.profile = payload;
            }
        }).addMatcher(authApi.endpoints.reauthenticate.matchFulfilled ,(state,{payload}) => {
            if(payload?.token){
                setCookie('token',payload.token,1)
                state.isAuthenticated = true;
                delete state.profile.token;
                state.profile = payload;
                state.loader = false
            }
        }).addMatcher(authApi.endpoints.reauthenticate.matchPending,(state) => {
            state.loader = true
        })
    }
})

export const {initialize} = authSlice.actions