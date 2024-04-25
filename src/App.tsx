import React from 'react'
import Header from './components/Header'
import './App.css'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

const App : React.FC = () => {
  return (
    <div >
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  )
}

export default App;

