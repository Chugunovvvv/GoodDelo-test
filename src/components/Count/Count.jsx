import React from 'react'
import './Count.scss'
const Count = () => {
  return (
    <div className='count'>
        <h2 className="count__title">Дней без душноты 0</h2>

        <button className="count__button">История
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29">
  <path d="M24.5 14.8252L18.6667 8.99188M24.5 14.8252L18.6667 20.6585M24.5 14.8252H3.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>    
    </div>
  )
}

export default Count