import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`${isOpen ?'w-60' : 'w-16'} h-screen bg-[#aee62b] fixed flex  justify-center items-center flex-col z-50`} onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
            <div className={`w-[95%] h-[30%] flex justify-between items-center ${isOpen ? 'flex-col' : '' }`}>
                <p className={`${isOpen ? '' : 'hidden' } text-3xl text-black`}>Moove Grove</p>
            </div>
            <div className='w-[94%] h-[80%] flex justify-center items-center flex-col text-black text-lg'>
        <Link to="/dashboard" className=' w-[95%] h-[10%]'>
            <button className={`flex ${isOpen ? 'justify-between' : 'justify-center'} items-center w-[95%] h-[15%] text-lg hover:text-gray-300`}>
            <p className={`${isOpen ? '' : 'hidden'}`}>Dashboard</p>
          
            </button></Link>
            <Link to="/products" className=' w-[95%] h-[10%]'>
            <button className={`flex ${isOpen ? 'justify-between' : 'justify-center'} items-center w-[95%] h-[15%] text-lg hover:text-gray-300`}>
            <p className={`${isOpen ? '' : 'hidden'}`}>All Trips</p>
            
            </button></Link>
            
           </div>
           <div className='w-[94%] h-[20%] flex justify-center items-center flex-col'>
        <Link to="/"  className=' w-[100%] h-[25%]' >   
        <button className={`flex ${isOpen ? 'justify-between' : 'justify-center'} items-center w-[95%] h-[15%] text-lg text-black px-4 py-6 rounded-md hover:text-red-300 hover:border-red-300`}>
                <p className={`${isOpen ? '' : 'hidden'}`}>Log out</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar

