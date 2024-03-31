/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'

//Logo
import logo from "../../images/logo/logo192.png";

//Header Styles:
import { LogoContainer, Logo, HamburgerDiv, MobileNav, MobileNavBar, Nav, Navbar, StyledHeader } from '../../styles/header'

//Components
import NavItem from "./NavItem";

//Options for dropdown menu:
import {
    options
} from './menuOptions'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname;

    let url = async (urlOption) => {
        setOpen(false)

        if(urlOption === path){
            return window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"})
        }
        else{
            return navigate(urlOption)
        }
    }

    return (
        <StyledHeader open={isOpen}>
            <LogoContainer>
                <Logo loading="lazy" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo} />
            </LogoContainer>

            <Navbar>
                <Nav>
                    {Object.keys(options).map((key, index) => {
                        return <NavItem navigateToUrl={url} key={index} url={options[key].url} title={key} />
                    })}
                </Nav>
            </Navbar>

            <HamburgerDiv>
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
            </HamburgerDiv>
            {isOpen &&
                <MobileNavBar>
                    <MobileNav>
                        {Object.keys(options).map((key, index) => {
                            return <NavItem navigateToUrl={url} key={index} url={options[key].url} title={key} />
                        })}
                    </MobileNav>
                </MobileNavBar>
            }
        </StyledHeader>
    )
}