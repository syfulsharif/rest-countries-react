import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, flags} = props.country;
    return (
        <div className="country">
            <h2>Name : {name}</h2>
            <p>Capital : {capital}</p>
            <p>Population: {population}</p>
            <img src={flags[0]}alt="" />
        </div>
    );
};

export default Country;