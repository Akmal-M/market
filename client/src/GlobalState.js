import React, {createContext, useEffect, useState} from 'react'
import ProductsApi from "./api/productsAPI";
import axios from "axios";

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState('false');


    const refreshToken = async () => {
        const res = await axios.get('/user/refresh_token')

        setToken(res.data.accesstoken)
    }

    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
        refreshToken()
    },[])


    const state = {
        token: [token, setToken],
        productsAPI: ProductsApi()
    }


    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}