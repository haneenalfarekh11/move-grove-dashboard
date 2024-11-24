// import React from 'react'

// const DashCard = ({ title, onClick }) => {
//   return (
//     <div className='w-80 h-32 bg-white shadow-md shadow-gray-300 rounded-md flex justify-center items-center gap-4'>
       
//         <div className='w-[70%] text-left'>
//             <p className='text-gray-500 text-sm'>{title}</p>
//         </div>
//     </div>
//   )
// }
// export default DashCard 
import React from 'react';

const DashCard = ({ title, onClick, time, price }) => {
  return (
    <div 
      className='w-80 h-32 bg-white shadow-md shadow-gray-300 rounded-md flex justify-center items-center gap-4 cursor-pointer hover:shadow-xl' 
      onClick={onClick} // تنفيذ onClick عند النقر على الكارد
    >
      {/* القسم الخاص بعنوان الرحلة */}
      <div className='w-[70%] text-left '>
        <p className='text-gray-500 text-sm'>{title}</p>
        {time && <p className='text-gray-400 text-xs'>{time}</p>}  {/* عرض الوقت إذا كان موجودًا */}
        {price && <p className='text-gray-600 text-sm font-semibold'>{price}</p>} {/* عرض السعر إذا كان موجودًا */}
      </div>
    </div>
  );
}

export default DashCard;