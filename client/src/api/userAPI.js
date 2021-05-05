import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserAPI = (token) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState(false)

    useEffect(() => {
        if(token) {
            const  getUser = async () => {
                try{
                   const res = await axios.get('/user/info', {
                       headers: {Authorization:token}
                   })

                    setIsLogged(true)
                    res.data.role === 1 ?setIsAdmin(true) : setIsAdmin(false)
                }catch (err) {
                    alert(err.response.data.msg)
                }
            }
        }
    },[token])

    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if(check) {
            setCart({...cart, ...product, quantity : 1})
        } else {
            alert("this product has been added to cart")
        }
    }

    return {
        isLogged:[isLogged,setIsLogged],
        isAdmin:[isAdmin,setIsAdmin],
        cart: [cart, setCart],
        addCart:addCart
    }
};

export default UserAPI;