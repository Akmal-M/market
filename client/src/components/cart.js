import React, {useContext} from 'react';
import {GlobalState} from "../GlobalState";
import {Link} from "react-router-dom";

const Cart = () => {
    const state = useContext(GlobalState)
    const cart = state.userAPI.cart

    if(cart.length === 0)
        return <h2 className='text-center text-4xl'>Cart is empty</h2>
    return (
        <div>
            {
                cart.map(product => (
                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='flex justify-center items-center '>
                            <img src={product.images.url} alt="" className='lg:max-h-96'/>
                        </div>
                        <div className='lg:p-10 p-5'>
                            <div>
                                <div className='flex justify-between py-2'>
                                    <div className='lg:text-3xl text-2xl font-semibold text-MainColor'>
                                        {product.title}
                                    </div>
                                    <div className='font-semibold'>
                                        {product.product_id}
                                    </div>
                                </div>
                                <h3 className='lg:text-2xl text-xl py-2'>
                                    ${product.price * product.quantity}
                                </h3>
                                <div className='lg:text-2xl text-xl py-2'>
                                    {product.content}
                                </div>
                                <div className=' py-2'>
                                    <button>-</button>
                                    <span>{product.quantity}</span>
                                    <button>+</button>
                                </div>
                                <div className=''>x</div>
                            </div>

                        </div>
                    </div>
                ))
            }
            <div>
                <h3>Total: $ 0</h3>
                <Link to='/payment'>Payment</Link>
            </div>
        </div>
    );
};

export default Cart;