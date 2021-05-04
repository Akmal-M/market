import React from 'react';
import {AiOutlineLoading} from "react-icons/ai";

const Loading = () => {
    return (
        <div className='flex absolute inset-0 justify-center items-center text-MainColor lg:text-9xl text-8xl font-bold animate-spin'>
            <AiOutlineLoading/>
        </div>
    );
};

export default Loading;