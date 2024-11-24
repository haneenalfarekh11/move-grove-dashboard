import React from 'react';
import { Link } from 'react-router-dom';
import yourImage from '../Assets/pngtree-delivery-taxi-service-with-smartphone-application-vector-image_1070287.jpg';

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-between items-center bg-cover bg-center' style={{ backgroundImage: `url(${yourImage})` }}>
        <div className='w-[100%] h-[100%]  flex justify-center items-center flex-col '>
            <div className='w-[70%] h-[90%] rounded-xl bg-[#94d9f0d3]  flex justify-center items-center flex-col'>
                <div className='w-[80%] h-[40%] text-left flex justify-start items-center flex-col'>
                
                    <p className='w-[100%] h-[20%] text-4xl text-center text-black mt-4'>Welcome</p>
                </div>
                <div className='w-[80%] h-[12%] relative'>
                    <label htmlFor='email' className='absolute -top-6 left-[1%] text-black'>Email</label>
                    <input type='email' id='email'defaultValue="Haneen" placeholder='cant be embty' className='w-[100%] h-[50%] p-2 rounded-md bg-[#e3bd8c] outline-none text-white onChange={(e) => setValue(e.target.value)} '/>
                </div>
                <div className='w-[80%] h-[20%] relative'>
                    <label htmlFor='password' className='absolute -top-6 left-[1%] text-black'>Password</label>
                    <input type='password' id='password' defaultValue="1111" placeholder='cant be empty' className='w-[100%] h-[30%] p-2 rounded-md bg-[#e3bd8c] outline-none text-white onChange={(e) => setValue(e.target.value)} '/>
                </div>
                <div className='w-[40%] h-[10%]'>
                    <div>
                        <Link to="/dashboard" className='bg-[#e3bd8c] p-2 text-white rounded-xl hover:bg-[#d0e6c8] mr-1.5'>
                            <button className=' text-black w-[100%] rounded-xl'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;

