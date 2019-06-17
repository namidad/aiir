import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './App.css';
import Form from './Form'


const particleOptions = {
  particles: {
      number: {
          value: 50,
          density: {
              enable: true,
              value_area: 600,
          }
      }
  }

};

class Container extends Component {
    handleChange = () => {
        this.props.parentMethod();
    }

    render(){
        return (
            <div>
              <Particles params={particleOptions} style={{position: "absolute", zIndex: "-1", height:"100vh"}}/>
              <Form parentMethod={this.handleChange}/>
            </div>
          );
    }

  
}

export default Container;
