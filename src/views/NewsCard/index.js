import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNewsAction } from '../../reducers/newsState';
import styles from './style.scss';

const API_KEY = '1806360f7e0142ad9e44cd89d5fc9cc9';

const mapStateToProps = state => ({
    ...state,
    weather: state.newsState.news,
});

const mapDispatchToProps = dispatch => ({
    setNews: news => dispatch(setNewsAction(news)),
});

const news = {
    status: 'ok',
    totalResults: 2,
    articles: [
        {
            source: {
                id: 'bloomberg',
                name: 'Bloomberg',
            },
            author: 'Andreea Papuc',
            title: 'Traders Brace for More Turmoil After Recent Rout: Markets Wrap',
            description: 'Investors got a reprieve from the recent turmoil with Asian stocks recovering from their worst weekly rout since 2011 as volatility swept global markets. The dollar declined against most major peers.',
            url: 'https://www.bloomberg.com/news/articles/2018-02-11/traders-brace-for-more-turmoil-after-recent-rout-markets-wrap',
            urlToImage: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/il3C4o9GkPBU/v0/1200x800.jpg',
            publishedAt: '2018-02-12T02:04:08Z',
        },
        {
            source: {
                id: 'the-wall-street-journal',
                name: 'The Wall Street Journal',
            },
            author: null,
            title: 'Takata Settles With Drivers Injured by Air Bags, Plans to Exit Bankruptcy',
            description: null,
            url: 'https://www.wsj.com/articles/takata-settles-with-drivers-injured-by-air-bags-plans-to-exit-bankruptcy-1518400369',
            urlToImage: null,
            publishedAt: '2018-02-12T01:53:18Z',
        }],
};

const newsRender = (
    <div className={styles.newsArticles}>
        <div className={styles.title}>
            <a href={news.articles[0].url}>
                {news.articles[0].title}
            </a>
        </div>
        <div className={styles.desc}>
            {news.articles[0].description}
        </div>
        <div className={styles.published}>
            <span>{news.articles[0].source.name}, </span>
            <span>{news.articles[0].publishedAt} </span>
        </div>
    </div>
);

export class NewsCard extends Component {
    componentWillMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        fetch(url, { crossdomain: true })
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.props.setNews(result);
            });
    }

    render() {
        return (
            <div className={styles.newsCard}>
                {newsRender}
                {newsRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
