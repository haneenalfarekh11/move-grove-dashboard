import React, { useState } from 'react';

const CarModal = ({ showCarModal, setShowCarModal }) => {
    const [carName, setCarName] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carColor, setCarColor] = useState('');

    const handleSave = () => {
        if (!carName) return alert('Please enter car name');
        if (!carNumber) return alert('Please enter car number');
        if (!carColor) return alert('Please enter car color');

        console.log('Car added:', { carName, carNumber, carColor });
        
        // إغلاق النافذة بعد الحفظ
        setShowCarModal(false);

        // إعادة تعيين القيم
        setCarName('');
        setCarNumber('');
        setCarColor('');
    };

    return (
        showCarModal && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='bg-white p-6 rounded-lg w-80'>
                    <h2 className='text-xl font-semibold mb-4 text-center'>Add Car</h2>
                    <input
                        type='text'
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                        placeholder='Car Name'
                        className='w-full p-2 border border-gray-300 rounded-md mb-4'
                    />
                    <input
                        type='text'
                        value={carNumber}
                        onChange={(e) => setCarNumber(e.target.value)}
                        placeholder='Car Number'
                        className='w-full p-2 border border-gray-300 rounded-md mb-4'
                    />
                    <input
                        type='text'
                        value={carColor}
                        onChange={(e) => setCarColor(e.target.value)}
                        placeholder='Car Color'
                        className='w-full p-2 border border-gray-300 rounded-md mb-4'
                    />
                    <div className='flex justify-between'>
                        <button onClick={handleSave} className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                            Save
                        </button>
                        <button onClick={() => setShowCarModal(false)} className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default CarModal;