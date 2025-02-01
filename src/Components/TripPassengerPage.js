import React from 'react';

const TripPassengerPage = () => {
 
  const tableData = [
    { id: 1, name: "John Doe", tripId: 101, seat: "A1" },
    { id: 2, name: "Jane Smith", tripId: 102, seat: "A2" },
    { id: 3, name: "Samuel Green", tripId: 103, seat: "B1" },
    { id: 4, name: "Anna Brown", tripId: 104, seat: "B2" },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Trip Passengers</h2>
      <table className="table-auto w-full bg-white border-collapse shadow-lg">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="p-2 border">Passenger ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Trip ID</th>
            <th className="p-2 border">Seat</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.tripId}</td>
              <td className="p-2 border">{row.seat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripPassengerPage;