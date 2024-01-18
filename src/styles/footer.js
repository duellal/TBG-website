import styled from "styled-components";
import { devices } from "./constants/device-size";

const { tablet, mobileL } = devices

export const FooterStyle = styled.footer`
    bottom: 0;
    padding: 2% 0;
    margin-top: 1%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(221, 219, 219);

    p, a{
        font-size: 1.5rem;
    }
    
    @media ${mobileL}{
        padding: 10% 0;
        width: 100%;
        justify-content: center;
    }
`

export const FooterInfo = styled.div`
    width: 78%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const FooterFirstCol = styled.div`
    display: flex;
    align-content: stretch;
    flex-wrap: wrap;
    width: 10%;
    min-width: 160px;

    @media ${mobileL}{
       width: 90%;
       justify-content: center;
    }
`

export const DivHours = styled.div`
    max-height: 200px;
    min-height: 150px;

    @media ${mobileL}{
        min-width: 150px;
    }
`

export const DivAdjustHours = styled.div`
    min-height: 275px;

    @media ${mobileL}{
        min-width: 150px;
     }
`

export const FooterContactDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`
export const DivContactIcon = styled.div`
    width: 100%;
`
export const DivContactIconSection = styled.section`
    width: 12%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
`

export const DivContactInfo = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
`

export const DivContactSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`





export const FooterIframe = styled.iframe`
    margin-top: 25px;
    width: 100%;
    height: 350px;
    border: 1px solid black;
`

export const FooterIndvSocials = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3% 0 ;
    align-items: center;
`

export const FooterSecondCol = styled.div`
    display:flex;
    width: 40%;
    align-items: flex-start;
`

export const FooterSocialImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const FooterSocials = styled.div`
    width: 100%;
    text-align: center;
`

export const FooterTitle = styled.div`
    font-size: 2rem;
    font-weight: bolder;
    width: 100%;
`
export const FooterThirdCol = styled.div`
    width: 13%;
    
    .navbar{
        text-align: center;
    }

    .nav-item{
        padding: .25% 0;
        cursor: pointer;
`

export const FooterNavP = styled.p`
    font-size: 2rem;
    font-weight: bolder;
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15%;
    margin-bottom: 3%;
`

export const LogoImg = styled.img`
    width: 80%;
`

export const CopyrightDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const CopyrightName = styled.p`
    text-align: end;
`

export const CopyrightYear = styled.p`
    text-align: left;
    padding-left: 0.5%;
`