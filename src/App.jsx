import React from 'react';
import './App.css';
import Header from './Components/Header';
import MetroCities from './Components/MetroCities';
import SearchCities from './Components/SearchCities';
import Rights from './Components/Rights';

const App = () => {
  return (
    <>
      <Header />
      <MetroCities />
      <SearchCities />
      <Rights />
    </>
  )
}

export default App