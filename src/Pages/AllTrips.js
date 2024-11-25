import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import DashCard from '../Components/DashCard';

const AllTrips = () => {
    const [open, setOpen] = useState(false);
      const [view, setView] = useState(0) 
      const [openAdd, setOpenAdd] = useState(false)
      const [model, setModel] = useState(false)
  
    return (
      <div className='w-full min-h-screen flex bg-yellow-100'>
      <div  className={` ${open ? "w-60   " : "w-8 " } h-full relative duration-300 `}onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <Sidebar/>
      </div>
      <div className='w-[100%] h-[100%] pl-14 flex justify-center items-center flex-col'>
        <div className='w-[90%] h-36 text-left mb-12 flex justify-center items-center flex-col gap-5'>
            <div className='w-[100%] h-[30%] flex justify-between'>
            <h1 className='text-3xl font-semibold'>AllTrips</h1>
            </div>
            </div>
      </div>
      <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
                  <DashCard title={'From Damascus To Homs'} />
                  <DashCard title={'From Damascus To Hama'} />
                  <DashCard title={'From Damascus To Tartous'}  />
                  <DashCard title={'From Damascus To Aleppo'}  />
                  <DashCard title={'From Aleppo To Homs'} />
                  <DashCard title={'From Tartous To Damascus'} />
                  <DashCard title={'From Hama To Homs'}/>
                  <DashCard title={'From Homs To Lattakia'}/>
                  <DashCard title={'From Damascus To Alhasaka'}  />
                  <DashCard title={'From Homs To Damascus'} />
                  <DashCard title={'From Aleppo To Lattakia'} />
                </div>
      </div>
    )}
    export default AllTrips ;