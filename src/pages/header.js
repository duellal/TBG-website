/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";

//Logo
import logo from "../images/logo192.png"

// //Header Styles:
import "../styles/header.css"

export default function Header(){
    let navigate = useNavigate();

    return (
        <header>
            <div className="logo">
                <img className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => navigate('/')}>
                            Home
                    </NavItem>
                    <NavItem className="about" onClick={() => navigate('/about')}>
                            About
                    </NavItem>
                    <NavItem className="boarding" onClick={() => navigate('/boarding')}>
                            Boarding
                    </NavItem>
                    <NavItem className="daycare" onClick={() => navigate('/daycare')}>
                            Daycare
                    </NavItem>
                    <NavItem className="grooming" onClick={() => navigate('/grooming')}>
                            Grooming
                    </NavItem>
                    <NavItem className="forms" onClick={() => navigate('/forms')}>
                            Forms
                    </NavItem>
                    <NavItem className="faq" onClick={() => navigate('/faq')}>
                            FAQs
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}