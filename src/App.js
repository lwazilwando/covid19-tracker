import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import GlobalStats from './componets/global'
import CountriesStats from './componets/countriesStats'

function App() {

  const [globalStats, setGlobalStats] = useState('')
  const [countriesStats, setCountriesStats] = useState('');


  useEffect(()=>{


    let url = "https://api.covid19api.com/summary";

    fetch(url).then((response) => response.json().then((data)=>{

      console.log(data);
      setGlobalStats(data.Global)
      setCountriesStats(data.Countries)


    }))


  }, [])
    

  return (

    <div className="App">

      <GlobalStats  global={globalStats}/>
      <CountriesStats countries={countriesStats}/>

    </div>

  );
}

export default App;
