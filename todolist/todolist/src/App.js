import logo from './logo.svg';
import './App.css';
import React from "react";
import {NavLink, Route, Router, Routes} from "react-router-dom";
import {List} from "./components/crud/List";
import {Create} from "./components/crud/Create";
import {Update} from "./components/crud/Update";
import {NotFound} from "./components/crud/NotFound";
import {FormContact} from "./components/router/FormContact";
import {Declaration} from "./components/router/Declaration";

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
      <>
      <Declaration/>
      </>

      )
}
export default App;


