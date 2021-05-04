import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Header from "../header";

const Register = () => {
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: ''
    })

    const onChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const registerSubmit = async e => {
        e.preventDefault();
        try{
            await axios.post('user/register', {...user})
            localStorage.setItem('firstLogin', true)
            window.location.href = '/'
        }catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className='lg:mt-32 mt-20 flex justify-center items-center max-w-md lg:mx-auto mx-5 shadow lg:p-10 p-5 '>
            <form onSubmit={registerSubmit}>
                <div className='my-5'>
                    <input type="text" name='name' placeholder='Your Name' required value={user.name}
                           onChange={onChangeInput}
                           className='outline-none h-10 w-72 text-xl border p-2 '/>
                </div>
                <div className='my-5'>
                    <input type="email" name='email' placeholder='Email' required value={user.email}
                           onChange={onChangeInput}
                           className='outline-none h-10 w-72 text-xl border p-2 '/>
                </div>
                <div className='my-5 '>
                    <input type="password" name='password' placeholder='Password' required value={user.password}
                           onChange={onChangeInput}
                           className='outline-none h-10 w-72 text-xl border p-2 '/>
                </div>

                    <div className='grid grid-cols-2 gap-32'>
                        <button type='submit' className=' bg-btnColor2 text-white px-5 py-2'>
                            Register
                        </button>
                        <Link to='/login' className=' text-MainColor'>
                            Login
                        </Link>
                    </div>
            </form>
{/*<div className='hidden'>*/}
{/*    <Header userName={user.name} />*/}
{/*</div>*/}
        </div>
    );
};

export default Register;