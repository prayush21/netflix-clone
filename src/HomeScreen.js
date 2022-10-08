import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* NavBar */}
        <Nav/>
        
        <Banner/>

        {/* Row */}
    </div>
  )
}

export default HomeScreen