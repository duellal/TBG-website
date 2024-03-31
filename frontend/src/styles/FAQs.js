import styled from "styled-components";
import { bright_red, muted_bright_red } from "./constants/colors";

export const AllFaqs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    width: 80%;
    box-shadow: 0 0 20px 1px black;
`

export const FaqTitleDiv = styled.div`
    width: 100%;
    background-color: ${bright_red};
    text-align: left;
`

export const FaqTitleH2 = styled.h2`
    color: white;
`

export const FaqExpand = styled.div`
    display: flex;
    flex-wrap: flex;
    justify-content: space-between;
    padding: 2%;
`

export const AccordianTitleDiv = styled.div`
    display: flex;
    flex-wrap: flex;
    justify-content: space-between;
    padding: 2%;
    background-color: ${muted_bright_red};
`

export const AccordianTitleH3 = styled.h3`
    color: white;
    text-align: left;
`

export const AccordianAnswer = styled.p`
    padding: 2%;
    // text-align: left; 
    text-align: justify;
    color: black;
    background-color: #f5f0f6;
`