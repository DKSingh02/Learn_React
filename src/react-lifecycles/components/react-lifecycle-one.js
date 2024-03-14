import React, { Component } from 'react'

export default class LifecycleOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Diwakar'
		}
		console.log('Lifecycle One constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle One getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('Lifecycle One componentDidMount')
	}

	// shouldComponentUpdate() {
	// 	console.log('Lifecycle One shouldComponentUpdate')
	// 	return true
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('Lifecycle One getSnapshotBeforeUpdate')
    // return null
	// }

	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	console.log('Lifecycle One componentDidUpdate')
	// }

	changeState = () => {
		this.setState({
			name: 'Web Developer'
		})
	}

	render() {
		console.log('Lifecycle One render')
		return (
			<div>
				<button onClick={this.changeState}>Change state</button>
			</div>
		)
	}
}
