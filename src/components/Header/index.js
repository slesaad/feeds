import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPageAction } from '../../reducers/uiState';
import styles from './style.scss';

const mapStateToProps = state => ({
    name: state.googleAuthState.name,
});

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
                <h1> Hi, Stranger!</h1>
                <p>
                    feeds
                </p>
                <button onClick={this.handleSettingsClick}>
                    <span className="icon ion-android-settings" />
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
