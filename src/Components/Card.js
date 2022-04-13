import React from 'react'
import Germany from '../Assets/germany.jpg';

const Card = () => {
  return (
    <div className="card">
      <img src={Germany} alt="Germany" />
      <div className="card__body">
        <h2>Germany</h2>
        <div className="description">
          <ul>
            <li><span>Population:</span> 81,770,900</li>
            <li><span>Region:</span> Europe</li>
            <li><span>Capital:</span> Berlin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;