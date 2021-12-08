import React from 'react';
import MorningImage from '../../components/Assets/morning.svg';
import AfternoonImage from '../../components/Assets/morning.svg';
import NightImage from '../../components/Assets/Night.svg';
import MidNightImage from '../../components/Assets/midnight.svg';


const WeatherBar = () => {
    return (
        <img src={MorningImage} alt='morning'/>
    )
}

export const AfternoonWeatherBar = () => {
    return(
        <img src={AfternoonImage} alt='afternoon' />
    )
}
export const NightWeatherBar = () => {
    return(
        <img src={NightImage} alt='night' />
    )
}
export const MidNightWeatherBar = () => {
    return(
        <img src={MidNightImage} alt='mid-night' style={{maxWidth:'100%', height:'auto',overflow: "hidden"}} />
    )
}

export default WeatherBar;
