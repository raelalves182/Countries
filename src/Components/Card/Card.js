import React, { useEffect, useState } from 'react'

const Card = () => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then(response => {
        if ( response.ok ) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setCountry(data);
      })
      .catch(erro => console.log(erro))
  }, [])

  return (
    <div className="grid">
      {country.map(country => (
        <div key={country} className="card">
          <img src={country.flag} alt="Germany" />
          <div className="body">
            <h2>{country.name}</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> {country.population}</li>
                <li><span>Region:</span> {country.region}</li>
                <li><span>Capital:</span> {country.capital}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;