import styled from "styled-components";
import { devicesHeight, devicesWidth } from "./constants/device-size";

const { xxxxl, xxl } = devicesHeight
const {laptopXS, mobileXL, tablet, tabletXL } = devicesWidth

export const Item = styled.li`
    display: inline-block;
    color: white;
    cursor: pointer;
    font-size: 32px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    font-weight: bold;
    text-transform: uppercase;
    
    &:hover{
        text-decoration: underline;
    }

    @media ${laptopXS} and ${xxxxl}{
        font-size: 23.5px;
    }

    @media ${xxl} and ${tabletXL}{
        font-size: 22.4px;
    }

    @media ${laptopXS}{
       &:hover{
            text-decoration: none;
        }
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