import React, {Component} from "react";
export class Decrease extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number :0,
            color :"red"
        }
    }
    getDecrease = () =>{
    this.setState({})
    }
    getIncrease = () =>{
        this.setState({number:this.state.number -1})
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({color:"pink", number:this.state.number +1})
        },10000)
    }

    render() {
        return(
            <div style={{textAlign:"center",padding:30, backgroundColor:this.state.color }} >
                <button onClick={this.getIncrease}>-</button>
                <span>{this.state.number}</span>
                <button onClick={this.getDecrease}>+</button>
            </div>
        )
    }
}