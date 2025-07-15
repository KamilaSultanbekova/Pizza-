import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeC from '../components/HomeC'
import Aboutus from '../components/Aboutus'
import Events from '../components/Events'
import Menu from '../components/Menu'

export default function Home() {
  return (
   <div className='container mx-auto'>
    <Navbar/>
    <HomeC/>
    <Menu/>
    <Events/>
    <Aboutus/>
   
    <Footer/>
   </div>

  )
}
