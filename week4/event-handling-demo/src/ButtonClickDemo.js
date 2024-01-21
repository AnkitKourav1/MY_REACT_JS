
import React, { Component } from 'react';

class ButtonClickDemo extends Component {
  // Event handler function using arrow function
  handleClick = () => {
    alert('Button Clicked!');
  };

  render() {
    return (
      <div>
        <h1>Event Handling Demo</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ButtonClickDemo;
