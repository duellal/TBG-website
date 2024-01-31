import styled from "styled-components";
import { bright_red, muted_bright_red, pastel_bright_red } from "./constants/colors";

export const FaqSection = styled.div`
    padding: 2.5% 10% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`

export const FaqH1 = styled.h1`
width: 90%;
`

export const AllFaqs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
`

export const FaqTitleDiv = styled.div`
    width: 100%;
    background-color: ${bright_red};
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

export const FaqQuestionDiv = styled.div`
    display: flex;
    flex-wrap: flex;
    justify-content: space-between;
    padding: 2%;
    background-color: ${muted_bright_red};
`

export const FaqQuestionH3 = styled.h3`
    color: white;
    text-align: left;
`

export const FaqAnswer = styled.p`
    padding: 2%;
    text-align: left; 
    color: white;
    background-color: ${pastel_bright_red};
`