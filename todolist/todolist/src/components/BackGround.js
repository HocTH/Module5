import {Component} from "react";
import React from "react";

export class BackGround extends Component {
    constructor() {
        super();
        this.state = {
            color: 'black'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'pink'})
        }, 4000)
    }

    render() {
        return (
            <>
                <div
                    style={
                        {
                            background: this.state.color,
                            paddingTop: 20,
                            width: 500,
                            height: 100,
                            margin: 'auto'
                        }
                    }
                >

                </div>
            </>
        )
    }
}