import React from 'react'
import './Info.scss'
const Info = ({data}) => {
  return (
    <div className={data.celcius > 27 || data.pressure > 800 ? 'info-bad' : 'info'}>
        <div className="info__temp">
            <h2 className='info__temp-title'>{Math.round(data.celcius)} ℃</h2>
            <p className="info__temp-subtitle">Температура</p>
        </div>
        <div className="info__davl">
            <h2 className="info__davl-title">{Math.round(data.pressure)} ppm</h2>
            <p className="info__davl-subtitle">CO2</p>
        </div>
    </div>
  )
}

export default Info