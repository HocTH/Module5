import {Component} from "react";

const arr = [
    {
        id: 1,
        name: "Le Phuoc Hoc",
        age: 18,
        address: "Hue"
    },
    {
        id: 2,
        name: "Le Phuoc Hoai",
        age: 28,
        address: "Ha Noi"
    },
    {
        id: 1,
        name: "Le Phuoc Hoa",
        age: 68,
        address: "Binh Thuan"
    }]
export class StudentTable extends Component{
    render(){
        return(
            <>
                <table className = "table">
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    </tr>

                        {arr.map(arrStudent=>{
                           return (
                            <tr>
                            <td>{arrStudent.id}</td>
                <td>{arrStudent.name}</td>
                <td>{arrStudent.age}</td>
                <td>{arrStudent.address}</td>
            </tr>)
    }
                        )}
                </table>
            </>
        )
    }
}