import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {GlobalState} from "../GlobalState";
import {Link} from "react-router-dom";
import ProductItem from "./productItem";

const ProductDetail = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        if (params) {
            products.forEach(product => {
                if (product._id === params.id) setProductDetails(product)
            })
        }
    }, [params, products])
    if (productDetails.length === 0) return null;

    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='flex justify-center items-center '>
                    <img src={productDetails.images.url} alt="" className='lg:max-h-96'/>
                </div>
                <div className='lg:p-10 p-5'>
                    <div>
                        <div className='flex justify-between py-2'>
                            <div className='lg:text-3xl text-2xl font-semibold text-MainColor'>
                                {productDetails.title}
                            </div>
                            <div className='font-semibold'>
                                {productDetails.product_id}
                            </div>
                        </div>
                        <div className='lg:text-2xl text-xl py-2'>
                            ${productDetails.price}
                        </div>
                        <div className='lg:text-2xl text-xl py-2'>
                            {productDetails.content}
                        </div>
                        <div className=' py-2'>
                            {productDetails.sold}
                        </div>
                    </div>
                    <Link to='/cart' className=' px-5 py-1  bg-btnColor2 text-2xl text-white '>
                        Buy Now
                    </Link>
                </div>
            </div>
            <div>
                <h2 className='text-center text-2xl lg:py-10 py-5'>Related Products</h2>
                <div className='grid lg:grid-cols-4 grid-cols-3 lg:gap-10 gap-5 lg:m-10 m-5'>
                    {
                        products.map(product => {
                            return product.category === productDetails.category ?
                                <div className=''>
                                    <ProductItem key={product._id} product={product}/>
                                </div> : null
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;