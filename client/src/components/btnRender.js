import React from 'react';
import {Link} from "react-router-dom";

const BtnRender = ({product}) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <Link to='#' id={'btn_buy'} className='lg:mx-5 lg:px-5 px-2 lg:py-1  bg-btnColor lg:text-2xl text-md text-white text-center'>
                    Buy
                </Link>
                <Link id={'btn_view'} to={`/detail/${product._id}`} className='lg:mx-5 lg:py-1 lg:px-5 px-2 bg-btnColor2 lg:text-2xl text-md text-white text-center'>
                    View
                </Link>
            </div>
        </div>
    );
};

export default BtnRender;