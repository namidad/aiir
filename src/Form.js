import React, { Component } from 'react'
import {Message } from 'semantic-ui-react'
import axios from 'axios'


class Form extends Component {
    state = {
        inputValue: '',
        numberOfComputers: '',
        amountOfGeneration: '',
        error: false,
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.inputValue)>0 && parseInt(this.state.numberOfComputers)>0 && parseInt(this.state.amountOfGeneration)>0){
            const body = {
                id: "5d01522fb900980f33453d6f",
                size: parseInt(this.state.inputValue),
                sizeId: 0,
                numberOfComputers: parseInt(this.state.numberOfComputers),
                amountOfGeneration: parseInt(this.state.amountOfGeneration)
            }
            this.setState({
                error: false,
            })
            axios.post('http://localhost:4000/setScore', body).then((res)=>{
                axios.post('http://localhost:4000/set-size', body).then((res)=>{
                this.props.parentMethod();
            });
            });
            
        } else {
            this.setState({
                error: true,
            })
        }

    }
    handleInputChange = (e) => {
            this.setState({
                inputValue: e.target.value
            })
    }

    handleNumberChange = (e) => {
        this.setState({
            numberOfComputers: e.target.value
        })
    }

    handleAmountOfGenerationChange = (e) => {
        this.setState({
            amountOfGeneration: e.target.value
        })
    }

    render() {
        return (
            <div className={"mainContainer"}>
                <div className="form-style-6">
                    <h1>Insert data</h1>
                    <form>
                    <input
                                id="inp"
                                type={"text"}
                                placeholder={"Size of population"}
                                value={this.state.inputValue}
                                onChange={this.handleInputChange}
                            />
                            <input
                                id="inp"
                                type={"text"}
                                placeholder={"Amount od computers"}
                                value={this.state.numberOfComputers}
                                onChange={this.handleNumberChange}
                            />
                            <input
                                id="inp"
                                type={"text"}
                                placeholder={"Amount of generations"}
                                value={this.state.amountOfGeneration}
                                onChange={this.handleAmountOfGenerationChange}
                            />
                            {this.state.error && <div class="isa_error">
   <i class="fa fa-times-circle"></i>
   Invalid data. Try again!
</div> }
                            <div className="button_cont" onClick={this.handleOnSubmit} align="center"><span className="example_e" target="_blank" rel="nofollow noopener">Submit data</span></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
