import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Features from './components/Features/Features'
import Main from './components/Main/Main'

function App() {
  return (
    <>
      <div className='all'>
          <Header />
          <Main />
          <Features />
          <Footer/>
      </div>
    </>
  )
}

export default App