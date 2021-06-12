
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from '../../components/loader/Loader';
import Search from '../../components/search/Search';
import CurrentWeather from '../../components/current/Current';
import DailyWeather from '../../components/daily/Daily';
import logo from '../../images/logo.png'

import styles from "./Weather.module.css";

import {
    fetchCurrentWeather,
    fetchWeatherForecast,
    weatherAction
} from "./weatherSlice";

const Weather = () => {

	const [city,setCity] = useState('Yangon')
    const {current,loading,error,forecast} = useSelector(state => state.weather)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
        .then(res => {
            const {coord} = res.payload.data
            dispatch(fetchWeatherForecast(coord))
        })
        .catch(err => {
            dispatch(weatherAction.setError(true))
        })
     }, [dispatch]);

    const onCityChanged = (e) => {
        setCity(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchCurrentWeather(city))
        .then(res => {
            const {coord} = res.payload.data
            dispatch(fetchWeatherForecast(coord))
        })
        .catch(err => {
            dispatch(weatherAction.setError(true))
        })
    }
    
    // Weather Forecast for next 5 days
    const showForecastWeather = () => (
        <div className={styles.forecast__container}>
            {
                forecast.map((item,index) => (
                    <DailyWeather 
                        item={item} 
                        key={index}
                    >
                    </DailyWeather>
                ))
            }
        </div>
    )

	return (
		<div className={styles.background}>  
           <div className={styles.container}>

                <img src={logo} alt="open weather" className={styles.logo}></img>
                <Search city={city} onCityChanged={onCityChanged} onSubmit={onSubmit}></Search>
                
                {
                    loading ? 
                    <Loader></Loader> : 
                    <div className={styles.weatherCard}>
                        {
                            current && !error &&
                            (
                                <>
                                    <h2>{current.name} / {current.sys.country}</h2>
                                    <CurrentWeather current={current}></CurrentWeather>
                                </>
                            )
                        }
                        {
                            forecast && !error &&
                            showForecastWeather()
                        }
                        {
                            error &&
                            <div>City Not Found</div>
                        }
                    </div>
                }

           </div>
        </div>
	)
}

export default Weather