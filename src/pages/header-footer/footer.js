/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem,
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";

//Footer Styles:
import "../../styles/footer.css"

//Logo
import logo from "../../images/logo192.png"
import phoneIcon from '../../images/phone-call.png'
import emailIcon from '../../images/email.png'
import fbIcon from '../../images/facebook.png'
import instaIcon from '../../images/instagram.png'
import tiktokIcon from '../../images/tik-tok.png'
// import addressIcon from '../images/location-pin.png'

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
                        <div className="phone">
                            <img src={phoneIcon} width='30' height='30' alt="Mobile phone with flat screen showing a landline phone with signals"></img>
                            <p className="number">
                                (919) 355 - 2820
                            </p>
                        </div>
                        <div className="email">
                            <img src={emailIcon} width='30' height='30' alt="paper with an at symbol inside an unsealed envelope"></img>
                            <a className="e-address" href="mailto:thebiscuitgarden@gmail.com">
                                thebiscuitgarden@gmail.com
                            </a>
                        </div>
                        <div className="break-div"></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.537584269854!2d-78.83697175900978!3d35.688386472699044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8dd864f751b7%3A0xe2824cd11188d5f3!2sThe%20Biscuit%20Garden!5e0!3m2!1sen!2sus!4v1702322948903!5m2!1sen!2sus" width="410" height="350" style={{border: '1px solid black' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="The Biscuit Garden Address on a Map"></iframe>
                    </div>
                </div>
                
                <div id="third-col">
                <div className="socials">
                        <p className="title">
                            Our Socials
                        </p>
                        <div id="facebook">
                            <a className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                                <img src={fbIcon} width='30' height='30' alt='an f encircled in blue'></img>
                                /Apex2112EWilliamsSt
                            </a>
                        </div>
                        <div id="instagram">
                            <a className="instagram" href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer">
                                <img src={instaIcon} width='30' height='30' alt='a camera in a yellow to pink gradient'></img>
                                @thebiscuitgarden
                            </a>
                        </div>
                        <div id="tiktok">
                            <a className="tiktok" href="https://www.tiktok.com/@biscuitgarden" target="_blank" rel="noreferrer">
                                <img src={tiktokIcon} width='30' height='30' alt='a t that looks like a quarter note in black with blue and red shadows'></img>
                                @biscuitgarden
                            </a>
                        </div>
                    </div>
                    
                    <div className="logo">
                        <img className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
                    </div>

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