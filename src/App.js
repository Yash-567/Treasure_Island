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
class Chest extends Component{
  render(){
    return(
      <div id="grid-item"><img src={require('./chest.png')}></img></div>
    )
  }
}
class Bug extends Component{
  render(){
    return(
      <div id="grid-item"><img src={require('./Bug.png')}></img></div>
    )
  }
}
class Grid extends Component{
  constructor(){
    super();
    this.state={
      rowsArr:[]
    };
  }
  componentWillMount(){
    this.new();
    // this.state.rowsArr.splice(24,1,<Bug />)
    // setInterval(()=>{
    //   var temp = Math.floor(Math.random*80+9);
    //   this.state.rowsArr.splice(15,1,<Bug />)
    // },1000)
  }
  move=()=>{
    // setInterval(()=>{
    //   var temp = Math.floor(Math.random*80+9);
    //   this.state.rowsArr.splice(temp,1,<Bug />)
    // },1000)
    setInterval(()=>{
      var temp = Math.floor(Math.random*80+9);
    //   this.setState((prevState,props)=>{
    //   return {
    //     rowsArr: prevState.rowsArr.splice(temp,1,<Bug />)
    //   };
    // })
  },1000)
  }
  random=()=>{
    //console.log(this.state.rowsArr[0].type);
    
  }
  new=()=>{
    for(var i=0;i<this.props.row ;i++){
      for(var j=0;j<this.props.col;j++){
        //boxClass = i + "_" + j;
        if(i===0 || i===this.props.row-1){
          this.state.rowsArr.push(
            <Wall 
            row={i}
            col={j}
            />
          )
        }
        else if(j===0 || j===this.props.col-1){
          this.state.rowsArr.push(
            <Wall 
            row={i}
            col={j}
            />
          )
        }
        else{
          this.state.rowsArr.push(
            <Floor 
            row={i}
            col={j}
            />
          )
        }
      }
    }
    //var x = [20,24,35,123,37,94,93,58,48,72];
    for(var t=0;t<25;t++){
      //this.state.rowsArr.splice(x[t],1,<Chest/>)
      var x = Math.floor(Math.random()*360+19)
      if(this.state.rowsArr[x].type!==Wall){
        this.state.rowsArr.splice(x,1,<Chest/>)
      }
    }
  }
  render(){
    return(
      <Aux>
        <div id="grid-container">
        {this.state.rowsArr}
        </div>
        <button onClick={()=>{this.random()}}>New</button>
        <button onClick={()=>this.move()}>Start</button>
      </Aux>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.row = 20;
    this.col = 20;
    this.state={
      gridFull: Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
    };
  }
  render() {
    return (
      <div className="main">
        <h1>Treasure Island</h1>
        <Grid 
        row={this.row}
        col={this.col}
        />
      </div>
    )
  }
}

export default App;
