import React, { Component } from 'react'
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
export class Result extends Component {

    state = {
        arr: [],
    }

    componentWillMount () {
        setTimeout(()=>{
            axios.get('http://localhost:4000/getScore').then((res)=>{
                console.log(res);
                this.setState({
                    arr: res.data[0].score
                })
            });
        },2000)

        
    }

    render() {

        if(this.state.arr.length>0){
            const arr = this.state.arr.map((el)=>{
                return <p>{el}</p>
            });
            return (
                <div className="starWars">
                                    <Particles params={particleOptions} style={{position: "absolute", zIndex: "-1", height:"100vh"}}/>

                    <div className="star">
                            <div style={divStyle}>
                            </div>
                          </div>
                                                                  
                          <div id="titles">
                            <div id="titlecontent">
                              <p className="center">PROJEKT<br />
                                AIIR</p>
                                {arr}
                              </div>
                          </div>            
               </div>
            )
        } else {
            return null;
        }
        
    }
}

const divStyle = {
    marginTop: "-290px"
  };

export default Result
