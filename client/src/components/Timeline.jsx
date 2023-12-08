import React from 'react'
import profileImage from '../assets/profileImage.avif'
import Post from './Post'
const Timeline = () => {
  return (
    <>
        <div className='font-inter w-full pt-4 px-12 flex flex-col gap-5'>
            <div className='bg-[#FCFCFC] w-full h-16 rounded-[50px] border-[1px] border-[#ACACAC]
            flex items-center justify-center px-6'>
                <div className='w-[5%]'><img className='w-8 h-8 rounded-full object-cover' src={profileImage}></img></div>
                <input
                placeholder='Whats on your mind?'
                className='outline-none focus:outline-none rounded-[50px] w-[90%] h-full px-6 placeholder:text-[#ABABAB] bg-inherit text-lg'
                />
                <div className='w-[5%] '>
                    <div className='bg-[#5A30FF] w-9 h-9 font-bold text-white text-xl rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div><Post/></div>
            <div><Post/></div>
            <div><Post/></div>
            </div>
            
        </div>  
    </>
  )
}

export default Timeline
