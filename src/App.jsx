import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'

const App = () => {

  return (
    <>
    <Navbar className='sticky top-0 z-50'/>
    <HomePage/>
    <DetailsPage/>
    </>
  )
}

export default App
