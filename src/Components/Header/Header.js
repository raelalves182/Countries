import React from 'react'
import DarkMode from '../DarkMode/Drakmode';

const Header = () => {
  return (
    <header className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="menu">
              <h1>Where in the world?</h1>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;