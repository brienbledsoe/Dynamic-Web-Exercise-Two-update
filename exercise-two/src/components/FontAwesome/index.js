import ReactDOM from 'react-dom'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //told us to write something here
import {faCloudRain, faCloud, faSun, faWind, faSmog, faSnowflake} from '@fortawesome/free-solid-svg-icons'

export default function WeatherIcon({weatherType}){
  switch(weatherType){
    case "Rain":
      return <FontAwesomeIcon icon={faCloudRain} size="4x"/>

    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} size="4x"/>

    case "Clear":
      return <FontAwesomeIcon icon={faSun} size="4x"/>

    case "Mist":
      return <FontAwesomeIcon icon={faSmog} size="4x"/>

    case "Snow":
      return <FontAwesomeIcon icon={faSmog} size="4x"/>

  }

  return(
    <FontAwesomeIcon icon={faCloudRain} size="4x"/>
  );

};
