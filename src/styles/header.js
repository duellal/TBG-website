import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 165px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #06aed5;
    
    .navbar {
        width: 50%;
        background-color: #06aed5;
    }
    
    .nav {
        display: flex;
        justify-content: space-between;
    }
    
    .nav-item {
        display: flex;
        padding: 1% 2%;
        cursor: pointer;
        text-align: center;
        align-items: center;
        color: white;
        background-color: #06aed5;
        border: none;
    }
    
    .about,
    .home,
    .boarding,
    .daycare,
    .grooming,
    .forms,
    .faq {
        font-size: 16px;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        font-weight: bold;
        text-transform: uppercase;
        transition: 0.3s;
    }
    
    .about:hover,
    .home:hover,
    .boarding:hover,
    .daycare:hover,
    .grooming:hover,
    .forms:hover,
    .faq:hover {
        transform: scale(1.1);
        color: black;
    }
`
export const HeaderLogo = styled.div`
    width: 135px;
`

export const LogoPNG = styled.img`
    display: inherit;
    width: 135px;
`