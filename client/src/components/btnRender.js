import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {GlobalState} from "../GlobalState";

const BtnRender = ({product}) => {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    return (
        <div>
            {
                isAdmin ?    <div className='grid grid-cols-2 lg:gap-5 gap-2'>
                    <Link to='#' id={'btn_buy'} className='lg:mx-5 lg:px-3  lg:py-1  bg-btnColor lg:text-xl text-md text-white text-center w-full'>
                        Delete
                    </Link>
                    <Link id={'btn_view'} to={`/edit_product/${product._id}`} className='lg:mx-5 lg:py-1 lg:px-5 px-2 bg-btnColor2 lg:text-xl text-md text-white text-center w-full'>
                        Edit
                    </Link>
                </div> :
                    <div className='flex justify-center w-full items-center'>
                        <div className='grid grid-cols-2 gap-2'>
                            <Link to='#' id={'btn_buy'} onClick={() => addCart(product)}
                                  className='bg-btnColor lg:text-xl lg:px-5 px-5 lg:py-1 text-md text-white text-center w-full'>
                                Buy
                            </Link>
                            <Link id={'btn_view'} to={`/detail/${product._id}`} className='  lg:py-1 lg:px-10 px-2 bg-btnColor2 lg:text-xl text-md text-white text-center w-full'>
                                View
                            </Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default BtnRender;