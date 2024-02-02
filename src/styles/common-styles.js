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
text-color: inherit;

&:hover{ 
text-decoration: underline;
}
`

export const CommonP = styled.p`
font-weight: normal;
font-size: 2.2rem;
text-transform: none;
width: 100%;
text-align: center;
margin: 10px 0;
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

export const AllRedDropDowns = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
width: 80%;
box-shadow: 0 0 20px 1px black;
background: ${bright_red};
`