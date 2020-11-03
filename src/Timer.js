import React, { Component } from 'react'

import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: this.props.seconds,
            minutes: this.props.minutes,
            hours: this.props.hours,
            highScoreSeconds: 0,
            highScoreMinutes: 0,
            highScoreHours: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    resetTime = () => {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
        })
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        })

        if (this.state.seconds >= 59) {
            this.setState({seconds: 0})
            this.setState({minutes: this.state.minutes + 1});
        }
        
        if (this.state.minutes >= 59) {
            this.setState({ minutes: 0 })
            this.setState({ hours: this.state.hours + 1 });
        }

        if (this.state.seconds >= this.state.highScoreSeconds) {
            this.setState({ highScoreSeconds: this.state.seconds });
        }

        if (this.state.minutes >= this.state.highScoreMinutes) {
            this.setState({ highScoreMinutes: this.state.minutes });
        }

        if (this.state.hours >= this.state.highScoreHours) {
            this.setState({ highScoreHours: this.state.hours });
        }
    }

    render() {
        return (
            <div>
                <p> {this.state.hours.toString().padStart(2, "0")}:{this.state.minutes.toString().padStart(2, "0")}:{this.state.seconds.toString().padStart(2, "0")} </p>
                    <button onClick={this.resetTime} style={{color: 'red', fontSize: '75px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}> RESET </button>
                    <p>High Score: {this.state.highScoreHours.toString().padStart(2, "0")}:{this.state.highScoreMinutes.toString().padStart(2, "0")}:{this.state.highScoreSeconds.toString().padStart(2, "0")}</p>
                
            </div>
        )
    }
}
