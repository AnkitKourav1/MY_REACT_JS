
import React, { Component } from 'react';

class InputChangeDemo extends Component {
  // State to hold input value
  state = {
    inputValue: '',
  };

  // Event handler for input change
  handleChange = (event) => {
    // Using synthetic event to get the input value
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Event Handling Demo</h1>
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputChangeDemo;
