import styled from "styled-components";
import { devices } from "./device-size";

const { tablet, mobileXL } = devices

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ad0005;
`

export const LogoContainer = styled.div`
    padding: 12px 0;
`

export const Logo = styled.img`
    display: inherit;
    width: 90px;
`

export const Navbar = styled.nav`
    width: 80%;
    margin: 12px;
    align-self: center;
    background-color: #06aed5;
    padding: 12px 15px;
    
    @media ${tablet}{
        display: none;
    }
`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-itmes: center;
    
    @media ${tablet}{
        margin-bottom: 100px;
    }
`
export const MobileNavBar = styled.nav`
   display: none;
    
    @media ${tablet}{
        display: block;
        align-self: center;
        background-color: #06aed5;
        padding: 12px 15px;
        position: absolute;
        top: 110px;
        width: 100%;
        padding: 0;
        margin: 0;
        height: 100vh;
        overflow: scroll;
    }
`

export const MobileNav = styled(Nav)`
    flex-direction: column;
    align-items: stretch;
    padding-left: 45%;
    
    @media ${mobileXL}{
        align-items: center;
        padding: 0;
    }
`

export const HamburgerDiv = styled.div`
    position: absolute;
    right: 0;
    display: none;
    
    @media ${tablet}{
       display: block;
    }
`