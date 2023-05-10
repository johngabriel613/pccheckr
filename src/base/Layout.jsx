import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='text-slate-800'>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
