import './Navbar.css';
import React from "react";
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Button} from "@mui/material";

function Navbar() {

    return (
        <nav>
            <img
                src="http://127.0.0.1:8887/Formula_One_page_banner.jpg"
            alt={""}/>

            <img
                src="http://127.0.0.1:8887/logo.jpg"
                alt="logo" className="logo"/>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Drivers">Drivers</Link>
                </li>
                <li>
                    <Link to="/Constructors">Constructors</Link>
                </li>
                <li>
                    <Link to="/Circuits">Circuits</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/User">User</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;