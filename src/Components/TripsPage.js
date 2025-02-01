import React from 'react';

const TripsPage = () => {
  
  const tableData = [
    { id: 1, destination: "New York", date: "2025-02-15", price: "$500" },
    { id: 2, destination: "Los Angeles", date: "2025-03-10", price: "$450" },
    { id: 3, destination: "Chicago", date: "2025-04-22", price: "$400" },
    { id: 4, destination: "Miami", date: "2025-05-05", price: "$550" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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
    </div>
  );
};

export default TripsPage;