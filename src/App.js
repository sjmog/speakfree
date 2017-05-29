import React, { Component } from 'react';
import './App.css';
import Button from './Button.js'

const headStops = ["a", "g", "n", "t", "z", "5"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointer: ""
    }
  }

  setHead = (head) => {
    this.setState({ pointer: head })
  };

  render() {
    const buttons = headStops.map((head) => {
      return <Button key={head} head={head} onClick={this.setHead} />
    });
    const display = <div className="Display">{this.state.pointer}</div>

    return(
      <div className="App">
        {buttons}
        {display}
      </div>
    );
  }
}

export default App;
