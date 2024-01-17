/* 
times with  minutes (7:00) 

Holidays:
Hours:
New Years Day
Easter Sunday
Fourth of July
Thanksgiving Day
Christmas Day

Adjusted Hours:
Christmas Eve 7:00am - 12pm

*/

/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav, 
    NavItem,
    Navbar } from "reactstrap";
import { useNavigate } from "react-router";

//Footer Styles:
import "../../styles/footer.css"
import { CopyrightDiv, CopyrightName, CopyrightYear, FooterContactDiv, FooterFirstCol, FooterIndvSocials, FooterInfo, FooterNavBar, FooterNavP, FooterSocialImg, FooterSocials, FooterStyle, FooterThirdCol, FooterTitle, LogoDiv, LogoImg } from '../../styles/footer'

//Logos
import logo from "../../images/logo/logo192.png"
import phoneIcon from '../../images/icons/phone-call.png'
import emailIcon from '../../images/icons/email.png'
import fbIcon from '../../images/icons/facebook.png'
import instaIcon from '../../images/icons/instagram.png'
import tiktokIcon from '../../images/icons/tik-tok.png'
import { BoldP, Break10pxDiv, Break5pxDiv } from "../../styles/common-styles";

export default function Footer(){ 
    let navigate = useNavigate();

    return (
        <FooterStyle>
            <FooterInfo>
                <FooterFirstCol>
                    <div>
                        <FooterTitle>
                            Hours
                        </FooterTitle>
                        <Break5pxDiv/>
                        <BoldP>
                            Monday - Saturday
                        </BoldP>
                        <p>
                            7:00am - 7:00pm
                        </p>
                        <Break10pxDiv/>
                        <BoldP>
                            Sunday
                        </BoldP>
                        <p>
                            4:00pm - 7:00pm
                        </p>
                    </div>  

                    <div className="holiday-hours">
                        <FooterTitle className="title">
                            Holiday Hours
                        </FooterTitle>
                        <Break5pxDiv/>
                        <BoldP>
                            Closed:
                        </BoldP>
                        <Break5pxDiv/>
                        <p>
                            New Year's Day
                        </p>
                        <p>
                            Easter Sunday
                        </p>
                        <p>
                            Fourth of July
                        </p>
                        <p>
                            Thanksgiving Day
                        </p>
                        <p>
                            Christmas Day
                        </p>
                        <Break10pxDiv/>
                        <BoldP>
                            Adjusted Hours:
                        </BoldP>
                        <Break5pxDiv/>
                        <p>
                            Christmas Eve 
                        </p>
                        <p>
                            7:00am - 12:00pm
                        </p>
                    </div> 
                </FooterFirstCol>

                <div id="second-col">
                    <FooterContactDiv>
                        <FooterTitle>
                            Contact Us!
                        </FooterTitle>
                        <div className="phone">
                            <img loading="lazy" src={phoneIcon} width='30' height='30' alt="Mobile phone with flat screen showing a landline phone with signals"></img>
                            <p className="number">
                                (919) 355 - 2820
                            </p>
                        </div>
                        <div className="email">
                            <img loading="lazy" src={emailIcon} width='30' height='30' alt="paper with an at symbol inside an unsealed envelope"></img>
                            <a className="e-address" href="mailto:thebiscuitgarden@gmail.com">
                                thebiscuitgarden@gmail.com
                            </a>
                        </div>
                        <div className="break-div"></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.537584269854!2d-78.83697175900978!3d35.688386472699044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8dd864f751b7%3A0xe2824cd11188d5f3!2sThe%20Biscuit%20Garden!5e0!3m2!1sen!2sus!4v1702322948903!5m2!1sen!2sus" width="410" height="350" style={{border: '1px solid black' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="The Biscuit Garden Address on a Map"></iframe>
                    </FooterContactDiv>
                </div>
                
                <FooterThirdCol id="third-col">
                <FooterSocials>
                        <FooterTitle>
                            Our Socials
                        </FooterTitle>
                        <FooterIndvSocials>
                            <a href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                                <FooterSocialImg loading="lazy" src={fbIcon} width='30' height='30' alt='an f encircled in blue'></FooterSocialImg>
                                /Apex2112EWilliamsSt
                            </a>
                        </FooterIndvSocials>
                        <FooterIndvSocials>
                            <a href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer">
                                <FooterSocialImg loading="lazy" src={instaIcon} width='30' height='30' alt='a camera in a yellow to pink gradient'></FooterSocialImg>
                                @thebiscuitgarden
                            </a>
                        </FooterIndvSocials>
                        <FooterIndvSocials>
                            <a href="https://www.tiktok.com/@biscuitgarden" target="_blank" rel="noreferrer">
                                <FooterSocialImg loading="lazy" src={tiktokIcon} width='30' height='30' alt='a t that looks like a quarter note in black with blue and red shadows'></FooterSocialImg>
                                @biscuitgarden
                            </a>
                        </FooterIndvSocials>
                    </FooterSocials>
                    
                    <LogoDiv>
                        <LogoImg loading="lazy" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo}/>
                    </LogoDiv>

                    <Navbar>
                        <FooterNavP>
                            Quick Links
                        </FooterNavP>
                        <Nav tabs fill>
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
                                    Credits
                            </NavItem>
                        </Nav>
                    </Navbar>
                </FooterThirdCol>


                <CopyrightDiv>
                    <CopyrightName>
                        The Biscuit Garden
                    </CopyrightName>
                    <CopyrightYear>
                       &copy; 2024
                    </CopyrightYear>
                </CopyrightDiv>
            </FooterInfo>
        </FooterStyle>
    )
}