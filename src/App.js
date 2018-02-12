import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPI } from 'react-google-oauth';
import { setGoogleAuthAction } from './reducers/googleAuthState';

import styles from './App.scss';
import Dashboard from './views/Dashboard/index';
import Settings from './views/Settings/index';


const mapStateToProps = state => ({
    loggedIn: state.googleAuthState.loggedIn,
    currentPage: state.uiState.currentPage,
});

const mapDispatchToProps = dispatch => ({
    setGoogleAuth: loggedIn => dispatch(setGoogleAuthAction(loggedIn)),
});

class App extends Component {
    handleLogin = (signIn) => {
        console.log(signIn);
        this.props.setGoogleAuth(signIn);
    }

    handleFailure = (error) => {
        console.error(error);
    }

    render() {
        return (
            <GoogleAPI
                clientId="278605753232-ekp73eni3h1evth0idun4ia7h2djjljj.apps.googleusercontent.com"
                onUpdateSigninStatus={this.handleLogin}
                onInitFailure={this.handleFailure}
            >
                <div className={styles.app}>
                    {this.props.currentPage === 'dashboard' && <Dashboard />}
                    {this.props.currentPage === 'settings' && <Settings />}
                </div>
            </GoogleAPI>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
