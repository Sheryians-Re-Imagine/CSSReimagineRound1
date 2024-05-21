import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Navigation/Header'
import Footer from './components/Navigation/Footer'

function Layout() {
  return (
    <div>
      <Header/>
        <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
