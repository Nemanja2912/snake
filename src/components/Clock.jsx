import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date(),
  };

  handeUpdateClock = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.handeUpdateClock();
    }, 1000);
  }

  render() {
    let time = this.state.time;

    return <h1>{time.toLocaleTimeString()}</h1>;
  }
}

export default Clock;
