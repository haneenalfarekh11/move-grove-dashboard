import React from 'react';

const CityPage = () => {
  
  const tableData = [
    { id: 1, name: "New York", population: 8419600, area: 789, country: "USA" },
    { id: 2, name: "London", population: 8982000, area: 1572, country: "UK" },
    { id: 3, name: "Tokyo", population: 13929286, area: 2191, country: "Japan" },
    { id: 4, name: "Paris", population: 2148000, area: 105, country: "France" },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">City Table</h2>
      <table className="table-auto w-full bg-white border-collapse shadow-lg">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Population</th>
            <th className="p-2 border">Area (km²)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.population}</td>
              <td className="p-2 border">{row.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityPage;