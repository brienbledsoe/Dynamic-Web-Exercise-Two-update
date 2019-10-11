import React, {useEffect,useState} from 'react';
import axios from 'axios';
import WeatherIcon from "../components/FontAwesome/";
import PageWrapper from "../components/PageWrapper/";
import FontAwesome from "../components/FontAwesome"
const apiKey = 'bd3aebe7893aee9885545c96d06c993e';


export default function Home(props){
const [error, isError] = useState(false);
const [success, isSuccess] = useState(true);
const [clouds, setCloudType] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [city,setCity] = useState('');
const [weather, setWeather] = useState({});
const[weatherType,setWeatherType] = useState('');

function queryWeatherAPI(queryCity){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)

    .then(function(response){
    console.log('response',response);
    if (response.status !== 200){
      isError(true);
      setErrorMessage(`${response.status}: ${'Error'}`);
    }else{
      isSuccess(true);
    }
    setWeather(response);
    return response;

    })

    .catch(function(error){
    console.log('error',error);
    return error;
    });


  // console.log(city);
}


useEffect(()=> {

  const urlParams = new URLSearchParams(props.location.search)
  const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London'
  setCity(cityParam);
  queryWeatherAPI(cityParam); //This line is actually necessessary

},[]);

useEffect(() =>{
const weatherType = weather.data ? weather.data.weather[0].main: "";
const clouds = weather.data ? weather.data.clouds.all: " ";
setWeatherType(weatherType);
setCloudType(clouds);

},[weather]);

console.log("weather type test: ", weatherType);
console.log("cloud percentage: ", clouds);


return(
  <PageWrapper clouds = {clouds}>
  <div className="App">
  <div className="WeatherNav">

    <div className="WeatherItem">
    <a className={`WeatherNav_Item ${city==='Seoul' ? 'WeatherNav_Item--active': ''}`}href="/?city=Seoul">Seoul</a>
    </div>

    <div className="WeatherItem">
    <a  className={`WeatherNav_Item ${city==='London' ? 'WeatherNav_Item--active': ''}`}href="/?city=London">London</a>
    </div>

    <div className="WeatherItem">
    <a  className={`WeatherNav_Item ${city==='Miami' ? 'WeatherNav_Item--active': ''}`} href="/?city=Miami">Miami</a>
    </div>

    <div className="WeatherItem">
    <a  className={`WeatherNav_Item ${city==='Chicago' ? 'WeatherNav_Item--active': ''}`} href="/?city=Chicago">Chicago</a>
    </div>
  </div>
    <div>

    </div>



    <div className="AppChild_info">
      <WeatherIcon weatherType={weatherType}/>
      {error && <div className="errorMessage">{errorMessage}</div>}
      {success && <div className="successMessage">Weather Query Is Successful :) </div>}

      <h1>Weather in {city}</h1>
      <p>Weather type in {city} is: {weather.data ? weather.data.weather[0].description: ""}</p>
      <p>The humidity in {city} is: {weather.data ? weather.data.main.humidity: ''}</p>
      <p>The current temperature in {city} is: {weather.data ? weather.data.main.temp: ''}</p>
      <p>The maximum temperature in {city} is: {weather.data && weather.data.main.temp_max}</p>
      <p>The minimum temperature in {city} is: {weather.data && weather.data.main.temp_min}</p>
      <p>The pressure in {city} is: {weather.data ? weather.data.main.pressure: ''}</p>
    </div>
  </div>
  </PageWrapper>
)

}
