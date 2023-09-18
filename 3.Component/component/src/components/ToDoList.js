import {Component} from "react";

 class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: "no"
        }
    }

    handleChange(event) {
        this.setState({item: event.target.value})
    }

    addItem = () => {
        if (this.state.list.include(this.state.item)) {
            this.setState((prevState) => (
                {
                    item: "",
                    list: [prevState.state, ...prevState.list]
                }
            ))
        }
    }
    render() {
        return (
            <>
                <h2>To</h2>
                <input onChange={this.handleChange} value={this.state.item}/>
                <button onClick={this.addItem}>Add</button>
                <table>
                    <tbody>
                    {this.state.list.map((itemChild, index) => (
                            <tr key={index}>
                                <td>{itemChild}</td>
                            </tr>
                            )
                    )}
                    </tbody>
                </table>
            </>)
    }
}
export default ToDoList;