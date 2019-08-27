import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary';

class Wall extends Component{
  render(){
    return (
        <Aux>
        <div id="grid-item"><img src={require('./mansory.png')}></img></div>
        </Aux>
    )
  }
}

class Floor extends Component{
  render(){
    return (
      <div id="grid-item"><img src={require('./draws.png')}></img></div>
    )
  }
}

class Grid extends Component{
  // state={
  //   rowsArr:[]
  // };
  render(){
    var rowsArr = []
    for(var i=0;i<this.props.row ;i++){
      for(var j=0;j<this.props.col;j++){
        //boxClass = i + "_" + j;
        if(i===0 || i===this.props.row-1){
          rowsArr.push(
            <Wall 
            row={i}
            col={j}
            />
          )
        }
        else if(j===0 || j===this.props.col-1){
          rowsArr.push(
            <Wall 
            row={i}
            col={j}
            />
          )
        }
        else{
          rowsArr.push(
            <Floor 
            row={i}
            col={j}
            />
          )
        }
      }
    }
    return(
      <div id="grid-container">
      {rowsArr}
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      row: 10,
      col: 10
    };
  }
  render() {
    return (
      <div class="main">
        <h1>Treasure Island</h1>
        <Grid 
        row={this.state.row}
        col={this.state.col}
        />
      </div>
    )
  }
}

export default App;
