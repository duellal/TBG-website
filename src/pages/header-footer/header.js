/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    // NavLink, 
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";
// import { useLocation } from "react-router-dom";

//Logo
import logo from "../../images/logo192.png";

//Header Styles:
import "../../styles/header.css";

//Options for dropdown menu:
import {
    aboutOptions,
    boardingOptions,
    daycareOptions,
    groomingOptions, 
    faqOptions
} from './menuOptions'

export default function Header(){
    let navigate = useNavigate();

    return (
        <header>
            <div className="logo">
                <img className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => {navigate('/')}}>
                            Home
                    </NavItem>
                    <NavItem className="about" onClick={() => navigate(`/about`)}>
                        <button className="dropbtn">
                            About
                        </button>
                        <div className="dropdown-content">
                        {aboutOptions.map((option, i) => {
                            return (
                                <a href={option.url} key={i}> {option.title} </a>
                            )
                        })}
                        </div>
                    </NavItem>
                    <NavItem className="boarding" onClick={() => navigate('/boarding')}>
                        <button className="dropbtn">
                            Boarding
                        </button>
                        <div className="dropdown-content">
                            {boardingOptions.map((option, i) => {
                                return (
                                    <a href={option.url} key={i}> {option.title} </a>
                                )
                            })} 
                        </div>
                    </NavItem>
                    <NavItem className="daycare" onClick={() => navigate('/daycare')}>
                        <button className="dropbtn">
                            Daycare
                        </button>
                        <div className="dropdown-content">
                            {daycareOptions.map((option, i) => {
                                return (
                                    <a href={option.url} key={i}> {option.title} </a>
                                )
                            })} 
                        </div>
                    </NavItem>
                    <NavItem className="grooming" onClick={() => navigate('/grooming')}>
                        <button className="dropbtn">
                            Grooming
                        </button>
                        <div className="dropdown-content">
                            {groomingOptions.map((option, i) => {
                                return (
                                    <a href={option.url} key={i}> {option.title} </a>
                                )
                            })}
                        </div>
                    </NavItem>
                    <NavItem className="forms" onClick={() => navigate('/forms')}>
                        Forms
                    </NavItem>
                    <NavItem className="faq" onClick={() => navigate('/faq')}>
                        <button className="dropbtn">
                            FAQs
                        </button>
                        <div className="dropdown-content">
                            {faqOptions.map((option, i) => {
                                return (
                                    <a href={option.url} key={i}> {option.title} </a>
                                )
                            })}
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}