/* eslint-disable react/prop-types */
import React from "react";
import {
    Nav,
    NavItem,
    Navbar
} from "reactstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

//Logo
import logo from "../../images/logo/logo192.png";

//Header Styles:
// import "../../styles/header.css";
import { HeaderLogo, LogoPNG, StyledHeader } from '../../styles/header'

export default function Header() {
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname;

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView({ behavior: 'smooth' })
    }

    let url = async (urlOption) => {
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
        <StyledHeader>
            <Navbar>
                <Nav>
                    <NavItem className="home" onClick={() => url(`home`)}>
                        Home
                    </NavItem>
                    <NavItem className="about" onClick={() => url(`/about`)}>
                        About
                    </NavItem>
                    <NavItem className="boarding" onClick={() => url(`/boarding`)}>
                        Boarding
                    </NavItem>
                    <NavItem className="daycare" onClick={() => url(`/daycare`)}>
                        Daycare
                    </NavItem>
                    <NavItem className="grooming" onClick={() => url(`/grooming`)}>
                        Grooming
                    </NavItem>
                    <NavItem className="forms" onClick={() => url(`/forms`)}>
                        Forms
                    </NavItem>
                    <NavItem className="faq" onClick={() => url(`/faqs`)}>
                        FAQs
                    </NavItem>
                </Nav>
            </Navbar>
            <HeaderLogo className="logo">
                <LogoPNG loading="lazy" className="logo-png" alt="The Biscuit Garden Logo - White dog with a bowtie encircled by the words, the biscuit garden" src={logo} />
            </HeaderLogo>
        </StyledHeader>
    )
}