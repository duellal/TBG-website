import styled from "styled-components";
import { bright_red } from "./constants/colors";

export const BoldP= styled.p`
    font-weight: bold;
`

export const Break5pxDiv = styled.div`
    height: 5px;
`
export const Break10pxDiv = styled.div`
    height: 10px;
`

export const UnderlineLink = styled.a`

&:hover{ 
text-decoration: underline;
}
`

export const RedBoxWithShadow = styled.div`
display: flex;
align-items: center;
height: 20rem;
width: 30rem;
background-color: ${bright_red};
cursor: pointer;
border: 1px solid ${bright_red};
box-shadow: 0 0 30px 1px black;
`

