import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'
import GetStartedPage from './Pages/GetStartedPage'
import Footer from './Components/Footer'
import Login from './Pages/Login'
const App = () => {

  return (
    <>
    {/* <Navbar className='sticky top-0 z-50'/>
    <HomePage/>
    <DetailsPage/>
    <GetStartedPage/>
    <Footer/> */}
    <Login/>
    </>
  )
}

export default App
