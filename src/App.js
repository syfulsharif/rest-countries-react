import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function Countries () {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h4>Traveling Around The World!</h4>
//       <h6>Countries Found {countries.length}</h6> {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country (props) {
//   return (
//     <div>
//       <h2>Name : {props.name}</h2>
//       <h3>Capital : {props.capital}</h3>
//     </div>
//   )
// }

export default App;
