import styled from "styled-components";
import { devices } from "./device-size";

const { tablet, mobileXL } = devices

export const DropDownContent = styled.div`
    display:none;
    position:absolute;
    margin: 0 auto;
    z-index: 1;  
    
    @media ${tablet} {
       position: initial;
       display: block;
    }
`

export const Item = styled.li`
    display: inline-block;

    &:hover ${DropDownContent} {
        transform: translateX(-12px);
        display: block;
    }
    
    @media ${tablet}{
        &:hover ${DropDownContent} {
            display: block;
            transform: none;
            z-index: 0;
        }
    }
    
    @media ${mobileXL}{
        width: 200px;
    }
`

export const ItemButton = styled.button`
    background-color: #06aed5;
    border: none;
    display: flex;
    align-items: center;
    

    @media ${tablet}{
        font-size: 1.5em;
        color: black;
        
        &:hover {
            color: white;
        }
    }
`

export const DropDownLink = styled.a`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: #06aed5;
    
    &:hover {
        background-color: #f1f1f1;
        color: black;
    }
    
    @media ${tablet}{
        width: 25vw;
    }
`

export const MobileArrow = styled.div`
    margin: 6px 0 0 6px;
`