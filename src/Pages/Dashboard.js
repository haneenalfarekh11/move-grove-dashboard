import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import DashCard from '../Components/DashCard';
import { BsFillStarFill } from "react-icons/bs";

const Dashboard = () => {
    const [open, setOpen] = useState(false); // التحكم في Sidebar
    const [showModal, setShowModal] = useState(false); // فتح نموذج إضافة سيارة
    const [carName, setCarName] = useState(''); 
    const [carNumber, setCarNumber] = useState('');
    const [carColor, setCarColor] = useState('');
    const [selectedTrip, setSelectedTrip] = useState(null); // حالة تفاصيل الرحلة
    const [users, setUsers] = useState([ // بيانات المستخدمين المتفاعلين
        { id: 1, name: 'Haneen Alfarekh ', phone: '0997876643', userStatus: '??' },
        { id: 2, name: 'Salam Alshikh', phone: '0993764563',userStatus : '??' },
        { id: 3, name: 'Lana Lababidy', phone: '0938744213', userStatus: '??' },
        
    ]);

    // دالة لفتح تفاصيل الرحلة
    const handleTripClick = (trip) => {
        setSelectedTrip(trip); // تحديث حالة الرحلة المحددة
    };

    // دالة لعرض تفاصيل المستخدم
    const handleUserView = (user) => {
        console.log('View user:', user); // منطق عرض تفاصيل المستخدم
    };

    // دالة لتعديل المستخدم
    const handleUserEdit = (user) => {
        console.log('Edit user:', user); // منطق تعديل المستخدم
    };

    // دالة لحظر المستخدم
    const handleUserBlock = (user) => {
        console.log('Block user:', user); // منطق حظر المستخدم
    };

    return (
        <div className='w-full min-h-screen flex bg-yellow-100'>
            <div className={ `${open ? "w-60" : "w-8"} h-full relative duration-300`} 
                onMouseEnter={() => setOpen(true)} 
                onMouseLeave={() => setOpen(false)}>
                <Sidebar />
            </div>

            <div className='w-[100%] pl-6 flex justify-center items-center flex-col'>
                {/* Header Section */}
                <div className='w-[90%] h-36 text-left mt-5'>
                    <h1 className='text-3xl font-semibold'>Dashboard</h1>
                    <p className='text-xl font-thin'>Welcome to your dashboard</p>
                </div>

                {/* Add Car Button */}
                <button 
                    onClick={() => setShowModal(true)} // فتح النموذج لإضافة سيارة
                    className='px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-700'>
                    Add Car
                </button>

                {/* Search Bar */}
                <div className='w-[100%] flex justify-end items-center fixed top-0 right-0 p-4'>
                    <input type='text' placeholder='Search' className='w-80 outline-none p-2 text-left rounded-lg border-2 border-gray-600 bg-yellow-100 text-gray-600 placeholder:text-gray-600' />
                </div>

                {/* Cards Section */}
                <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
                  <DashCard title={'From Damascus To Homs'} onClick={() => handleTripClick({ title: 'From Damascus To Homs', time: '9:00 AM', price: '200000' })} />
                  <DashCard title={'From Damascus To Hama'} onClick={() => handleTripClick({ title: 'From Damascus To Hama', time: '10:00 AM', price: '150000' })} />
                  <DashCard title={'From Damascus To Tartous'} onClick={() => handleTripClick({ title: 'From Damascus To Tartous', time: '12:00 PM', price: '180000' })} />
                  <DashCard title={'From Damascus To Aleppo'} onClick={() => handleTripClick({ title: 'From Damascus To Aleppo', time: '1:00 PM', price: '100000' })} />
                  <DashCard title={'From Aleppo To Homs'} onClick={() => handleTripClick({ title: 'From Aleppo To Homs', time: '2:00 PM', price: '350000' })} />
                  <DashCard title={'From Tartous To Damascus'} onClick={() => handleTripClick({ title: 'From Tartous To Damascus', time: '4:00 PM', price: '250000' })} />
                  <DashCard title={'From Hama To Homs'} onClick={() => handleTripClick({ title: 'From Hama To Homs', time: '6:30 PM', price: '450000' })} />
                  <DashCard title={'From Homs To Lattakia'} onClick={() => handleTripClick({ title: 'From Homs To Lattakia', time: '7:00 PM', price: '200000' })} />
                  <DashCard title={'From Damascus To Alhasaka'} onClick={() => handleTripClick({ title: 'From Damascus To Alhasaka', time: '9:45 PM', price: '350000' })} />
                  <DashCard title={'From Homs To Damascus'} onClick={() => handleTripClick({ title: 'From Homs To Damascus', time: '10:30 AM', price: '200000' })} />
                  <DashCard title={'From Aleppo To Lattakia'} onClick={() => handleTripClick({ title: 'From Aleppo To Lattakia', time: '1:00 PM', price: '100000' })} />
                </div>

                {/* Users Table */}
                <div className='w-[90%] mt-8'>
                    <h2 className='text-xl font-semibold text-yellow-500'>Active Users</h2>
                    <table className='w-full mt-4 table-auto border-collapse'>
                        <thead>
                            <tr className='bg-yellow-200'>
                                <th className='px-4 py-2'>Name</th>
                                <th className='px-4 py-2'>Phone</th>
                                <th className='px-4 py-2'>userStatus</th>
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className='border-b'>
                                    <td className='px-4 py-2'>{user.name}</td>
                                    <td className='px-4 py-2'>{user.phone}</td>
                                    <td className='px-4 py-2'>{user.userStatus}</td>
                                    <td className='w-[10%] text-center flex justify-center items-center gap-2'>  
                                    <p className='font-semibold'><span className='font-normal'>3</span>/5</p>
                                      <BsFillStarFill color='#8B8000' size={19}/>
                                     </td>
                                    <td className='px-4 py-2 flex gap-2'>
                                        <button onClick={() => handleUserView(user)} className='px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700'>
                                            View
                                        </button>
                                        <button onClick={() => handleUserEdit(user)} className='px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700'>
                                            Edit
                                        </button>
                                        <button onClick={() => handleUserBlock(user)} className='px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700'>
                                            Block
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Adding Car */}
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg w-80'>
                        <h2 className='text-xl font-semibold mb-4 text-center'>Add Car</h2>
                        <input type='text' value={carName} onChange={(e) => setCarName(e.target.value)} placeholder='Car Name' className='w-full p-2 border border-gray-300 rounded-md mb-4'/>
                        <input type='text' value={carNumber} onChange={(e) => setCarNumber(e.target.value)} placeholder='Car Number' className='w-full p-2 border border-gray-300 rounded-md mb-4'/>
                        <input type='text' value={carColor} onChange={(e) => setCarColor(e.target.value)} placeholder='Car Color' className='w-full p-2 border border-gray-300 rounded-md mb-4'/>
                        <div className='flex justify-between'>
                            <button onClick={() => { 
                                if (!carName) { 
                                    alert('please enter car name');
                                }
                                  else if (!carNumber) { 
                                     alert('please enter car number');
                                  }
                                  else if(!carColor){
                                     alert('please enter car color');
                                  } else { 
                                    console.log('Car added:',{carName,carNumber,carColor});
                                    setShowModal(false);
                                    setCarName('');
                                    setCarNumber('');
                                    setCarColor('');
                                  }
                                }}
                                  
                                className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                                Save
                            </button>
                            <button onClick={() => setShowModal(false)} className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
           {/* Modal to Display Trip Details */}
//             {selectedTrip && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg w-80'>
                        <h2 className='text-xl font-semibold mb-4 text-center'>{selectedTrip.title}</h2>
                        <p><strong>Time:</strong> {selectedTrip.time}</p>
                        <p><strong>Price:</strong> {selectedTrip.price}</p>
                        <div className='flex justify-between mt-4'>
                        <button 
                        onClick={() => setSelectedTrip(null)} 
                        className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 mr-9'>
                         Close
                       </button>
                       <button 
                         onClick={() => setSelectedTrip(null)} 
                        className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                        Done
                       </button>
                    </div>
                </div>
        </div>
    )} 
        </div>
    );
}

export default Dashboard;