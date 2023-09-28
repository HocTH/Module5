import {Component} from "react";
import {Hello} from "./Hello";
import React from "react";

export class Display extends Component{
    constructor(props) {
        super();
        this.state = {
            display:false
        }
    }
    showContent = () =>{
        this.setState({display:true})
    }
    hideContent = () =>{
        this.setState({display:false})
    }
    render() {
        let comp;
        if (this.state.display){
            comp = <Hello/>
        }
        return (
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.showContent}>
                    Show the component
                </button>
                <button onClick={this.hideContent}>
                    Hide the component
                </button>
            </div>
        );
    }
}