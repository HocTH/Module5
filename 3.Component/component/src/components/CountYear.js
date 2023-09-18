import {Component} from "react";
import * as events from "events";
class Count  extends Component{
    constructor(props) {
        super(props);
        this.state={
            number:0
        }
    }
    increase = () =>{
        this.setState({number:this.state.number +1});
    }
    decrease = ()=>{
        this.setState({number:this.state.number -1})
    }
    // handle = (event)=>{
    //     console.log(this.state.item)
    // }
    render() {
        return (
            <div style={{ textAlign: "center", padding: 30 }}>
                <button onClick={this.decrease}>Decrease</button>
                <span style={{ padding: 10 }}>{this.state.number}</span>
                <button onClick={this.increase}>Increase</button>
                <br/>
                <input value={this.props.name}/>
                <button onClick={this.handle}></button>
            </div>
        );
    }
}
export default Count;