import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaPlus } from 'react-icons/fa';  
import carImage from '../Assets/360_F_95526854_RkX08anJzuIlRx495qpbULSWM919Lloc.jpg';

const MenuPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* زر "رؤية حالة الركاب" خارج القائمة بالكامل */}
      <div className="absolute ">
        <Link to="/DriverStatus">
          <button className='px-4 py-2 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-700'>
            View DriverStatus
          </button>
        </Link>
      </div>
  
    <div
      className={`transition-all ease-in-out duration-300 ${isMenuOpen ? 'w-60' : 'w-16'} 
      h-full bg-yellow-500 flex flex-col justify-start items-center p-4 fixed top-0 left-0 z-10`}
    >
       
      
      
      <div
        className="text-white text-3xl cursor-pointer mb-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </div>

      {isMenuOpen && (
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="hover:text-green-500 cursor-pointer"><Link to="/city">City</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/car">Car</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/trips">Trips</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/trip-passenger">Trip Passenger</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/settings">Settings</Link></li>
        </ul>
      )}

      
      <div 
        className="text-4xl text-white cursor-pointer fixed bottom-8 right-8 z-20"
        style={{
            backgroundColor: '#0000',
            borderRadius: '50%', 
            padding: '10px', 
          }}
      >
        <FaPlus />
      </div>

      <div className="mt-auto">
        <img src={carImage} alt="Car" className="w-48 h-48 object-contain border-none" />
      </div>
    </div>
    </div>
    
  );
};

export default MenuPage; 
