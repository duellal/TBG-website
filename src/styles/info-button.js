import styled from "styled-components";
import { bright_red } from "./constants/colors";

export const InfoBtnDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
// border: 1px solid blue;
`

export const IndvInfoBtn = styled.button`
display: inherit;
align-items: center;
height: 20rem;
width: 30rem;
background-color: ${bright_red};
// border: 1px solid orange;
`

export const InsideBtnDiv = styled.div`
display: inherit;
justify-content: center;
flex-wrap: wrap;
margin: 10px;
width: 100%;
// border: 1px solid lime;
`

export const BtnTitle = styled.h1`
width: 100%;
font-size: 2rem;    
color: white;
// border: 1px solid black;
`

export const BtnIcon = styled.div`
// width: 100%;
color: white;
// aspect-ratio: 1;
margin: 10px 0;
// border: 1px solid green;
`

export const BtnInfo = styled.p`
width: 100%;
color: white;
// border: 1px solid yellow;
`