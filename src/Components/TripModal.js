import React, { useState } from 'react';

const TripModal = ({ showTripModal, setShowTripModal, addTrip }) => {
    const [tripTitle, setTripTitle] = useState('');
    const [tripTime, setTripTime] = useState('');
    const [tripPrice, setTripPrice] = useState('');
    const [tripDate, setTripDate] = useState('');

    const handleSave = () => {
        if (!tripTitle || !tripTime || !tripDate || !tripPrice) {
            alert('Please fill in all fields');
            return;
        }
        addTrip({ title: tripTitle, time: tripTime, price: tripPrice, date: tripDate });
        setShowTripModal(false);
        setTripTitle('');
        setTripTime('');
        setTripPrice('');
        setTripDate('');
    };

    if (!showTripModal) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg w-80'>
                <h2 className='text-xl font-semibold mb-4 text-center'>Add Trip</h2>
                <input type='text' value={tripTitle} onChange={(e) => setTripTitle(e.target.value)} placeholder='Trip Title' className='w-full p-2 border border-gray-300 rounded-md mb-4' />
                <input type='text' value={tripTime} onChange={(e) => setTripTime(e.target.value)} placeholder='Trip Time' className='w-full p-2 border border-gray-300 rounded-md mb-4' />
                <input type='text' value={tripPrice} onChange={(e) => setTripPrice(e.target.value)} placeholder='Trip Price' className='w-full p-2 border border-gray-300 rounded-md mb-4' />
                <input type='text' value={tripDate} onChange={(e) => setTripDate(e.target.value)} placeholder='Trip Date' className='w-full p-2 border border-gray-300 rounded-md mb-4' />
                <div className='flex justify-between'>
                    <button onClick={handleSave} className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>Save</button>
                    <button onClick={() => setShowTripModal(false)} className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TripModal;
