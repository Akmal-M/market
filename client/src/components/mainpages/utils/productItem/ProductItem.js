import React from 'react';
import BtnRender from "../../../btnRender";

const ProductItem = ({product, isAdmin}) => {
    return (
        <div className='shadow-xl relative lg:my-10 my-4 h-auto h-48 max-w-5xl overflow-hidden'>
            {
                isAdmin &&
                <input type='checkbox' checked={product.checked} className='absolute w-8 h-8 top-2 left-2'/>
            }
            <img src={product.images.url} alt="" className=' w-full block object-cover lg:h-72 h-32' />
           <div className='lg:mt-5 mt-3 lg:mb-10 mb-5'>
               <div>
                   <div className='flex justify-between lg:px-7 px-2'>
                       <h2 title={product.title} className='text-center font-semibold lg:my-5 my-2 lg:text-xl text-md text-TextColor w-full whitespace-nowrap capitalize'>{product.title} </h2>
                       <span className='text-center font-semibold lg:my-5 my-2 lg:text-xl text-md text-TextColor w-full whitespace-nowrap capitalize'>${product.price}</span>
                   </div>
                   <p className='text-center lg:pb-5 pb-3 lg:text-lg text-sm'>{product.description}</p>
               </div>
               <BtnRender product={product}/>
           </div>
        </div>
    );
};

export default ProductItem;
