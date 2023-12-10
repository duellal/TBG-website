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
            <div className="hours">
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
                <p>
                    Closed
                </p>
                <p>
                    New Year's Day, Easter Day, Independence Day, Thanksgiving Day, Christmas Day
                </p>
            </div>  

            <div className="contact">
                <p className="title">
                    Contact Us!
                </p>
                <p className="address">
                    2112 E Williams St, Apex, NC 27539
                </p>
                <p className="phone">
                    (919) 355 - 2820
                </p>
                <p className="email">
                    thebiscuitgarden@gmail.com
                </p>
                <p className="facebook">
                    /thebiscuitgarden
                </p>
            </div>
             <Navbar>
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

            <div className="copyright">
                <p className="name">
                    The Biscuit Garden
                </p>
                <p className="year">
                    2024
                </p>
            </div>
        </footer>
    )
}