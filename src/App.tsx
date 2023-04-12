import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Explication from './components/Explication'
import Motives from './components/Motives'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='w-full h-full flex flex-col justify-center items-center overflow-x-hidden'>
      <Header />
      <About />
      <Explication />
      <Motives />
      <Footer />
    </main>
  )
}

export default App