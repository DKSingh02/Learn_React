import React, { Component } from 'react';

export default class GreetingFromClassComponent extends Component {
  render() {
    const { name, isLoggedIn } = this.props;
    console.log(isLoggedIn);

    if (isLoggedIn) {
      return <p>Welcome back, {name}!</p>;
    } else {
      return <p>Welcome to guest user!</p>;
    }
  }
}
