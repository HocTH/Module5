import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";

export function Table() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await axios.get('http://localhost:8080/wanders')
            console.log(result.data)
                setPeople(result.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchApi()
    },[])
    return (
        <>
        <h1>List Wander Member</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Home</th>
                </tr>
                </thead>
                <tbody>
                {people.map((member, index)=>(
                    <tr key={index}>
                        <td>{member.id}</td>
                        <td>{member.company}</td>
                        <td>{member.contact}</td>
                        <td>{member.home}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}