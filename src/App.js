import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './App.scss';
import Dashboard from './views/Dashboard/index';
import Settings from './views/Settings/index';


const mapStateToProps = state => ({
    currentPage: state.uiState.currentPage,
});


class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                {this.props.currentPage === 'dashboard' && <Dashboard />}
                {this.props.currentPage === 'settings' && <Settings />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
