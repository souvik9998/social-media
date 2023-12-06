import React from 'react'
import profilePicture from '../assets/post1Profile.jpg';
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
const Messagebar = () => {
  return (
    <>
      <div className='font-inter bg-[#FFFFFF] w-full h-[420px] rounded-[35px] flex flex-col gap-5 shadow px-6 py-6'>
        <div className='flex gap-3 items-center '>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#727272" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </div>
            <div className='text-[#4A4A4A] font-semibold text-lg'>Messages</div>
            </div>
        <div className='bg-[#FCFCFC]  w-full px-3 flex items-center justify-center h-16 rounded-[50px] border-[1px] border-[#ACACAC]'>
            <div className='w-[10%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C8C8C" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input
            type='text'
            placeholder='Search Messages'
            className='w-[90%] px-2 bg-inherit placeholder:font-semibold placeholder:text-[#ABABAB] outline-none focus:outline-none'/>
        </div>
        <div className='flex flex-col  pt-2  h-full justify-around'>
          <div className='flex gap-4 items-center'>
            <div className='w-[18%]'><img className='w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[77%] font-semibold text-[#4A4A4A]'>Swarup</div>
            <div className='w-[5%]'><div className='w-2 h-2 rounded-full bg-green-600'></div></div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-[18%]'><img className='w-12 h-12 rounded-full object-cover' src={person2}></img></div>
            <div className='w-[77%] font-semibold text-[#4A4A4A]'>Swarup</div>
            <div className='w-[5%]'><div className='w-2 h-2 rounded-full bg-green-600'></div></div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-[18%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
            <div className='w-[77%] font-semibold text-[#4A4A4A]'>Swarup</div>
            <div className='w-[5%]'><div className='w-2 h-2 rounded-full bg-red-600'></div></div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-[18%]'><img className='w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[77%] font-semibold text-[#4A4A4A]'>Swarup</div>
            <div className='w-[5%]'><div className='w-2 h-2 rounded-full bg-green-600'></div></div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Messagebar
