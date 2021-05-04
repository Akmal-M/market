import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
    return (
        <div className='shadow lg:p-10 p-5'>
            <img src={product.images.url} alt=""/>
            <div>
                <h2 title={product.title} className='text-center font-semibold lg:text-2xl text-TextColor'>{product.title}</h2>
                <span className='text-center'>${product.price}</span>
                <p className='text-center'>{product.description}</p>
            </div>
            <div className='flex w-full'>
                <Link to='#' id={'btn_buy'} className='mx-5 px-5 py-1  bg-btnColor text-2xl text-white '>
                    Buy
                </Link>
                <Link id={'btn_view'} to={`/detail/${product._id}`} className='mx-5 py-1 px-5 bg-btnColor2 text-2xl text-white'>
                    View
                </Link>
            </div>
        </div>
    );
};

export default ProductItem;
