import {useEffect, useState} from "react";
import React from "react";
import * as bookService from "./service/BookService"
import axios from "axios";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";
import {date} from "yup";
import data from "bootstrap/js/src/dom/data";
export function ListBook() {

    const [books,setBooks] = useState([])
    const [search,setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    useEffect(()=>{
     const fetchApi = async ()=>{
         const result = await  bookService.findAll();
         setBooks(result);
     }
     fetchApi()
    },[])
    useEffect(()=>{
        const searchTitle = ()=>{
            const results = books.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.quantity.includes(search)
            );
            setSearchResults(results)
        }
        searchTitle();
    },[search,books])
    const handleDelete =(id) =>{
        try{
            axios.delete("http://localhost:8080/books/"+id)
            setBooks(prevState => prevState.filter((book)=> book.id!== id ))
            toast(' Delete book successfully!!!!');
        }catch (e) {
            console.log(e)
        }
    }
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:8080/books?_page=${currentPage}&_limit=4`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data)=>{
        const currentPage  = data.selected +1 ;
        const commentsFormServer = await fetchComments(currentPage);
       setBooks(commentsFormServer)
    }
    return(
        <>
            <h1>
                Book list
            </h1>
            <form>
                <input type="text" className="form-control" placeholder="Search" value={search}
                onChange={(e) =>{setSearch(e.target.value)}}/>
            </form>
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
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={15}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </>

    )
}