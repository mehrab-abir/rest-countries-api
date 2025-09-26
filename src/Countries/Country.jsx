import React, { useState } from 'react';


const Country = ({country,countVisitedCountry, spliceCountry}) => {
    // console.log(country)
    // const currencies = country.currencies;
    // console.log()

    const [visited, setVisited] = useState(false)

    function handleVisited(){
        if(visited){
            setVisited(false)
            const name = country.name.common;
            // console.log(name);
            spliceCountry(name);
        }
        else{
            setVisited(true)
            countVisitedCountry(country);
        }
    }
    
    return (
        <div className={`country ${visited ? "visited-country" : "not-visited"}`}>
            <img src={country.flags.png} alt={country.flags.alt} />
            <div className='info'>
                <h2>Country: {country.name.common}</h2>
                <p>Continent: {country.continents[0]}</p>
                <p>Capital: {country.capital[0]}</p>
                <p>Currency : {Object.values(country.currencies)[0].name} </p>
                <p>See Google Map: <a href={country.maps.googleMaps} target='_blank'>Click</a></p>
                <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
            </div>
            
        </div>
    );
};

export default Country;