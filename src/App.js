import React, { Component } from 'react';
import './App.css';
import Button from './Bilesen/Button';
import Input from './Bilesen/Input';
import { evaluate } from 'mathjs';
import { thisExpression } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });

  }
  
  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) }); 
  }

  handleMultiply = val => {
    if (val === "x") {
      this.setState({ input: this.state.input + val.replace("x", "*") });
    } 
    else {
      this.setState({ input: this.state.input + val });
    }
  }

  isOperator = val => {
    return !isNaN(val) && (val === "-" || val === "+" || val === "x" || val === "/");
  };
  render() {
    return (
      <div className="App">

        <div className="calc-for">
          <div className="content">
            <Input displayInput={this.state.input} />
          </div>
          <div className="content">
            <Button handleClick={this.addToInput} value="7"></Button>
            <Button handleClick={this.addToInput} value="8"></Button>
            <Button handleClick={this.addToInput} value="9"></Button>
            <Button handleClick={this.handleMultiply} value="/"></Button>
          </div>
          <div className="content">
            <Button handleClick={this.addToInput} value="4"></Button>
            <Button handleClick={this.addToInput} value="5"></Button>
            <Button handleClick={this.addToInput} value={6}></Button>
            <Button handleClick={this.handleMultiply} value={"x"}></Button>
          </div>
          <div className="content">
            <Button handleClick={this.addToInput} value="1"></Button>
            <Button handleClick={this.addToInput} value="2"></Button>
            <Button handleClick={this.addToInput} value={"3"}></Button>
            <Button handleClick={this.handleMultiply} value={"+"}></Button>
          </div>
          <div className="content">
            <Button handleClick={this.addToInput} value="0"></Button>
            <Button handleClick={this.handleEqual} value="="></Button>
            <Button handleClick={this.handleMultiply} value={"-"}></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
