import React, {useContext} from 'react';
import {GlobalState} from "../GlobalState";
import ProductItem from "./productItem";

const Products = () => {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5 lg:m-10 m-5'>
            {
                products.map(product => {
                    return(
                        <div className=''>
                            <ProductItem key={product._id} product={product}/>
                        </div>
                        )
                })
            }
        </div>
    );
};

export default Products;