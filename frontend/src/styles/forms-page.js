import styled from "styled-components";
import { RedBoxWithShadow } from "./common-styles";
import { CommonInfoSection } from "./commonBDG";
import { bright_blue } from './constants/colors'

export const FormPageInfoSection = styled(CommonInfoSection)`
width: 50%;
`

export const FormPageRedBox = styled(RedBoxWithShadow)`
flex-wrap: wrap;
width: 100%;
padding: 3%;
margin: 0 10px;

p, a {
    color: white;
    margin: 1%;
}
`

export const FormPageBtn = styled.button`
width: 100%;
padding: 2%;
margin: 60px 10px;
font-size: 3rem;
background: ${bright_blue};
border: ${bright_blue};
color: white;
cursor: pointer;
`

export const FormPagePdfBtn = styled(FormPageBtn)`
margin: 60px 0 0;
`