import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPageAction } from '../../reducers/uiState';
import styles from './style.scss';


const mapDispatchToProps = dispatch => ({
    setCurrentPage: currentPage => dispatch(setCurrentPageAction(currentPage)),
});

class Settings extends Component {
    handleCrossClick = () => {
        this.props.setCurrentPage('dashboard');
    }

    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.container}>
                    <div className={styles.loginFacebook}>
                        <button type="button">
                            <span className="icon ion-social-facebook" />
                                Login to Facebook
                        </button>
                    </div>
                    <div className={styles.loginTwitter}>
                        <button type="button">
                            <span className="icon ion-social-twitter" />
                                Login to Twitter
                        </button>
                    </div>
                    <div className={styles.cross}>
                        <button type="button" onClick={this.handleCrossClick}>
                            <span className="icon ion-close" />
                        </button>
                    </div>
                </div>
                <div className={styles.about}>
                    <p> Feeds - Get feeds from multiple website in a single page.</p>
                    <p> Follow on:
                        <a href="http://www.facebook.com/feeds" ><span className="icon ion-social-facebook" /></a>
                        <a href="http://www.twitter.com/feeds" ><span className="icon ion-social-twitter" /></a>
                        <a href="http://www.instagram.com/feeds" ><span className="icon ion-social-instagram" /></a>
                    </p>
                    <p> Copyright. Feeds. 2018 </p>
                </div>
            </div>
        );
    }
}

export default connect(undefined, mapDispatchToProps)(Settings);
