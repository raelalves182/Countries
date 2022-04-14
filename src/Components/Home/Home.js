import React from 'react'
import Select from 'react-select';
import Card from '../Card/Card';
// Material
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

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
              <Box 
                sx={{
                  width: 460,
                  maxWidth: '100%',
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#aaa"
                    }
                  }
                }}
              >
                <TextField 
                  fullWidth
                  placeholder="Search for a Country..."
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <div>
                <Select placeholder="Filter by Region" options={options} />
              </div>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;