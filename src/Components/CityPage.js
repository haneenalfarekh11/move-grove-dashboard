import React from 'react';
import { Link } from 'react-router-dom';

const CityPage = () => {
  
  const tableData = [
    { id: 1, name: "Damascuse", population: 841600, area: 789 },
    { id: 2, name: "Homs", population: 89800, area: 1572 },
    { id: 3, name: "Lattakia", population: 139986, area: 2191 },
    { id: 4, name: "Hama", population: 21400, area: 105 },
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

export default CityPage;