import React from 'react';

const CountryDetail = ({country}) =>{
    return(
<div>
    <h3>{country.name}</h3>
    <h3>{country.capital}</h3>
    <img src={country.flag}/>
</div>    
)
}

export default CountryDetail