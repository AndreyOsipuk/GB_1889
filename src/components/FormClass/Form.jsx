import React, { Component } from 'react';
// import { Input } from './Input';
import { Button } from './Button';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      name: 'click',
      value: '',
      messages: [],
      visible: true,
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: '' });
  };

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value,
    });
  };

  componentDidMount() {
    console.log('form did mount');
    this.myRef.current.focus();
  }

  componentDidUpdate() {
    console.log('form did update');
  }

  render() {
    return (
      <>
        {/* {this.state.visible && <ul>
        {this.state.messages.map(message =>
          <li>{message}</li>
        )}
      </ul>} */}
        <input type="text" ref={this.myRef} />
        {/* <Input change={this.handleChange} value={this.state.value} /> */}
        {/* <Button name={this.state.name} click={this.handleClick} value={this.state.count}/> */}
        <br />
        <h2>Parent component</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>

        <Button
          name={this.state.name}
          click={this.handleClick}
          count={this.state.count}
        />
        {/* <br />
      <button onClick={() => this.setState({ visible: !this.state.visible })}>
        {this.state.visible ? 'hide' : 'show'}
      </button> */}
      </>
    );
  }
}
