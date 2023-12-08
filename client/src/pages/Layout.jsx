import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const Layout = () => {
  return (
    <>
    <div className='h-[12vh]'>
      <Header/>
    </div>
    <div className='h-[88vh]'><Outlet/></div>
    </>
  )
}

export default Layout
