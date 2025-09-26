import React, { use, useState} from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    // console.log(countriesData)
    const [visitedCountries, setVisitedCountries] = useState([]);

    function countVisitedCountry(country){
        const updatedVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(updatedVisitedCountries)
    }
    function spliceCountry(name){
        const indexToDelete = visitedCountries.findIndex(country => country.name.common === name);
        visitedCountries.splice(indexToDelete,1);

        //after deleting the unintended country, visitedCountry is updated
        //taking a new array 'previousArray'
        const previousArray = [...visitedCountries];
        setVisitedCountries(previousArray);
        
        // console.log(prev)
        // console.log(indexToDelete)
    }
    return (
        <div>
            <h1>Countries: {countriesData.length}</h1>
            <h2 className='visitedCounter'>Number of Countries Visited: {visitedCountries.length}</h2>
            <div className='visitedCountryFlags'>
                {
                    visitedCountries.map((country)=>{
                        return <img key={country.name.common} src={country.flags.png} alt={country.flags.alt}/>   
                    })
                }
            </div>
            <div className='countriesLayout'>
                {
                    countriesData.map((country)=>{
                        return <Country key={country.name.common} country={country} countVisitedCountry={countVisitedCountry} spliceCountry={spliceCountry}></Country>
                        // console.log(country.name.common)
                    })
                }
            </div>
            
        </div>
    );
};

export default Countries;