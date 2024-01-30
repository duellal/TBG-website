import styled from "styled-components";
import { devices } from "./constants/device-size";
import { bright_red } from "./constants/colors";

const { mobileXL, tablet } = devices

export const Item = styled.li`
    display: inline-block;
    color: white;
    cursor: pointer;
    font-size: 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s;
    
    &:hover{
        transform: scale(1.1);
        color: ${bright_red};
    }
    
    @media ${tablet}{
        &:hover{
            transform: none;
        }
    }
    
    @media ${mobileXL}{
        width: 200px;
    }
`