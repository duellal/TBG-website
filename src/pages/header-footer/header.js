/* 
  navs in caps
  georgia bold 
  add 1.5x length to header (red part)
  Logo bigger - to the right
  Make header all the blue nav color (light blue)
    - See if BAY + Natalie like making the nav itmes a darker blue on hover
  All nav buttons WILL NOT have any sub buttons
    - all info will be on the page
*/

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
    let path = location.pathname;

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView({behavior: 'smooth'})
    }

    let url = async (urlOption) => {
        let splitUrlHash = urlOption.split(`#`)

        if(urlOption === `home`){
            if(path === '/'){
                return scrollToElem(urlOption)
            }
            else{
                return navigate('/')
            }
        }
        else if(urlOption.includes(`#`)){
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
        else if(path === urlOption){
            let elem = urlOption.split(`/`)[1]
            let getId = document.getElementById(elem)
            return getId.scrollIntoView({behavior: 'smooth'})
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
                    <NavItem className="home" onClick={() => url(`home`)}>
                            Home
                    </NavItem>
                    <NavItem className="about">
                        <button className="dropbtn"  onClick={() => url(`/about`)}>
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
                        <button className="dropbtn" onClick={() => url(`/boarding`)}>
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
                        <button className="dropbtn" onClick={() => url(`/daycare`)}>
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
                        <button className="dropbtn"  onClick={() => url(`/grooming`)}>
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
                    <NavItem className="forms" onClick={() => url(`/forms`)}>
                        Forms
                    </NavItem>
                    <NavItem className="faq">
                        <button className="dropbtn" onClick={() => url(`/faqs`)}>
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