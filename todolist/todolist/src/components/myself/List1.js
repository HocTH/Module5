import React, {useEffect, useState} from "react";
import * as studentService from "./service/StudentService"
export function List1(){
    const [students,setStudents] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            const result = await studentService.findAll()
             setStudents(result)
        }
        fetchApi();
    },[])
    return(
        <>
            <h1>
                Student list
            </h1>
            <table className = "table">
                <thead>
                <tr>
                    <th>User</th>
                    <th>PassWord</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) =>(
                    <tr>
                        <td>{student.user}</td>
                        <td>{student.password}</td>
                    </tr>)
                )}
                </tbody>
            </table>
        </>

    )
}