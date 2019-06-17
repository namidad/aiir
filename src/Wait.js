import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import Particles from 'react-particles-js'

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
  



export class Wait extends Component {

    componentDidMount(){
        this.inter = setInterval(()=>{
        axios.get('http://localhost:4000/getScore').then((res)=>{
            if(res.data[0].score.length>0){
                clearInterval(this.inter);
                this.props.parentMethod2();
            }
        });
                },1000)
    }

    componentWillUnmount(){
        clearInterval(this.inter);
    }

    render() {
        return (
            <div className="spinnerLoader">
                <Particles params={particleOptions} style={{position: "absolute", zIndex: "-1", height:"100vh"}}/>
                <div className="loader">
                <Loader 
                    type="Circles"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                />   
                </div>
                
            </div>
        )
    }
}

export default Wait
