import styled from "styled-components";
import { devicesWidth } from "./constants/device-size";
import { bright_red } from "./constants/colors";

const { mobileXL, tablet } = devicesWidth

export const Item = styled.li`
    display: inline-block;
    color: white;
    cursor: pointer;
    font-size: 22.4px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    font-weight: bold;
    text-transform: uppercase;
    
    &:hover{
        color: ${bright_red};
    }
    
    @media ${tablet}{
        font-size: 20px;

        &:hover{
            transform: none;
        }
    }
    
    @media ${mobileXL}{
        font-size: 15px;
    }
`