import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeatherAction } from '../../reducers/weatherState';
import styles from './style.scss';

const OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=3e5b01c2455f771e43d2decf6e99d6fe';

const mapStateToProps = state => ({
    weather: state.weatherState.weather,
});

const mapDispatchToProps = dispatch => ({
    setWeather: weather => dispatch(setWeatherAction(weather)),
});

export class WeatherCard extends Component {
    componentWillMount() {
        const url = 'https://freegeoip.net/json/';
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                const fetchurl = `${OPENWEATHER_URL}&lat=${result.latitude}&lon=${result.longitude}`;
                fetch(fetchurl)
                    .then(response => response.json())
                    .then((resultweather) => {
                        this.props.setWeather(resultweather);
                    });
            });
    }

    iconUrl() {
        return `http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`;
    }

    temp() {
        return Math.floor(this.props.weather.main.temp - 273.15);
    }

    renderWeather() {
        return (
            <div className={styles.weather}>
                <div className={styles.location}>
                    <div className={styles.city}>
                        {this.props.weather.name}, {this.props.weather.sys.country}
                    </div>
                    <div className={styles.weatherDesc}>
                        {this.props.weather.weather[0].description}
                    </div>
                    <span className={styles.weatherIcon}>
                        <img src={this.iconUrl()} alt="icon" />
                    </span>
                    <span className={styles.temp}>
                        {this.temp()} &#8451;
                    </span>
                </div>
                <div className={styles.weatherInfo}>
                    <div className={styles.humidity}>
                        Humidity: {this.props.weather.main.humidity}%
                    </div>
                    <div className={styles.wind}>
                        Wind: {this.props.weather.wind.speed} km/h
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (!this.props.weather) {
            return (
                <div> Loading ... </div>
            );
        }

        return (
            <div className={styles.weatherCard}>
                {this.renderWeather()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
