/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";

//Logo
import logo from "../images/logo192.png"

// //Header Styles:
// import "../styles/css/header.css"

export default function Header(){

    return (
        <header>
            <div className="logo">
                <img className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home">
                            Home
                    </NavItem>
                    <NavItem className="about">
                            About
                    </NavItem>
                    <NavItem className="boarding">
                            Boarding
                    </NavItem>
                    <NavItem className="daycare">
                            Daycare
                    </NavItem>
                    <NavItem className="grooming">
                            Grooming
                    </NavItem>
                    <NavItem className="forms">
                            Forms
                    </NavItem>
                    <NavItem className="faq">
                            FAQs
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}