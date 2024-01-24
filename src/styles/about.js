import styled from "styled-components";
import { CommonInfoSection } from "../styles/commonBDG"

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