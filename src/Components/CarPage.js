import React from 'react';

const CarPage = () => {
  
  const tableData = [
    { id: 1, model: "Toyota Corolla", year: 2020, price: "$20,000" },
    { id: 2, model: "Honda Civic", year: 2019, price: "$18,500" },
    { id: 3, model: "Ford Mustang", year: 2021, price: "$30,000" },
    { id: 4, model: "Chevrolet Camaro", year: 2022, price: "$35,000" },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Car Table</h2>
      <table className="table-auto w-full bg-white border-collapse shadow-lg">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="p-2 border">Car ID</th>
            <th className="p-2 border">Car Model</th>
            <th className="p-2 border">Year</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.model}</td>
              <td className="p-2 border">{row.year}</td>
              <td className="p-2 border">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarPage;