import React, { Component } from 'react'

export default class WelcomeClassComponent extends Component {
  render() {
    return <h1>Welcome {this.props.firstName} {this.props.lastName} for react learning!</h1>
  }
}
