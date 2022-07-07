import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home