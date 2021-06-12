import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
    `${sliceName}/fetchCurrentWeather`,
    (city) => weatherAPI.fetchCurrentWeather({ query: city })
);

export const fetchWeatherForecast = createAsyncThunk(
    `${sliceName}/fetchWeatherForecast`,
    ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
    name: sliceName,
    initialState: {
        current: null,
        forecast: null,
        loading: true,
        error: null,
    },
    reducers: {
        setCurrent: (state,action) => {
            state.current = action.payload
        },
        setError: (state,action) => {
            state.error = action.payload
        }
    },
    extraReducers: {
        [fetchCurrentWeather.pending]: (state, { payload, meta }) => {
            state.loading = true;
        },
        [fetchCurrentWeather.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.error = null;
            state.current = payload.data;
        },
        [fetchCurrentWeather.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
        },
        [fetchWeatherForecast.pending]: (state, { payload, meta }) => {
            state.loading = true;
        },
        [fetchWeatherForecast.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            //Remove today and show only next 5 forecast
            state.forecast = payload.data.daily.filter((item,index) => index > 0 && index < 6);
        },
        [fetchWeatherForecast.rejected]: (state, { error, meta }) => {
            state.loading = false;
        },
    },
});

export const  { actions: weatherAction, reducer: weatherReducer } = weatherSlice

export default weatherSlice.reducer;