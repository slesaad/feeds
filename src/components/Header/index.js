import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPageAction } from '../../reducers/uiState';
import styles from './style.scss';

const mapDispatchToProps = dispatch => ({
    setCurrentPage: currentPage => dispatch(setCurrentPageAction(currentPage)),
});


class Header extends Component {
    handleSettingsClick = () => {
        this.props.setCurrentPage('settings');
    }

    render() {
        return (
            <div className={styles.header}>
                <h1> Hi, beautiful ! </h1>
                <p>
                    FEEDS
                </p>
                <button onClick={this.handleSettingsClick}>
                    <span className="icon ion-settings" />
                </button>
            </div>
        );
    }
}

export default connect(undefined, mapDispatchToProps)(Header);
