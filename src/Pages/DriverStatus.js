import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const driversData = [
  { name: 'Haneen', id: '123456789', carPlate: '123ABC', rating: 4.2, status: 'Active' },
  { name: 'Lana', id: '987654321', carPlate: '456DEF', rating: 3.9, status: 'No Avtive ' },
  { name: 'Salam', id: '456789123', carPlate: '789XYZ', rating: 4.8, status: 'Active' },
  { name: ' Jad', id: '321654987', carPlate: '321LMN', rating: 4.5, status: ' No Active' },
];

const DriverDashboard = () => {
  // إدارة بيانات السائقين وحالة البحث
  const [drivers, setDrivers] = useState(driversData);
  const [searchTerm, setSearchTerm] = useState('');

  // تصفية السائقين بناءً على الاسم
  useEffect(() => {
    const filteredDrivers = driversData.filter(driver =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDrivers(filteredDrivers);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">  DRIVERS</h1>

      {/* مربع البحث */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder=" Search User"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-1/3 border border-yellow-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* جدول السائقين */}
      <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden bg-yellow-50">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="py-3 px-4 text-left">Driver-Name</th>
            <th className="py-3 px-4 text-left">Driver-id </th>
            <th className="py-3 px-4  text-left"> Car plate</th>
            <th className="py-3 px-4 text-left">Rating</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
              <td className="py-3 px-4 border-t border-yellow-300">{driver.name}</td>
              <td className="py-3 px-4 border-t border-yellow-300">{driver.id}</td>
              <td className="py-3 px-4 border-t border-yellow-300">{driver.carPlate}</td>
              <td className="py-3 px-4 border-t border-yellow-300">{driver.rating}</td>
              <td className="py-3 px-4 border-t border-yellow-300">{driver.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-left mt-4">
            <Link to="/Dashboard">
               <button className='px-4 py-2 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-700'>
               Back To Dashboard
                </button>
            </Link>
            </div>
    </div>
  );
};

export default DriverDashboard;