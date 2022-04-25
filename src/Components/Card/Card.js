import React from 'react'

const Card = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/germany.jpg')} alt="Germany" />
          <div className="body">
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
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/estados-unidos.jpg')} alt="Estados Unidos" />
          <div className="body">
            <h2>United States od America</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 323,947,000</li>
                <li><span>Region:</span> Americas</li>
                <li><span>Capital:</span> Washington D.C.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/brasil.jpg')} alt="Brasil" />
          <div className="body">
            <h2>Brazil</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 206,135,893</li>
                <li><span>Region:</span> Americas</li>
                <li><span>Capital:</span> Brasília</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/iceland.jpg')} alt="Iceland" />
          <div className="body">
            <h2>Iceland</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 334,300</li>
                <li><span>Region:</span> Europe</li>
                <li><span>Capital:</span> Reykjavík</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/afghanistan.jpg')} alt="Afghanistan" />
          <div className="body">
            <h2>Afghanistan</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 27,657,145</li>
                <li><span>Region:</span> Asia</li>
                <li><span>Capital:</span> Kabul</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/finland.jpg')} alt="Finland" />
          <div className="body">
            <h2>Aland Islands</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 28,875</li>
                <li><span>Region:</span> Europe</li>
                <li><span>Capital:</span> Mariehamn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/albania.jpg')} alt="Albania" />
          <div className="body">
            <h2>Albania</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 2,886,026</li>
                <li><span>Region:</span> Europe</li>
                <li><span>Capital:</span> Tirana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <div className="card">
          <img src={require('../../Assets/algeria.jpg')} alt="Algeria" />
          <div className="body">
            <h2>Algeria</h2>
            <div className="description">
              <ul>
                <li><span>Population:</span> 40,400,000</li>
                <li><span>Region:</span> Africa</li>
                <li><span>Capital:</span> Algiers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;