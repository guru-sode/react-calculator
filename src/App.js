import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:'',
    };

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event) {
    if(this.state.equalsFlag){
      this.setState({
        value: '',
        primaryValue: '',
        equalsFlag: false
      })
    }
    if(event.target.value === "+" || event.target.value === "-" || event.target.value === "*" || event.target.value === "/"){
      const primaryValue = parseInt(this.state.value)
      this.setState({
        primaryValue,
        clearFlag: true,
        operation: event.target.value
      })
    }
    else{
      if(this.state.clearFlag){
        this.setState({
          clearFlag: false,
          value: event.target.value
        })
      }
      else{
        if(event.target.value === "="){
          const secondaryValue = parseInt(this.state.value)
          if(this.state.operation === "+"){
            this.setState({
              value: this.state.primaryValue+secondaryValue
            })
          }
          if(this.state.operation === "-"){
            this.setState({
              value: this.state.primaryValue-secondaryValue
            })
          }
          if(this.state.operation === "*"){
            this.setState({
              value: this.state.primaryValue*secondaryValue
            })
          }
          if(this.state.operation === "/"){
            this.setState({
              value: this.state.primaryValue/secondaryValue
            })
          }
          this.setState({
            primaryValue: '',
            equalsFlag: true
          })
        }
        else{
          const value = this.state.value+event.target.value 
          this.setState({
            value
          })
        }
      }
    } 
  }

  render() {
    return (
      <div className="App">
        <div className="container p-2">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input disabled className="form-control" id="display" value={this.state.value}/>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 p-2 border border-dark" >
              <button className="btn border-0" value="1" onClick={this.handleClick}>1</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="2" onClick={this.handleClick}>2</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="3" onClick={this.handleClick}>3</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="+" onClick={this.handleClick}>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="4" onClick={this.handleClick}>4</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="5" onClick={this.handleClick}>5</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="6" onClick={this.handleClick}>6</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="-" onClick={this.handleClick}>-</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="7" onClick={this.handleClick}>7</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="8" onClick={this.handleClick}>8</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="9" onClick={this.handleClick}>9</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="*" onClick={this.handleClick}>x</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="0" onClick={this.handleClick}>0</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="." onClick={this.handleClick}>.</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="=" onClick={this.handleClick}>=</button>
            </div>
            <div className="col-md-2 p-2 border border-dark">
              <button className="btn border-0" value="/" onClick={this.handleClick}>/</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}