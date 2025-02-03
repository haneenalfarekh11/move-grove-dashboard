import React from 'react';
import { Link } from 'react-router-dom';
const SettingsPage = () => {
  
  const tableData = [
    { id: 1, name: "Theme", description: "Dark Mode", value: "Enabled" },
    { id: 2, name: "Notifications", description: "Email Alerts", value: "Enabled" },
    { id: 3, name: "Location", description: "GPS", value: "Disabled" },
    { id: 4, name: "Language", description: "English", value: "Selected" },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Settings</h2>
      <table className="table-auto w-full bg-white border-collapse shadow-lg">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="p-2 border">Setting ID</th>
            <th className="p-2 border">Setting Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.description}</td>
              <td className="p-2 border">{row.value}</td>
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

export default SettingsPage;