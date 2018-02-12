import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeatherAction } from '../../reducers/weatherState';
import styles from './style.scss';

const OPENWEATHER_URL = 'api.openweathermap.org/data/2.5/weather?appid=3e5b01c2455f771e43d2decf6e99d6fe';

const mapStateToProps = state => ({
    ...state,
    weather: state.weatherState.weather,
});

const mapDispatchToProps = dispatch => ({
    setWeather: weather => dispatch(setWeatherAction(weather)),
});

const w = {
    coord: {
        lon: 139.01,
        lat: 35.02,
    },
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
        },
    ],
    base: 'stations',
    main: {
        temp: 285.514,
        pressure: 1013.75,
        humidity: 100,
        temp_min: 285.514,
        temp_max: 285.514,
        sea_level: 1023.22,
        grnd_level: 1013.75,
    },
    wind: {
        speed: 5.52,
        deg: 311,
    },
    clouds: {
        all: 0,
    },
    dt: 1485792967,
    sys: {
        message: 0.0025,
        country: 'JP',
        sunrise: 1485726240,
        sunset: 1485763863,
    },
    id: 1907296,
    name: 'Tawarano',
    cod: 200,
};

const iconUrl = `http://openweathermap.org/img/w/${w.weather[0].icon}.png`;


const weather = (
    <div className={styles.weather}>
        <div className={styles.location}>
            <div className={styles.city}>
                {w.name}, {w.sys.country}
            </div>
            <div className={styles.weatherDesc}>
                {w.weather[0].description}
            </div>
            <span className={styles.weatherIcon}>
                <img src={iconUrl} alt="icon" />
            </span>
            <span className={styles.temp}>
                {w.main.temp} &#8451;
            </span>
        </div>
        <div className={styles.weatherInfo}>
            <div className={styles.humidity}>
                Humidity: {w.main.humidity}%
            </div>
            <div className={styles.wind}>
                Wind: {w.wind.speed} km/h
            </div>
        </div>
    </div>
);

export class WeatherCard extends Component {
    componentWillMount() {
        const url = 'https://freegeoip.net/json/';
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                const fetchurl = ` ${OPENWEATHER_URL}&lat=${result.latitude}&lon=${result.longitude}`;
                fetch(fetchurl)
                    .then(response => response.json())
                    .then((resultweather) => {
                        this.props.setWeather(resultweather);
                        console.log(resultweather);
                    });
            });
    }

    render() {
        return (
            <div className={styles.weatherCard}>
                {weather}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
