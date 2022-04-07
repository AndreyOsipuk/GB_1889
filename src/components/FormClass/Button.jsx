import React, { PureComponent } from 'react';

export class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      count: this.props.count,
    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   console.log(1)
    // }, 1000)
    // console.log(this.props)
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.count < 5) {
      return { count: nextProps.count };
    }
    return null;
  }

  componentDidUpdate(props, state, snapshot) {
    console.log(props, state, snapshot);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.name !== this.props.name) {
  //     return true
  //   }

  //   return false
  // }

  componentWillUnmount() {
    // clearInterval(this.interval)
  }

  getSnapshotBeforeUpdate() {
    return { value: 999 };
  }

  render() {
    // return <button onClick={this.props.click}>{this.props.name}</button>
    return (
      <>
        {/* <br /> */}
        {/* <h2>Child component</h2>
      <p>state {this.state.count}</p>
      <p>props {this.props.count}</p> */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </>
    );
  }
}
