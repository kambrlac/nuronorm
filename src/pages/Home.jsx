import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Purpose from '../components/Purpose/Purpose'
import Composition from '../components/Composition/Composition'
import Use from '../components/Use/Use'
import Feedback from '../components/Feedback/Feedback'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Purpose/>
        <Composition/>
        <Use/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home