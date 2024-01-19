import styled from "styled-components";
import { devices } from "./constants/device-size";

const { mobileM, mobileL, mobileXL } = devices

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
    
    @media ${mobileXL}{
        padding: 10% 0;
    }
`

export const FooterInfo = styled.div`
    width: 78%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media ${mobileM}{
        width: 90%;
    }
`

export const FooterFirstCol = styled.div`
    display: flex;
    align-content: stretch;
    flex-wrap: wrap;
    width: 10%;
    min-width: 160px;

    @media ${mobileXL}{
       width: 70%;
       justify-content: center;
       text-align: center;
    }

    @media ${mobileM}{
        width: 80%;
    }
`

export const DivHours = styled.div`
    max-height: 200px;
    min-height: 150px;

    @media ${mobileXL}{
        min-width: 150px;
    }
`

export const DivAdjustHours = styled.div`
    min-height: 260px;

    @media ${mobileXL}{
        min-width: 150px;
     }
`

export const FooterSecondCol = styled.div`
    display:flex;
    width: 40%;
    align-items: flex-start;

    @media ${mobileXL}{
        width: 90%;
        justify-content: center;
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

    @media ${mobileXL}{
        width: 50px;
    }
`
export const DivContactIconSection = styled.section`
    width: 12%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;

    @media ${mobileL}{
        width: 100%;
    }
`

export const DivContactInfo = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;

    @media ${mobileXL}{
        width: 200px;
    }
`

export const DivContactSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    @media ${mobileXL}{
        padding-top: 5px;
    }
`

export const FooterIframe = styled.iframe`
    margin-top: 25px;
    min-width: 402px;
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

export const FooterSocialImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media ${mobileXL}{
        margin-bottom: 5px;
    }
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

    @media ${mobileXL}{
        margin-top: 20px;
        width: 50%;
        // border: 1px solid purple;
    }
    
    .navbar{
        text-align: center;
    }

    @media ${mobileXL}{
        margin-bottom: 20px;
    }

    .nav-item{
        padding: .25% 0;
        cursor: pointer;
    }
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

    @media ${mobileXL}{
        margin: 15px 0;
    }
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