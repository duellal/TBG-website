/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem,
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";

//Footer Styles:
import "../styles/footer.css"

//Logo
import logo from "../images/logo192.png"

export default function Footer(){ 
    let navigate = useNavigate();

    return (
        <footer>
            <div id="info">
                <div id="first-col">
                    <div className="hours">
                        <p className="title">
                            Hours
                        </p>
                        <p>
                            Monday - Saturday
                        </p>
                        <p>
                            7am - 7pm
                        </p>
                        <p>
                            Sunday
                        </p>
                        <p>
                            4pm - 7pm
                        </p>
                    </div>  

                    <div className="holiday-hours">
                        <p className="title">
                            Holiday Hours
                        </p>
                        <p>
                            Closed
                        </p>
                        <p>
                            New Year's Day, Easter Day, Independence Day, Thanksgiving Day, Christmas Day
                        </p>
                    </div> 
                </div>

                <div id="second-col">
                    <div className="contact">
                        <p className="title">
                            Contact Us!
                        </p>
                        <a className='address' href="https://maps.app.goo.gl/xP4CiNAGKqzPhW138" target="_blank" rel="noreferrer">
                            2112 E Williams St, Apex, NC 27539
                        </a>
                        <p className="phone">
                            (919) 355 - 2820
                        </p>
                        <a className="email" href="mailto:thebiscuitgarden@gmail.com">
                            thebiscuitgarden@gmail.com
                        </a>
                        <a className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                            /thebiscuitgarden
                        </a>
                    </div>
                </div>
                
                <div id="third-col">
                    <Navbar>
                        <p>
                            Quick Links
                        </p>
                        <Nav tabs fill>
                            <NavItem onClick={() => navigate('/about/contact')}>
                                    Contact Us
                            </NavItem>
                            <NavItem onClick={() => navigate('/boarding')}>
                                    Boarding
                            </NavItem>
                            <NavItem onClick={() => navigate('/daycare')}>
                                    Daycare
                            </NavItem>
                            <NavItem onClick={() => navigate('/grooming')}>
                                    Grooming
                            </NavItem>
                            <NavItem onClick={() => navigate('/forms')}>
                                    Forms
                            </NavItem>
                            <NavItem onClick={() => navigate('/faqs')}>
                                    FAQs
                            </NavItem>
                            <NavItem onClick={() => navigate('/sitemap')}>
                                    Sitemap
                            </NavItem>
                        </Nav>
                    </Navbar>

                    <div className="logo">
                        <img className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
                    </div>
                </div>


                <div className="copyright">
                    <p className="name">
                        The Biscuit Garden
                    </p>
                    <p className="year">
                        2024
                    </p>
                </div>
            </div>
        </footer>
    )
}