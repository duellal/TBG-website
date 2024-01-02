import styled from "styled-components";

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
`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-itmes: center;
`
export const MobileNavBar = styled(Navbar)`
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    padding: 0;
    margin: 0;
`

export const MobileNav = styled(Nav)`
    
`

export const HamburgerDiv = styled.div`
    position: absolute;
    left: 0;
`