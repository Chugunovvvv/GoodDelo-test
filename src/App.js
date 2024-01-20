
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Mood from './components/Mood/Mood'
import Count from './components/Count/Count'
import Logo from './components/Logo/Logo'
import Info from './components/Info/Info'
import axios from 'axios'

const App = () => {
    const [data, setData] = useState({
      celcius: 24,
      pressure: 500,
    })

   const intervalInfo = () => setInterval(function() {
      const api = 'http://dushnila.gooddelo.com/data';
        axios.get(api)
      .then((res) => {
        setData({...data, celcius: res.data.temp, pressure: res.data.co2}, console.log(res))
      })
      .catch(err => console.log(err))

    }, 60000)

   useEffect(() => {
   intervalInfo()
   }, [])
    
  return (
    <div className="container">
      <Header/>
      <div className="wrap">
        <div className="wrap__left">
        <Mood data={data}/>
        <div className="wrap-down">
        <Count/>
        <Logo/>
        </div>
        </div>
      <Info data={data}/>
      </div>

    </div>


  )
}

export default App