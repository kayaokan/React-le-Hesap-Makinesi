import React, { Component } from "react";
import './Button.css';

class Button extends Component {

  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=" || val === "";
  };

  render() {
    return( 
      <div 
        className={`Button ${this.isOperator(this.props.value) ? "" : "operator"}`}
        onClick={() => this.props.handleClick && this.props.handleClick(this.props.value)}

      >
        {this.props.value}
      </div>
    )
  }
}

export default Button;
