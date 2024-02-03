import styled from "styled-components";
import { bright_red } from "./constants/colors";

export const InfoBtnDiv = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
// border: 5px solid blue;
`

export const IndvInfoBtn = styled.button`
display: inherit;
align-items: center;
height: 20rem;
width: 30rem;
background-color: ${bright_red};
cursor: pointer;
border: 1px solid ${bright_red};
box-shadow: 0 0 20px 1px black;
`

export const ValuesIndvInfoBtn = styled(IndvInfoBtn)`
width: 45%;
height: 30rem;
margin: 2.5%;
// border: 1px solid white;
`

export const BtnTitle = styled.h1`
width: 100%;
font-size: 2rem;    
color: white;
// border: 1px solid black;
`

export const BtnIcon = styled.div`
color: white;
margin: 10px 0;
// border: 1px solid green;
`

export const BtnInfo = styled.p`
width: 100%;
text-wrap: wrap;
color: white;
// border: 1px solid yellow;

@keyframes slideinOpacity{
  0%{
    opacity: 0;
    display: none;
  }

  100%{
    opacity: 1;
    display: block;
  }
}

@keyframes slideoutOpacity{
  0%{
    opacity: 1;
    display: block;
  }

  100%{
    opacity: 0;
    display: none;
  }
}

${props => {
  return props.hover ?
  {
    animationName: 'slideinOpacity',
    animationDuration: '1s', 
    opacity: '1', 
    display: 'block',     
  } : {   
    animationName: 'slideoutOpacity',
    animationDuration: '1s',
    opacity: '0',
    display: 'none'
  }
}}
`

export const InsideBtnDiv = styled.div`
display: inherit;
justify-content: center;
flex-wrap: wrap;
width: 100%;
// border: 1px solid lime;

@keyframes slidein {
    0% {
      margin-bottom: 10px;
      height: 80px;
      align-content: none;
    }

    100% {
      margin-bottom: 20px;
      height: 140px;
      align-content: center;
    }
  }

@keyframes slideout {
    0% {
      margin-bottom: 20px;
      height: 140px;
      align-content: center;
    }

    100% {
      margin-bottom: 10px;
      height: 80px;
      align-content: none;
    }
  }

${props => {
  return props.hover ? 
  {
    margin: '10px 10px 20px',
    animationName: 'slidein',
    animationDuration: '1s',       
    height: '140px',
    alignContent: 'center',
  } : {
    margin: '10px',      
    animationName: 'slideout',
    animationDuration: '1s',
    height: '80px',
    alignContent: 'none',
  }  
}}
`
