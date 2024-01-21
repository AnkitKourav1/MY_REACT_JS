// src/LifecycleDemo.js

import React, { Component } from 'react';

class LifecycleDemo extends Component {
  // Mounting Phase - Constructor
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {
      message: 'Hello, React!',
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // Updating Phase - shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // Updating Phase - componentWillUpdate (Deprecated)
  // Avoid using componentWillUpdate, consider using componentDidUpdate instead.
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate');
  // }

  // Updating Phase - componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  // Unmounting Phase - componentWillUnmount
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Handle state change for demonstration
  changeMessage = () => {
    this.setState({
      message: 'Updated message!',
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>Component Lifecycle Demo</h1>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleDemo;
