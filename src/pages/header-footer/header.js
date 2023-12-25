/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";

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

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView()
    }

    let url = async (urlOption) => {
        if(urlOption.includes(`#`)){
            let id = urlOption.split(`#`)[1];
            await navigate(urlOption)
            return scrollToElem(id)
        }
        else{
            navigate(urlOption)
        } 
    }

    return (
        <header>
            <div className="logo">
                <img loading="lazy" className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => {navigate('/')}}>
                            Home
                    </NavItem>
                    <NavItem className="about">
                        <button className="dropbtn"  onClick={() => navigate(`/about`)}>
                            About
                        </button>
                        <div className="dropdown-content">
                            {aboutOptions.map((option, i) => {
                                return (
                                    <button onClick={() => url(option.url)} key={i}> {option.title} </button>
                                )
                            })}
                        </div>
                    </NavItem>
                    <NavItem className="boarding">
                        <button className="dropbtn" onClick={() => navigate('/boarding')}>
                            Boarding
                        </button>
                        <div className="dropdown-content">
                            {boardingOptions.map((option, i) => {
                                return (
                                    <button onClick={() => url(option.url)} key={i}> {option.title} </button>
                                )
                            })} 
                        </div>
                    </NavItem>
                    <NavItem className="daycare">
                        <button className="dropbtn" onClick={() => navigate('/daycare')}>
                            Daycare
                        </button>
                        <div className="dropdown-content">
                            {daycareOptions.map((option, i) => {
                                return (
                                    <button onClick={() => url(option.url)} key={i}> {option.title} </button>
                                )
                            })} 
                        </div>
                    </NavItem>
                    <NavItem className="grooming">
                        <button className="dropbtn"  onClick={() => navigate('/grooming')}>
                            Grooming
                        </button>
                        <div className="dropdown-content">
                            {groomingOptions.map((option, i) => {
                                return (
                                    <button onClick={() => url(option.url)} key={i}> {option.title} </button>
                                )
                            })}
                        </div>
                    </NavItem>
                    <NavItem className="forms" onClick={() => navigate('/forms')}>
                        Forms
                    </NavItem>
                    <NavItem className="faq">
                        <button className="dropbtn"  onClick={() => navigate('/faq')}>
                            FAQs
                        </button>
                        <div className="dropdown-content">
                            {faqOptions.map((option, i) => {
                                return (
                                    <button onClick={() => url(option.url)} key={i}> {option.title} </button>
                                )
                            })}
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}