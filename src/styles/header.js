import styled from "styled-components";
import { devices } from "./constants/device-size";

const { tablet, tabletXL, mobileXL, mobileS, laptopS, laptopXS } = devices

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 330px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #06aed5;
    z-index: 500;
    
    @media ${tablet}{
        justify-content: end;
    }

    @media ${mobileXL}{
        height: ${props => props.open ? '200px' : '165px'};
    }
`
export const LogoContainer = styled.div`
    width: 270px;
    
    @media ${tablet}{
        margin-right: 3%;
    }
`

export const Logo = styled.img`
    position: absolute;
    left: 0;
    display: inherit;
    width: 270px;
    
    
    @media ${mobileXL}{
        width: 150px;
        bottom: -60px;
    }
`

export const Navbar = styled.nav`
    width: 100%;
    align-self: flex-start;
    background-color: #06aed5;
    margin: 100px 20px 100px 0;
    padding: 12px 0;

    @media ${laptopXS}{
        display: none;
    }
`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-itmes: center;
    
    @media ${laptopS}{
        margin-bottom: 100px;
    }
`

export const MobileNavBar = styled.nav`
    display: none;
    
    @media ${laptopXS}{
        display: block;
        align-self: center;
        position: absolute;
        top: 20%;
        left: 78%;
        padding: 0;
        margin: 0;
    }

    @media ${tabletXL}{
        left: 75%;
    }

    @media ${tablet}{
        left: 70%;
        top: 22%;
    }

    @media (max-width: 625px){
        left: 65%;
    }

    @media ${mobileXL}{
        left: 60%;
        top: 10%;
    }

    @media ${mobileS}{
        left: 56%;
    }
`

export const MobileNav = styled(Nav)`
    flex-direction: column;

    @media ${mobileXL}{
        height: ${props => props.open ? '200px' : '165px'};
    }
`

export const HamburgerDiv = styled.div`
    display: none;
    
    @media ${laptopXS}{
       display: block;
       position: absolute;
       left: 93%;
    }

    @media ${tablet}{
        left: 90%;
    }

    @media ${mobileXL}{
        left: 85%;
    }
`