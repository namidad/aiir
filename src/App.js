import React, { Component } from 'react'
import './App.css';
import Container from './Container'
import Result from './Result'
import Wait from './Wait'

class App extends Component  {

  state = {
    container: true,
    wait: false,
    result: false
  }

  changeContainer = () => {
    this.setState({
      container: false,
      wait: true,
    })
  }

  changeWait = () => {
    this.setState({
      wait: false,
      result: true,
    })
  }


  render(){
  if(this.state.container){
    return ( <Container parentMethod={this.changeContainer}/> );
  } else if (this.state.wait){
    return ( <Wait parentMethod2={this.changeWait}/> );
  } else  {
    return ( <Result/> );
  }
    
  }
  
}

export default App;
