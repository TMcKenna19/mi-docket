import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";




const WeatherApi = () => {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        axios.get("")
        .then(response => {
            console.log(response.data)
        })
    });    

    return (
        <>
        <p>Current Weather</p>
        </>
    );
};

export default WeatherApi;