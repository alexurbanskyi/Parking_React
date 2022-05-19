import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import './Layout.css'

function Layout() {
  return (
   <div className='container'>
      <SideBar/>
      <Outlet/>
   </div>
  )
}
export default Layout