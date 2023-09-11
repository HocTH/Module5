import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const animals = ["cat","dog","people","camel",]
const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
root.render(
 //
 //    <div>
 // <div>
 //     <h1>List of fruits</h1>
 //     <ul>
 //         {animals.map((item) => (
 //             <li>{item}</li>
 //         ))}
 //     </ul>
 //     <h1>Hello, world!</h1>
 //     <h2>It is {new Date().toLocaleTimeString()}.</h2>
 // </div>
 //        <h4>Browser's details: {navigator.userAgent}</h4>
 //    </div>
    <div>
        <h1>Students List</h1>
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
        </table>
     </div>

);


reportWebVitals();
