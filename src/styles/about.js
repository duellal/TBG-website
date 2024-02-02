import styled from "styled-components";
import { CommonH3, CommonInfoSection, CommonStartDiv } from "../styles/commonBDG"
import { CommonP } from "./common-styles";

//Graffiti Banner Image:
export const GraffitiDiv = styled.div`
    margin: -20px 0 0;
`

export const GraffitiImg = styled.img`
    width: 100%;
    height: 600px;
`

//About Page Section
export const AboutStartDiv = styled(CommonStartDiv)`
padding: 2.5% 12.5% 0;
`
export const AboutImg = styled.img`
width: 90%;
height: 400px;
margin-top: 5%;
`

export const AboutInfoSection = styled(CommonInfoSection)`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: justify;
align-items: center;
// border: 1px solid red;
`

export const ValuesSection = styled(AboutInfoSection)`
width: 100%;
// border: 1px solid purple;
`

export const QuoteHeader = styled(CommonH3)`
margin: 10px 0;
text-align: left;
font-size: 2.5rem;
`

export const QuoteBody = styled.blockquote`
font-size: 2rem;
font-style: italic;
margin: 10px 20px;
`

export const QuoteAuthor = styled(CommonP)`
text-align: left;
margin: 20px;
`

//Teams-Careers:
export const TeamStartDiv = styled(AboutInfoSection)`
width: 100%;
margin: 50px 0;
`

export const TeamBioSection = styled(AboutInfoSection)`
width: 100%;
justify-content: space-between;
margin: 0;
`

export const TeamImg = styled(AboutImg)`
width: 40%;
height: auto;
margin: 0;
`

export const TeamBioText = styled.div`
display: flex;
align-items: center;
width: 45%;
`

export const TeamSection = styled(AboutInfoSection)`
width: 100%;
margin: 0;

p{
    width: 100%;
}
`

export const EmailButton = styled.button`
display: flex;
justify-self: center
`