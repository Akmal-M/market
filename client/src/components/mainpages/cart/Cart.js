import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import {Link} from "react-router-dom";

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async (payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if (cart.length === 0)
        return  <div className=' capitalize flex justify-center items-center my-40 '>
            <div>
                <div className='lg:text-7xl text-3xl' ><h2 className='inline-block whitespace-nowrap'>Cart is Empty</h2> </div>
                <h2 className='lg:text-2xl text-xl lg:my-5 my-3 text-center'>Go To <Link to='/' className='text-red-300'>Shopping</Link></h2>
            </div>
        </div>

    return (
        <div className='mt-20 lg:mx-5 '>
            {
                cart.map(product => (
                    <div className="detail cart relative border-gray-200 scale-y-90  border flex " key={product._id}>

                        <img src={product.images.url} alt=""
                             className='flex justify-center items-center lg:h-40 h-20 lg:w-40 w-20 object-cover '/>

                        <div className="box-detail flex justify-between items-center lg:mx-20">
                            <div className=' '>
                                <h2 className='font-semibold lg:text-3xl text-sm capitalize'>{product.title}</h2>
                                <p className='lg:text-lg text-xs'>{product.description}</p>
                            </div>
                            {/*<p>{product.content}</p>*/}

                            <div className='lg:mx-10 mx-3'>
                                <button onClick={() => decrement(product._id)}
                                        className='lg:w-8 w-6 lg:h-8 h-6 border border-gray-300'> -
                                </button>
                                <span className='text-red-300 lg:px-5 px-2'>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}
                                        className='lg:w-8 w-6 lg:h-8 h-6 border border-gray-300'> +
                                </button>
                            </div>
                            <div>
                                <h3 className='text-red-300 lg:text-3xl  '>$ {product.price * product.quantity}</h3>

                            </div>
                            <div className="delete absolute top-0 right-1 text-red-300 font-bold cursor-pointer"
                                 onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total w-full h-16 flex items-center justify-between lg:text-3xl text-red-300 lg:mt-10 mt-5">
                <h3>Total: $ {total}</h3>
                <PaypalButton
                    total={total}
                    tranSuccess={tranSuccess}/>
            </div>
        </div>
    )
}

export default Cart