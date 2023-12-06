import React from 'react'
import profileImage from '../assets/profileImage.avif'
import { useState } from 'react';
const Header = () => {
  const [dropdown,setDropdown] = useState(false);
  const toogleDropdown = () =>{
    setDropdown(true)
  }
  const leaveDropdown = () =>{
    setDropdown(false)
  }
  return (
    <>
        <div className='fixed font-inter w-full gap-6 h-[12vh] z-50 px-20 bg-[#FFFFFF] drop-shadow flex justify-center items-center'>
          <div className='text-[#5A30FF] font-bold text-2xl w-[22%]'>Social media</div>
          <div className='w-[50%] px-6'>
            <div className='bg-[#FCFCFC] flex items-center justify-center border-[1px] border-[#ACACAC] rounded-[50px] h-16 px-4'>
              <div className='w-[5%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8C8C8C" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
              type='text'
              placeholder='Search for creators inspiration and people'
              className='w-[90%] outline-none focus:outline-none bg-inherit placeholder:text-[#ABABAB]'
              />
            </div>
          </div>
          
          <div 
          
          className='w-[28%] justify-end flex gap-6'>
            <div className='bg-[#5A30FF] flex items-center h-12 px-5 w-fit text-white rounded-[50px] border-[1px] border-[#ACACAC]'>Create</div>
            <div
            onMouseEnter={toogleDropdown}
            onMouseLeave={leaveDropdown}
            className='relative'
            >
              <img className='w-12 h-12 rounded-full object-cover' src={profileImage}></img>
              {dropdown&&
              <div className='h-fit w-80 absolute -right-6 top-12 p-2'>
                <div 
                className='px-[6px] rounded-[35px] h-fit w-full border border-gray-200 bg-white'>
                  <div className='py-4 pl-6 flex items-center gap-3'>
                    <div><img className='w-10 h-10 rounded-full object-cover' src={profileImage}></img></div>
                    <div><div className='text-[#4A4A4A] font-semibold'>Souvik Das</div>
                    <div className='text-sm text-[#929191] '>souvik9998@gmail.com</div>
                    </div>
                  </div>
                  <div className='h-[2px] rounded-full w-full bg-gray-200'></div>
                    <div className='py-2'>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <div className='font-semibold'>Settings</div>
                      </div>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>

                        <div className='font-semibold'>Upgrade plan</div>
                      </div>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>

                        <div className='font-semibold'>Discount</div>
                      </div>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>

                        <div className='font-semibold'>Refer to a friend</div>
                      </div>
                    </div>
                    <div className='h-[2px] rounded-full w-full bg-gray-200'></div>
                    <div className='py-2'>
                    <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <div className='font-semibold'>Link in bio</div>
                      </div>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                      </svg>
                        <div className='font-semibold'>Browser extension</div>
                      </div>
                      <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                        <div className='font-semibold'>Mobile app</div>
                      </div>
                    </div>
                    <div className='h-[2px] rounded-full w-full bg-gray-200'></div>
                    <div className='py-2'>
                    <div className='flex gap-3 items-center text-[#4A4A4A] py-2 pl-4 hover:text-[#5A30FF] hover:bg-[#5A30FF]/5 rounded-[10px] rounded-b-[35px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        <div className='font-semibold'>Logout</div>
                      </div>
                    </div>

                </div>
              </div>
                
              }
            </div>
            
          </div>
        </div>  
    </>
  )
}

export default Header;
