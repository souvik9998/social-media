import React from 'react'
import profilePicture from '../assets/post1Profile.jpg';
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
import group1 from '../assets/group1.jpg'
import group2 from '../assets/group2.jpg'
import group3 from '../assets/group3.jpg'
import group4 from '../assets/group4.jpg'
import group5 from '../assets/group5.jpg'
import group6 from '../assets/group6.jpg'
import { useNavigate } from 'react-router-dom';
const Messages = () => {
  const navigate = useNavigate();
  return (
    <>

      <div className='w-full h-full bg-[#F1F1F1] flex'>
        <div className=' w-[30%] h-full fixed overflow-auto scroll-smooth drop-shadow '>
        <div className='border bg-white border-gray-200 w-full sticky '>
        <div 
        onClick={()=>navigate("/")}
        className='text-[#5A30FF] font-bold text-2xl px-6 pt-4 pb-2 cursor-pointer'>Social media</div>
          <div className='py-4 px-4'>
          <div className='bg-[#FCFCFC]  w-full px-3 flex items-center justify-center h-11 rounded-[50px] border-[1px] border-[#ACACAC]'>
            <div className='w-[5%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8C8C8C" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input
            type='text'
            placeholder='Search...'
            className='w-[95%] px-2 bg-inherit placeholder:font-semibold placeholder:text-[#ABABAB] outline-none focus:outline-none'/>
        </div> 
          </div>
          <div className='px-4 pb-4 w-full'>
            <div className=' font-semibold text-lg text-[#4A4A4A] pb-4'>Chat groups</div>
            <div className='flex items-center gap-3 w-full overflow-x-auto scrollbar-hidden'>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group1}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group2}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group5}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group6}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group5}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group6}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group1}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group2}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group1}></img>
                <img className='drop-shadow w-[56px] h-[56px] rounded-full object-cover' src={group2}></img>
            </div>
          </div>
            <div className='px-4 font-semibold text-lg text-[#4A4A4A] pb-4'>Messages</div>
            <div className='flex flex-col gap-2 px-4'>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup Mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-white border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person2}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Moulik Dutta</div>
                <div><div className='w-2 h-2 rounded-full bg-red-600 pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold truncate'>can u meet me at seven in the evening</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-white border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={profilePicture}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-red-600 pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-white border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-red-600 pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            <div className='border-b-2 rounded-[15px] drop-shadow bg-[#e9e4ff] border-gray-300 flex gap-4 py-4 h-20 px-4 justify-between'>
            <div className='w-[15%]'><img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img></div>
            <div className='w-[60%]'>
              <div className='text-[#4A4A4A] font-semibold flex items-center gap-2'>
                <div>Swarup mondal</div>
                <div><div className='w-2 h-2 rounded-full bg-green-600 animate-pulse pt-1'></div></div>
              </div>
              <div className='text-[#767676] text-sm font-semibold w-full truncate'>can i get your number...or you can just text me</div>
            </div>
            <div className='w-[25%] text-[#5A30FF] text-sm font-semibold'>2 mins ago</div>
            </div>
            </div>
            
        </div>
        </div>
        
        <div className='w-[70%] h-full right-0 bg-[#F1F1F1] fixed py-4 px-4'>
          <div className='h-[12%] bg-inherit w-full'>
          <div className='h-20 w-full bg-white rounded-[25px] shadow flex px-6 items-center justify-between'>
            <div className='flex items-center gap-4'>
            <img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img>
            <div className='text-[#4A4A4A] font-semibold text-lg'>Moulik Dutta</div>
            </div>
            <div className='flex gap-3'>
            <div className='bg-[#5A30FF] rounded-full shadow w-10 h-10 items-center justify-center flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>
            </div>
            <div className='bg-[#5A30FF] rounded-full shadow w-10 h-10 items-center justify-center flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>

            </div>
            </div>
            
          </div>
          </div>
          
          <div className='p-6 flex flex-col gap-2 overflow-auto scroll-smooth h-[80%] '>
            <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                <img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img>
                <div><div className='absolute bottom-[6px] border-2 border-white -right-1 w-3 h-3 rounded-full bg-green-600'></div></div>
                </div>
              <div className='bg-white rounded-br rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>How have you been?</div>
            </div>
            <div className='flex items-end justify-end gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className=' rounded-bl rounded-[10px] text-white bg-[#5A30FF] font-semibold text-sm h-fit items-center flex px-3 py-2  max-w-[60%] min-w-[100px] shado'>
                Hey! I've been good, thanks! How about you?</div>
            </div>
          
          <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                <img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img>
                <div><div className='absolute bottom-[6px] border-2 border-white -right-1 w-3 h-3 rounded-full bg-green-600'></div></div>
                </div>
              <div className='bg-white rounded-bl rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>
              Not too bad, just keeping busy. I was thinking it's been a while since we caught up. How about we plan a meeting this week?
              </div>
            </div>
            <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className='bg-white rounded-bl rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>
              That sounds like a great idea! I could use a good chat. When works for you?
                </div>
            </div>
            <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className='bg-white rounded-bl rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>
              That sounds like a great idea! I could use a good chat. When works for you?
                </div>
            </div>
            <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                
                </div>
              <div className='bg-white rounded-bl rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>How have you been?</div>
            </div>
            <div className='flex items-end justify-end gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className=' rounded-bl rounded-[10px] text-white bg-[#5A30FF] font-semibold text-sm h-fit items-center flex px-3 py-2  max-w-[60%] min-w-[100px] shado'>
              I'm pretty flexible. How about we grab lunch on Thursday? There's this new place I've been wanting to try</div>
            </div>
            <div className='flex items-end justify-end gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className=' rounded-bl rounded-[10px] text-white bg-[#5A30FF] font-semibold text-sm h-fit items-center flex px-3 py-2  max-w-[60%] min-w-[100px] shado'>
              I'm pretty flexible. How about we grab lunch on Thursday? There's this new place I've been wanting to try</div>
            </div>
            <div className='flex items-end justify-end gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className=' rounded-bl rounded-[10px] text-white bg-[#5A30FF] font-semibold text-sm h-fit items-center flex px-3 py-2  max-w-[60%] min-w-[100px] shado'>
              How about 12:30? Does that work for you?</div>
            </div>
            <div className='flex items-end justify-start gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
              <img className='drop-shadow w-12 h-12 rounded-full object-cover' src={person1}></img>
                <div><div className='absolute bottom-[6px] border-2 border-white -right-1 w-3 h-3 rounded-full bg-green-600'></div></div>
                </div>
              <div className='bg-white rounded-bl rounded-[10px] text-[#4A4A4A] font-semibold text-sm h-fit items-center flex px-3 py-2 max-w-[60%] min-w-[100px] shado'>
              Thursday works for me! The new place sounds perfect. What time?
                </div>
            </div>
            <div className='flex items-end justify-end gap-2'>
              <div className='relative w-12 h-12 rounded-full'>
                </div>
              <div className=' rounded-bl rounded-[10px] text-white bg-[#5A30FF] font-semibold text-sm h-fit items-center flex px-3 py-2  max-w-[60%] min-w-[100px] shado'>
              Awesome! See you on Thursday, then. 😊</div>
            </div>
            </div>
            <div className='flex h-[8%] bg-[#F1F1F1] gap-3 items-center justify-center fixed bottom-0 px-10 w-[70%]'> 
              <div className='flex gap-2 w-[15%]'>
                <div className='bg-[#5A30FF] rounded-full shadow w-10 h-10 items-center justify-center flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                  <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                </svg>
                </div>
                <div className='bg-[#5A30FF] rounded-full shadow w-10 h-10 items-center justify-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clip-rule="evenodd" />
                </svg>
                </div>
                <div className='bg-[#5A30FF] rounded-full shadow w-10 h-10 items-center justify-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                  <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                  <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
                </div>
              </div>
              <div className='bg-[#FCFCFC]  w-[85%] px-2 flex items-center justify-center h-12 rounded-[50px] border-[1px] border-[#ACACAC]'>
              <input
              type='text'
              placeholder='Write your message here'
              className='w-full px-4 bg-inherit placeholder:font-semibold placeholder:text-[#ABABAB] outline-none focus:outline-none'/>
            </div>
            </div>
            
        </div>
          
        
      </div>
    </>
  )
}

export default Messages
