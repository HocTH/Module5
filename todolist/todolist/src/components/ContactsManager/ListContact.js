import {useEffect, useState} from "react";
import * as contactService from "./service/ServiceContact"
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

export function ListContact() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
            const fetchApi = async () => {
                const result = await contactService.findAll();
                console.log(result)
                setContacts(result)
                {console.log("result :", contacts)}
            }
        fetchApi()
        }, []
    )
    function handleDelete(id) {
        try {
            axios.delete("http://localhost:8080/contacts/"+id)
            setContacts( prevState => prevState.filter((contact) =>contact.id !== id))
        }catch (e) {
            console.log(e)
        }
    }
    return(
        <>
           <div className="container">
               <div style={{ display: 'flex', justifyContent: 'space-right', alignItems: 'right' }}>
                   <h1 style={{margin:"auto"}}>Contacts</h1>
                   <NavLink to={`/create`} className="btn btn-dark">Add</NavLink>
               </div>
               <table className="table">
                   <thead>
                   <tr>
                       <th>Image</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Action</th>
                   </tr>
                   </thead>
                   <tbody>
                   {contacts.map((contact, index)=>(
                       <tr key={index}>
                           <td>
                               <img src="https://demoda.vn/wp-content/uploads/2022/01/anh-que-huong-mien-tay-1.jpg" style={{height:"100px", width:"100px"}} alt="None"/>

                               {/*{contact.image!==null ? contact.image:"None"}*/}
                           </td>
                           <td> {contact.name}</td>
                           <td> {contact.email}</td>
                           <td> {contact.phone}</td>
                           <td>
                               <NavLink to={`/update/${contact.id}`} className="btn btn-primary">Edit</NavLink>
                               <button onClick={event => handleDelete(contact.id)} className="btn btn-danger"> Delete</button>
                           </td>
                       </tr>
                   ) )}
                   </tbody>
               </table>
           </div>

        </>
    )
}
