import {useEffect, useState} from "react";
import React from "react";
import * as bookService from "./service/BookService"
import axios from "axios";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
export function ListBook() {

    const [books,setBooks] = useState([])
    useEffect(()=>{
     const fetchApi = async ()=>{
         const result = await  bookService.findAll();
         setBooks(result);
     }
     fetchApi()
    },[])
    const handleDelete =(id) =>{
        try{
            axios.delete("http://localhost:8080/books/"+id)
            setBooks(prevState => prevState.filter((book)=> book.id!== id ))
            toast(' Delete book successfully!!!!');
        }catch (e) {
            console.log(e)
        }
    }
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
                            <button onClick={e => handleDelete(book.id)} className="btn btn-danger">Delete</button>

                        </td>
                    </tr>)
                )}
                </tbody>
            </table>
        </>

    )
}