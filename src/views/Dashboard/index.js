import React, { Component } from 'react';
import WeatherCard from '../WeatherCard';
import FacebookCard from '../FacebookCard';
import TwitterCard from '../TwitterCard';
import NewsCard from '../NewsCard';
import Header from '../../components/Header';
import styles from './style.scss';


export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <Header />
                <div className={styles.cards}>
                    <div className={styles.firstColumn}>
                        <WeatherCard />
                        <TwitterCard />
                    </div>
                    <NewsCard />
                </div>
            </div>
        );
    }
}
