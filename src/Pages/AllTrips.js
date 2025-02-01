import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar'

const AllTrips = () => {
    const [open, setOpen] = useState(false);
    const [trips, setTrips] = useState([
    { title: 'From Damascus To Homs', status: 'Available', time: '9:00 AM', price: '200000', date: '2024/2/13' },
    { title: 'From Damascus To Hama', status: 'Unavailable', time: '10:00 AM', price: '150000', date: '2024/2/20' },
    { title: 'From Damascus To Tartous', status: 'Available', time: '12:00 PM', price: '180000', date: '2024/2/25' },
    { title: 'From Damascus To Aleppo', status: 'Unavailable', time: '1:00 PM', price: '100000', date: '2024/2/11' },
    { title: 'From Aleppo To Homs', status: 'Available', time: '2:00 PM', price: '350000', date: '2024/2/15' },

  ]);

  return (
    <div className="w-full min-h-screen bg-yellow-100 p-6">
        <div  className={` ${window.open ? "w-60   " : "w-8 " } h-full relative duration-300 `}onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
    <Sidebar/>
    </div>
      <h1 className="text-3xl font-semibold">All Trips</h1>
      <table className="w-full mt-6 table-auto border-collapse">
        <thead>
          <tr className="bg-yellow-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{trip.title}</td>
              <td className={`px-4 py-2 ${trip.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>{trip.status}</td>
              <td className="px-4 py-2">{trip.time}</td>
              <td className="px-4 py-2">{trip.price}</td>
              <td className="px-4 py-2">{trip.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrips; 
