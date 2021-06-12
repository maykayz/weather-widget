import React from 'react'
import {unixFormatter} from '../../utils/utils'
import styles from './Daily.module.css'

const DailyWeather = ({item}) => (

	<div className={styles.forecast__daily}>

		<p data-testid="datetime">{item && item.dt ? unixFormatter(item.dt,'ddd') : '-'}</p>

		{
			item && item.weather && item.weather.length && 
			<img className={styles.forecast__icon} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" data-testid="image"></img>
		}
		
		<p data-testid="temp">{item && item.temp && item.temp.day ? item.temp.day : '-'} &#176;C</p>

	</div>

)

export default DailyWeather