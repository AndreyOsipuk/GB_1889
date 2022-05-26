import React, { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.change}
      />
    );
  }
}
