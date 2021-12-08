import React from 'react';
import WeatherBar, { AfternoonWeatherBar, MidNightWeatherBar, NightWeatherBar } from './WeatherBar';

export default {
    title:'WeatherBars',
    component:'WeatherBars'
}

export const Morning = () => <WeatherBar />
export const Afternoon = () => <AfternoonWeatherBar />
export const Night = () => <NightWeatherBar />
export const Midnight = () => <MidNightWeatherBar />

Morning.stories={
    name:'Morning'
}
Afternoon.stories={
    name:'Afternoon'
}
Night.stories={
    name:'Night'
}
Midnight.stories={
    name:'Midnight'
}
