import React from 'react'
import person1 from '../assets/person1.avif';
import person2 from '../assets/person2.avif';
const Requests = () => {
  return (
    <>
        <div className='w-full h-[10%] flex flex-col gap-3'>
            <div className='font-semibold text-lg text-[#4A4A4A] pl-2'>
                Requests
            </div>
            <div className='flex-shrink-0 w-full flex flex-col gap-3'>
                <div className='w-full rounded-[35px] bg-[#FFFFFF] h-24 flex items-center px-6'>
                    <div className='w-[20%]'><img className='w-16 h-16 object-cover rounded-full' src={person1}></img></div>
                    <div className='w-[55%] font-medium text-[#4A4A4A] px-4 text-lg'>
                        <div>Sandip Mondal</div>
                        <div className='text-[#929191] font-medium text-sm'>3 Mutual friends</div>
                    </div>
                    <div className='w-[25%] flex gap-1 items-center'>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#727272" className="w-8 h-8 hover:stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#5A30FF" className="w-9 h-9 hover:stroke-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-[35px] bg-[#FFFFFF] h-24 flex items-center px-6'>
                    <div className='w-[20%]'><img className='w-16 h-16 object-cover rounded-full' src={person2}></img></div>
                    <div className='w-[55%] font-medium text-[#4A4A4A] px-4 text-lg'>
                        <div>Abhinav Das</div>
                        <div className='text-[#929191] font-medium text-sm'>1 Mutual friends</div>
                    </div>
                    <div className='w-[25%] flex gap-1 items-center'>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#727272" className="w-8 h-8 hover:stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#5A30FF" className="w-9 h-9 hover:stroke-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-[35px] bg-[#FFFFFF] h-24 flex items-center px-6'>
                    <div className='w-[20%]'><img className='w-16 h-16 object-cover rounded-full' src={person2}></img></div>
                    <div className='w-[55%] font-medium text-[#4A4A4A] px-4 text-lg'>
                        <div>Abhinav Das</div>
                        <div className='text-[#929191] font-medium text-sm'>1 Mutual friends</div>
                    </div>
                    <div className='w-[25%] flex gap-1 items-center'>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#727272" className="w-8 h-8 hover:stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#5A30FF" className="w-9 h-9 hover:stroke-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Requests
