import React from 'react'
import Navigation from '../Navigation'
import Timeline from '../Timeline'
import Messagebar from '../Messagebar'
import Createpost from '../Createpost'
import Requests from '../Requests'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
    const rightPanelRef = useRef();
  const timeLineRef = useRef();
  const leftPanelRef = useRef();
  const handleWheel = (e) => {
    console.log(e);
    const section = rightPanelRef.current;
    section.scrollBy({ top: e.deltaY, behavior: 'smooth' });
  };
  const handleTimelineWheel = (e)=>{
    console.log(e);
    const section = timeLineRef.current;
    section.scrollBy({ top: e.deltaY, behavior: 'smooth' });
  }
  return (
    <>
      <div className='bg-[#F1F1F1] h-fit w-full flex py-6'>
            <div className='w-[22%]'>
                <div className='fixed w-[22%] min-h-screen  flex flex-col gap-8 pl-20'>
                    <Navigation/>
                    <Createpost/>
                </div>
            </div>
            <div 
            ref={timeLineRef}
            onWheel={handleTimelineWheel}
            className='w-[50%] '>
                <Outlet/>
            </div>
            <div className=' w-[28%] h-[85vh] fixed right-0  overflow-auto pr-20'>
                <div className='w-full h-full sticky flex flex-col gap-6'>
                    <Messagebar/>
                    <Requests/>
                </div>
                    
            </div>
        </div> 
    </>
  )
}

export default HomeLayout
