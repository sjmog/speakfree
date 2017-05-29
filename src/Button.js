import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: props.head
    }
  }

  onClick = () => {
    this.props.onClick(this.state.head);
  }

  render() {
    return (
      <button className="Button" onClick={ this.onClick }></button>
    );
  }
}

export default Button;
