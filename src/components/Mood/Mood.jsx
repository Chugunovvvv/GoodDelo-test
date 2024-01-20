import React from 'react'
import './Mood.scss'
const Mood = ({data}) => {
  return (
    <div className={data.celcius > 27 || data.pressure > 800 ? 'mood-bad' : 'mood'}>
        <h2 className="mood__title">{data.celcius > 27 || data.pressure > 800 ? 'Душнила не доволен вами' : 'Душнила доволен вами'}</h2>
        <p className="mood__subtitle">{data.celcius > 27 && data.pressure > 800 ? 'Все показатели превышают норму' : data.pressure > 800 ? 'CO2 превышает норму' : data.celcius > 27 ? 'Температура превышает норму' : 'Все показатели в норме'} </p>
    </div>
  )
}

export default Mood