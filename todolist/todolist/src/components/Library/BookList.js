import {useEffect, useState} from "react";
import React from "react";
import * as bookService from "./service/BookService"
import axios from "axios";
import {NavLink} from "react-router-dom";
export function ListBook() {
    const [books,setBooks] = useState([])
    useEffect(()=>{
     const fetchApi = async ()=>{
         const result = await  bookService.findAll();
         setBooks(result);
     }
     fetchApi()
    },[])
    return(
        <>
            <h1>
                Book list
            </h1>
            <table className = "table">
                <thead>
                <tr>
                    <th>Tittle</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) =>(
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/update/${book.id}`} className="btn btn-primary">Edit</NavLink>
                            <NavLink to={`/delete/${book.id}`} className='btn btn-danger'>Delete</NavLink>
                        </td>
                    </tr>)
                )}
                </tbody>
            </table>
        </>

    )
}