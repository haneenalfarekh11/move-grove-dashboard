import React from 'react';
import { Link } from 'react-router-dom';
const TripsPage = () => {
  
  const tableData = [
    { id: 1, destination: "Lattakia", date: "2025-02-15", price: "$500" },
    { id: 2, destination: "Homs", date: "2025-03-10", price: "$450" },
    { id: 3, destination: "Damascuse", date: "2025-04-22", price: "$400" },
    { id: 4, destination: "Tartous", date: "2025-05-05", price: "$550" },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Trips Table</h2>
      <table className="table-auto w-full bg-white border-collapse shadow-lg">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="p-2 border">Trip ID</th>
            <th className="p-2 border">Destination</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.destination}</td>
              <td className="p-2 border">{row.date}</td>
              <td className="p-2 border">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-left mt-4">
      <Link to="/Menu">
          <button className='px-4 py-2 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-700'>
          Back To Menu
           </button>
          </Link>
          </div>
    </div>
  );
};

export default TripsPage;