import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h3>
        Browser's details: {navigator.userAgent}
    </h3>
);

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

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(
    <table>
        <thead>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
        {students.map(student => (
            <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(
    <div className="container">
        <div className="card">
            <div className="card--header"/>
            <img
                className="avatar"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Ruma Khan</p>
                    <p className="text-sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);