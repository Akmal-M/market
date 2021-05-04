import React, {useContext} from 'react';
import {GlobalState} from "../GlobalState";
import {HiOutlineMenu} from "react-icons/hi";
import {Link} from "react-router-dom";
import {GiShoppingCart} from "react-icons/gi";

const Header = () => {
    const value = useContext(GlobalState)
    return (
        <header className='flex justify-between items-center shadow py-1 text-semibold text-TextColor'>
                <div className='text-4xl'><HiOutlineMenu/></div>
                <div>
                    <h1 className='lg:text-3xl font-semibold'>
                        <Link to='/'>E-commerce</Link>
                    </h1>
                </div>
           <div className='flex justify-between'>
               <div className='flex justify-between items-center lg:px-5 px-2'>
                   <Link to='/products' className='lg:px-5 px-2'>Products</Link>
                   <Link to='/login' className='lg:px-5 px-2'>Login</Link>
               </div>

               <div className='lg:px-5 px-2'>
                   <span className='lg:px-2 px-1 lg:text-sm text-xs rounded-full bg-red-600 text-white absolute top-0 lg:right-8 right-3 z-20'>0</span>
                   <Link to='/cart' className='lg:text-5xl text-3xl relative z-10 text-TextColor'>
                       <GiShoppingCart/>
                   </Link>
               </div>
           </div>
        </header>
    );
};

export default Header;