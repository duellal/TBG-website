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

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView({ behavior: 'smooth' })
    }

    let url = async (urlOption) => {
        setOpen(false)

        let splitUrlHash = urlOption.split(`#`)

        if (urlOption === `home`) {
            if (path === '/') {
                return scrollToElem(urlOption)
            }
            else {
                return navigate('/')
            }
        }
        else if (urlOption.includes(`#`)) {
            let id = splitUrlHash[1];
            await navigate(urlOption)
            return scrollToElem(id)
        }
        else if (urlOption.includes('team')) {
            let teamId = `teamCareers`
            let prevLocation = window.location.href

            if (prevLocation.includes(`#`)) {
                await navigate(urlOption)
                return scrollToElem(teamId)
            }
            else {
                navigate(`about/team`)
            }
        }
        else if (path === urlOption) {
            let elem = urlOption.split(`/`)[1]
            let getId = document.getElementById(elem)
            return getId.scrollIntoView({ behavior: 'smooth' })
        }
        else {
            navigate(urlOption)
        }
    }

    return (
        <StyledHeader open={isOpen}>
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
            <LogoContainer>
                <Logo loading="lazy" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo} />
            </LogoContainer>
        </StyledHeader>
    )
}