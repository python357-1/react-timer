import React, { Component } from 'react'

import Header from './Header';
import Timer from './Timer';

class App extends Component {
	state = {
		highScore: 0,
		seconds: 0,
		minutes: 0,
		hours: 0
	}

	resetScore = () => {
		this.setState({ seconds: 10, minutes: 10, hours: 10 });
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<Header />
				<Timer seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
			</div>
		)
	}
}

export default App;