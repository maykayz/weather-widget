import React from 'react'
import {unixFormatter} from '../../utils/utils'
import styles from './Current.module.css'

const CurrentWeather = ({current}) => (

	<div className={styles.current__container}>

		<div className={styles.current__weather}>
			{
				current && current.weather && current.weather.length && current.weather[0].icon &&
				<img className={styles.current__icon} loading='lazy' src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="weather" data-testid="image"></img>
			}
			<h3 className={styles.current__description} data-testid="description">{current && current.weather && current.weather.length ? current.weather[0].description : '-'}</h3>
		</div>

		<h1 data-testid="temp">{current && current.main && current.main.temp ? current.main.temp : '-'} &#176;C</h1>

		<div className={styles.current__condition}>
			<p data-testid="speed">Wind: {current && current.wind && current.wind.speed ? current.wind.speed : '-'} m/s</p>
			<p data-testid="sunrise">Sunrise: {current && current.sys && current.sys.sunrise ? unixFormatter(current.sys.sunrise,'HH:MM') : '-'} AM</p>
			<p data-testid="sunset">Sunset: {current && current.sys && current.sys.sunset ? unixFormatter(current.sys.sunset,'HH:MM') : '-'} PM</p>
		</div>

	</div>

)

export default CurrentWeather