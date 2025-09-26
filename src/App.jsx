import './App.css'
import Countries from './Countries/Countries';

  const countriesPromise = fetch("https://restcountries.com/v3.1/independent?status=true&fields=name,currencies,capital,languages,flags,maps,coatOfArms,timezones,continents")
                        .then(res => res.json())
                        .catch(err => console.log(err))
function App() {

  return (
    <div className='container'>
      <Countries countriesPromise={countriesPromise}></Countries>
    </div>
  )
}

export default App
