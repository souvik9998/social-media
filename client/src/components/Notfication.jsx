import React from 'react'
import profilePicture from '../assets/post1Profile.jpg';
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
const Notfication = () => {
  return (
    <>
      <div className='font-inter w-full pt-4 px-16 flex flex-col gap-3'>
        <div className='flex justify-between mb-2'>
          <div className='text-[#4A4A4A] font-semibold text-xl'>Notfication</div>
          <div className='text-[#5A30FF] text-sm font-medium'>Mark all as read(4)</div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#5A30FF]/10'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={person1}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>Moulik dutta sent you a friend request</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={person2}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>You have more than 20+ friend request pending</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>Ayush and 20 others liked your profile picture</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#5A30FF]/10'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>Swarup messaged you</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>Moulik commented on your post "not your game"</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-4 rounded-[15px] font-medium text-[#4A4A4A] flex gap-4 justify-start  px-8 bg-[#5A30FF]/10'>
            <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
            <div className='flex justify-between items-center w-[90%]'>
            <div className='flex flex-col gap-3'>
              <div>Sudhendu mondal sent you a friend Requests</div>
              <div className='flex gap-2'>
                <div className='bg-[#5A30FF] rounded-[10px] shadow text-white font-semibold px-3 py-1'>Accept</div>
                <div className='text-[#5A30FF] border-2 border-[#5A30FF] rounded-[10px] bg-white font-semibold px-3 py-1'>Reject</div>
              </div>
            </div>
            <div className='text-[#5A30FF]/70 text-sm font-semibold h-full'>2 hours ago</div>
          </div>
          
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>You have more than 20+ friend request pending</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>You have more than 20+ friend request pending</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-2 gap-4 rounded-[15px] font-medium text-[#4A4A4A] flex items-center px-8 bg-[#EAEAEA]'>
          <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
          <div className='flex justify-between items-center w-[90%]'>
          <div>You have more than 20+ friend request pending</div>
          <div className='text-[#5A30FF]/70 text-sm font-semibold'>2 hours ago</div>
          </div>
        </div>
        <div className='min-h-16 py-4 rounded-[15px] font-medium text-[#4A4A4A] flex gap-4 justify-start  px-8 bg-[#5A30FF]/10'>
            <div className='w-[10%]'><img className='w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
            <div className='flex justify-between items-center w-[90%]'>
            <div className='flex flex-col gap-3'>
              <div>Sudhendu mondal sent you a friend Requests</div>
              <div className='flex gap-2'>
                <div className='bg-[#5A30FF] rounded-[10px] shadow text-white font-semibold px-3 py-1'>Accept</div>
                <div className='text-[#5A30FF] border-2 border-[#5A30FF] rounded-[10px] bg-white font-semibold px-3 py-1'>Reject</div>
              </div>
            </div>
            <div className='text-[#5A30FF]/70 text-sm font-semibold h-full'>2 hours ago</div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Notfication
