import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      primaryValue: '',
      secondaryValue: '',
      displayFlag: true
    };

    this.handleClick = this.handleClick.bind(this)
  }

  setValue(event){
    console.log(this.state.displayFlag)
    if(this.state.displayFlag === true){
      const value = this.state.primaryValue+event.target.value 
      this.setState({
        primaryValue: value
      })
    }

    if(this.state.displayFlag === false){
      const value = this.state.secondaryValue+event.target.value 
      this.setState({
        secondaryValue: value
      })
    } 
  }

  handleClick(event) {
    if(event.target.value === "+" || "-" || "*" || "/"){
      this.setState({
        displayFlag: false
      })
      const primary = parseInt(this.state.primaryValue)
    }

    setTimeout(this.setValue(event),300)  
  }

  render() {
    return (
      <div className="App">
        <div className="container p-2">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input disabled className="form-control" id="display" value={this.state.displayFlag === true ? this.state.primaryValue : this.state.secondaryValue}/>
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