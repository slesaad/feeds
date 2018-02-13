import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setEventsAction } from '../../reducers/newsState';

import styles from './style.scss';

const mapStateToProps = state => ({
    loggedIn: state.googleAuthState.loggedIn,
    events: state.newsState.events,
});

const mapDispatchToProps = dispatch => ({
    setEvents: events => dispatch(setEventsAction(events)),
});

class TwitterCard extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            window.gapi.client.request('calendar/v3/calendars/primary/events')
                .then((r) => {
                    this.props.setEvents(r.result.items);
                });
        }
    }

    render() {
        if (!this.props.events) {
            return (
                <div className={styles.twitterCard}> Loading.. </div>
            );
        }
        console.log(this.props.events);
        return (
            <div className={styles.twitterCard}>
                <div className={styles.title}>
                    Upcoming events
                </div>
                {this.props.events.map(event => (
                    <div key={event.id}>
                        <div className={styles.summary}>
                            {event.summary}
                        </div>
                        <div className={styles.date}>
                            {event.start.date || event.start.dateTime},
                            {event.end.date || event.end.dateTime}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterCard);
