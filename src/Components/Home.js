import React from 'react'
import Select from 'react-select';
import Card from '../Components/Card/Card';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europa', label: 'Europa' },
  { value: 'oceania', label: 'Oceania' }
]


const Home = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="content">
              <input aria-label="text" placeholder="Search for a country..."></input>
              <Select placeholder="Filter by Region" options={options} />
            </div>
            <Card />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;