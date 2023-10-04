import React, {Component} from "react";
export class Home extends Component {
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.logOut}>Log out </button>
                </div>
            </div>
        )
    }
}