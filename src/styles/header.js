import styled from "styled-components";
import { devicesHeight, devicesWidth } from "./constants/device-size";

const { xxl, xl } = devicesHeight
const { tablet, tabletXL, mobileXL, mobileS, laptopS } = devicesWidth

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 280px;
    display: flex;
    align-items: center;
    background-color: #06aed5;
    z-index: 500;

    @media ${xxl} and ${tabletXL}{
        height: ${props => props.open ? '250px' : '200px'}
    }

    @media ${xl}{
        height: 240px;
    }

    @media ${tablet}{
        height: ${props => props.open ? '250px' : '200px'};
    }

    @media ${mobileXL}{
        height: ${props => props.open ? '200px' : '100px'};
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
    bottom: -125px;

    @media ${tablet}{
        width: 200px;
        bottom: -95px;
    }
    
    @media ${mobileXL}{
        width: 150px;
        bottom: -70px;
    }
`

export const Navbar = styled.nav`
    width: 100%;
    background-color: #06aed5;
    margin: 0 20px 0 0;

    @media ${tabletXL}{
        display: none;
    }
`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-around;
    
    @media ${laptopS}{
        // margin-bottom: 100px;
    }
`

export const MobileNavBar = styled.nav`
    display: none;

    @media ${tabletXL}{
        display: block;
        align-self: center;
        position: absolute;
        top: 20%;
        padding: 0;
        margin: 0;
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
    
    @media ${tabletXL}{
       display: block;
       position: absolute;
       left: 93%;
    }

    @media ${tablet}{
        display: block;
        position: absolute;
        left: 90%;
    }

    @media ${mobileXL}{
        left: 85%;
    }
`