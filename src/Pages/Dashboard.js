import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import DashCard from '../Components/DashCard';
import CarModal from '../Components/CarModal';  
import TripModal from '../Components/TripModal';  
import { BsFillStarFill } from "react-icons/bs";


const Dashboard = () => {
    const [open, setOpen] = useState(false); // التحكم في Sidebar
    const [showCarModal, setShowCarModal] = useState(false); // فتح نموذج إضافة سيارة
    const [showTripModal, setShowTripModal] = useState(false);
    const [tripTitle, setTripTitle] = useState('');
    const [tripTime, setTripTime] = useState('');
    const [tripPrice, setTripPrice] = useState('');
    const [tripDate, setTripDate] = useState('');
    const [selectedTrip, setSelectedTrip] = useState(null);   //حالة تفاصيل الرحلة
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([ // بيانات المستخدمين المتفاعلين
        { id: 1, name: 'Haneen Alfarekh ', phone: '0997876643', userStatus: '??',address: 'Damascus', carNumber: '12345', registrationDate: '2022-1-01' },
        { id: 2, name: 'Salam Alshikh', phone: '0993764563',userStatus : '??',address: 'Homs', carNumber: '12989', registrationDate: '2022-2-15' },
        { id: 3, name: 'Lana Lababidy', phone: '0938744213', userStatus: '??',address: 'Aleppo', carNumber: '87652', registrationDate: '2022-8-20' },
        
    ]);
    const [trips, setTrips] = useState([ // بيانات الرحلات
        { title: 'From Damascus To Homs', time: '9:00 AM', price: '200000', date: '2024/2/13' },
        { title: 'From Damascus To Hama', time: '10:00 AM', price: '150000', date: '2024/2/20' },
        { title: 'From Damascus To Tartous', time: '12:00 PM', price: '180000', date: '2024/2/25' },
    ]); 


    // دالة لفتح تفاصيل الرحلة
    const handleTripClick = (trip) => {
        setSelectedTrip(trip); //تحديث حالة الرحلة المحددة
        
        
    };
    // دالة لعرض تفاصيل المستخدم
    const handleUserView = (user) => {
        // console.log('View user:', user); // منطق عرض تفاصيل المستخدم
        setSelectedUser(user); // تحديث حالة المستخدم المحدد لعرض تفاصيله
        setShowCarModal(false); // فتح نافذة التفاصيل
    };

    // دالة لتعديل المستخدم
    const handleUserEdit = (user) => {
        console.log('Edit user:', user); // منطق تعديل المستخدم
    };

    // دالة لحظر المستخدم
    const handleUserBlock = (user) => {
        console.log('Block user:', user); // منطق حظر المستخدم
    };
    // دالة لإضافة رحلة جديدة
    const handleAddTrip = () => {
        const newTrip = {
            title: tripTitle,
            time: tripTime,
            price: tripPrice,
            date: tripDate,
        };
 
        setTrips([...trips, newTrip]); // إضافة الرحلة إلى قائمة الرحلات
       
        
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
                <div className='w-[90%] h-36 text-left mt-5 float-in'>
                    <h1 className='text-3xl font-semibold'>Dashboard</h1>
                    <p className='text-xl font-semibold'>Welcome to your dashboard</p>
                    
                </div>
                

                {/* Add Car Button */} 
                <div className='text-left mt-4'>
                <button 
                    onClick={() => setShowCarModal(true)} // فتح النموذج لإضافة سيارة
                    className='px-4 py-2 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-700'>
                    Add Car
                </button>
                <CarModal showCarModal={showCarModal} setShowCarModal={setShowCarModal} />
                </div> 
               
                {/* add trip button*/}
                <div className='text-center mt-4'>
                <button
                    onClick={() => setShowTripModal(true)}
                    className='px-4 py-2 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-700 ml-auto '>
                    Add Trip
                </button>
                <TripModal showTripModal={showTripModal} setShowTripModal={setShowTripModal} addTrip={handleAddTrip} />
                </div>

                {/* Cards Section */}
                <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
                  <DashCard title={'From Damascus To Homs'} onClick={() => handleTripClick({ title: 'From Damascus To Homs', time: '9:00 AM', price: '200000',date: '2024/2/13' })} />
                  <DashCard title={'From Damascus To Hama'} onClick={() => handleTripClick({ title: 'From Damascus To Hama', time: '10:00 AM', price: '150000',date: '2024/2/20' })} />
                  <DashCard title={'From Damascus To Tartous'} onClick={() => handleTripClick({ title: 'From Damascus To Tartous', time: '12:00 PM', price: '180000',date: '2024/2/25' })} />
                  <DashCard title={'From Damascus To Aleppo'} onClick={() => handleTripClick({ title: 'From Damascus To Aleppo', time: '1:00 PM', price: '100000',date: '2024/2/11' })} />
                  <DashCard title={'From Aleppo To Homs'} onClick={() => handleTripClick({ title: 'From Aleppo To Homs', time: '2:00 PM', price: '350000',date: '2024/2/15' })} />
                  <DashCard title={'From Tartous To Damascus'} onClick={() => handleTripClick({ title: 'From Tartous To Damascus', time: '4:00 PM', price: '250000',date: '2024/3/14' })} />
                  <DashCard title={'From Hama To Homs'} onClick={() => handleTripClick({ title: 'From Hama To Homs', time: '6:30 PM', price: '450000',date: '2024/3/20' })} />
                  <DashCard title={'From Homs To Lattakia'} onClick={() => handleTripClick({ title: 'From Homs To Lattakia', time: '7:00 PM', price: '200000',date: '2024/3/25' })} />
                  <DashCard title={'From Damascus To Alhasaka'} onClick={() => handleTripClick({ title: 'From Damascus To Alhasaka', time: '9:45 PM', price: '350000',date: '2024/3/29' })} />
                  <DashCard title={'From Homs To Damascus'} onClick={() => handleTripClick({ title: 'From Homs To Damascus', time: '10:30 AM', price: '200000',date: '2024/4/18' })} />
                  <DashCard title={'From Aleppo To Lattakia'} onClick={() => handleTripClick({ title: 'From Aleppo To Lattakia', time: '1:00 PM', price: '100000',date: '2024/4/12' })} />
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
        
            {/* Modal for User Details */}
            {selectedUser && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg w-80'>
                        <h2 className='text-xl font-semibold mb-4 text-center'>{selectedUser.name}</h2>
                        <p><strong>Address:</strong> {selectedUser.address}</p>
                        <p><strong>Phone:</strong> {selectedUser.phone}</p>
                        {selectedUser.userStatus === 'Driver' && (
                            <>
                                <p><strong>Car Number:</strong> {selectedUser.carNumber}</p>
                            </>
                        )}
                        <p><strong>Registration Date:</strong> {selectedUser.registrationDate}</p>
                        <div className='flex justify-between mt-4'>
                            <button onClick={() => setSelectedUser(null)} className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

           {/* Modal to Display Trip Details */}
           {selectedTrip && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg w-80'>
                        <h2 className='text-xl font-semibold mb-4 text-center'>{selectedTrip.title}</h2>
                        <p><strong>Time:</strong> {selectedTrip.time}</p>
                        <p><strong>Price:</strong> {selectedTrip.price}</p>
                        <p><strong>Date:</strong> {selectedTrip.date}</p>
                        <div className=' grid grid-cols-2 gap-6'>
                        <button 
                        onClick={() => setSelectedTrip(null)} 
                        className=' px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                         Pending
                       </button>
                       <button 
                         onClick={() => setSelectedTrip(null)} 
                        className=' px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                        Available
                       </button>
                       <button 
                         onClick={() => setSelectedTrip(null)} 
                        className=' px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                        Done
                       </button>
                       <button 
                         onClick={() => setSelectedTrip(null)} 
                        className=' px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'>
                        Cancelled
                        </button>
                    </div>
                </div>
        </div>
    )} 
        
        </div>
    );
}

export default Dashboard;  
