import {Component} from "react";
import React from "react";
export class AddComponent extends Component{
    render() {
        return(
            <div>
                Total: {this.props.firstNumber + this.props.secondNumber}
            </div>
        )
    }
}