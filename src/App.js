import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries () {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h4>Traveling Around The World!</h4>
      <h6>Countries Found {countries.length}</h6>
    </div>
  )
}

export default App;
