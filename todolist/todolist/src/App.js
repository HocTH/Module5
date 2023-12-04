import logo from './logo.svg';
import './App.css';
import React from "react";
import {ToastContainer} from "react-toastify";
import {NavLink, Route, Router, Routes} from "react-router-dom";
import {SimpleForm} from "./components/myself/SimpleForm";
import {List1} from "./components/myself/List1";
import {Update1} from "./components/myself/Update1";
import {Table} from "./components/wander/SoLonely";
import {ProfileCard} from "./components/wander/ProfileCard";
import {AddComponent} from "./components/wander/AddComponent";
import AddComponentFunction from "./components/wander/AddComponentFunction";
import {Decrease} from "./components/wander/Decrease";
import {City} from "./components/wander/City";
import {ListToDo} from "./todolist/ToDo";
import {ListBook} from "./components/Library/BookList";
import {CreateBook} from "./components/Library/CreateBook";
import {Update} from "./components/Library/Update";
import {ListContact} from "./components/ContactsManager/ListContact";
import {UpdateContact} from "./components/ContactsManager/UpdateContact";
import {CreateContact} from "./components/ContactsManager/CreateContact";
function App() {
  return(
      // <>
      //     <NavLink to='/'>Home</NavLink>
      //     <NavLink to='/create' className='ms-2'>Create</NavLink>
      //     <Routes>
      //         <Route path="/" element={<List/>}></Route>
      //         <Route path="/create" element={<Create/>}></Route>
      //         <Route path="/update/:id" element={<Update/>}></Route>
      //         <Route path="/*" element={<NotFound/>}></Route>
      //     </Routes>
      // </>
      // <>
      //     <NavLink to="/">Home</NavLink>
      //     <NavLink to="/login">Login</NavLink>
      //     <Routes>
      //         <Route path="/"  element={<List1/>}></Route>
      //         <Route path="/login"  element={<SimpleForm/>}></Route>
      //         <Route path="/update/:id"  element={<Update1/>}></Route>
      //     </Routes>
      // </>
      <>
          <NavLink to="/CreateBook">Create</NavLink>
          <Routes>
              <Route path="/" element={<ListBook/>}></Route>
              <Route path="/CreateBook" element={<CreateBook/>}></Route>
              <Route path="/update/:id" element={<Update/>}></Route>
              {/*<Route path="/delete/:id" element={<DeleteBook/>}></Route>*/}
          </Routes>
          <ToastContainer/>
      </>
      // <Routes>
      //     <Route path="/" element={<ListContact/>}></Route>
      //     <Route path="/create" element={<CreateContact/>}></Route>
      //     <Route path="/update/:id" element={<UpdateContact/>}></Route>
      // </Routes>
      )
}
export default App;


