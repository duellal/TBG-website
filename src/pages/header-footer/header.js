/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem, 
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

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
    let location = useLocation();

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView({behavior: 'smooth'})
    }

    let url = async (urlOption) => {
        let splitUrlHash = urlOption.split(`#`)

        if(urlOption.includes(`#`)){
            let id = splitUrlHash[1];
            await navigate(urlOption)
            return scrollToElem(id)
        }
        else if(urlOption.includes('team')){
            let teamId = `teamCareers`
            let prevLocation = window.location.href

            if(prevLocation.includes(`#`)){
                await navigate(urlOption)
                return scrollToElem(teamId)
            }
            else{
                navigate(`about/team`)
            }   
        }
        else{
            navigate(urlOption)
        } 
    }

    let scrollOnClick = (section) => {
        if(location.pathname === section){
            let elem = section.split(`/`)[1]
            let getId = document.getElementById(elem)
            return getId.scrollIntoView({behavior: 'smooth'})
        }
        else if(section === `home`){
            navigate(`/`)
        }
        else{
            navigate(section)
        }
    }

    return (
        <header>
            <div className="logo">
                <img loading="lazy" className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
            </div>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => scrollOnClick(`home`)}>
                            Home
                    </NavItem>
                    <NavItem className="about">
                        <button className="dropbtn"  onClick={() => scrollOnClick(`/about`)}>
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
                        <button className="dropbtn" onClick={() => scrollOnClick(`/boarding`)}>
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
                        <button className="dropbtn" onClick={() => scrollOnClick(`/daycare`)}>
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
                        <button className="dropbtn"  onClick={() => scrollOnClick(`/grooming`)}>
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
                    <NavItem className="forms" onClick={() => scrollOnClick(`/forms`)}>
                        Forms
                    </NavItem>
                    <NavItem className="faq">
                        <button className="dropbtn" onClick={() => scrollOnClick(`/faqs`)}>
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