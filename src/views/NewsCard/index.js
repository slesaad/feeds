import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNewsAction } from '../../reducers/newsState';
import styles from './style.scss';

const API_KEY = '1806360f7e0142ad9e44cd89d5fc9cc9';

const mapStateToProps = state => ({
    news: state.newsState.news,
});

const mapDispatchToProps = dispatch => ({
    setNews: news => dispatch(setNewsAction(news)),
});

export class NewsCard extends Component {
    componentWillMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        fetch(url, { crossdomain: true })
            .then(response => response.json())
            .then((result) => {
                if (result.status === 'ok') {
                    const articles = result.articles.map((article, index) => ({
                        ...article,
                        key: `new-article-${index}`,
                    }));
                    this.props.setNews(articles);
                }
            });
    }

    renderNews() {
        return (
            <div>
                {this.props.news.map(article => (
                    <div key={article.key} className={styles.newsArticles}>
                        <div className={styles.title}>
                            <a href={article.url}>
                                {article.title}
                            </a>
                        </div>
                        <div className={styles.desc}>
                            {article.description}
                        </div>
                        <div className={styles.published}>
                            <span>{article.source.name}, </span>
                            <span>{article.publishedAt} </span>
                        </div>
                        <div className={styles.hr} />
                    </div>
                ))}
            </div>
        );
    }

    render() {
        if (!this.props.news) {
            return (
                <div> Loading .. </div>
            );
        }
        return (
            <div className={styles.newsCard}>
                {this.renderNews()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
