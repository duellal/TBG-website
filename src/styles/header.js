import styled from "styled-components";
import { devices } from "./constants/device-size";

const { tablet, mobileXL } = devices

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 165px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #06aed5;
    z-index: 300;
    
    @media ${tablet}{
        justify-content: end;
        height: ${props => props.open ? '200px' : '165px'};
    } d
`
export const LogoContainer = styled.div`
    width: 135px;
    
    @media ${tablet}{
        margin-right: 3%;
    }
`

export const Logo = styled.img`
    display: inherit;
    width: 135px;
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
        position: absolute;
        top: 40px;
        width: 100%;
        padding: 0;
        margin: 0;
    }
`

export const MobileNav = styled(Nav)`
    flex-direction: column;
    align-items: stretch;
    padding-left: 50px;
    
    @media ${tablet}{
        position: absolute;
        left: 74px;
        padding: 0;
     }
    
    @media ${mobileXL}{
        align-items: center;
        padding: 0;
    }
`

export const HamburgerDiv = styled.div`
    position: absolute;
    left: 0;
    display: none;
    
    @media ${tablet}{
       display: block;
    }
`