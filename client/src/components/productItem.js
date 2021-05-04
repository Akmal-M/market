import React from 'react';
import BtnRender from "./btnRender";

const ProductItem = ({product, isAdmin}) => {
    return (
        <div className='shadow lg:p-10 p-5'>
            {
                isAdmin && <input type='checkbox' checked={product.checked}/>
            }
            <img src={product.images.url} alt=""/>
            <div>
                <h2 title={product.title} className='text-center font-semibold lg:text-2xl text-TextColor'>{product.title}</h2>
                <span className='text-center'>${product.price}</span>
                <p className='text-center'>{product.description}</p>
            </div>
            <BtnRender product={product}/>
        </div>
    );
};

export default ProductItem;
