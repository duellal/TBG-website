import styled from "styled-components";

export const FooterStyle = styled.footer`
    bottom: 0;
    padding: 1% 0 2% 0;
    margin-top: 1%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(221, 219, 219);

    p, a{
        font-size: 1.5rem;
    }
`

export const FooterInfo = styled.div`
    width: 78%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

export const FooterContactDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`

export const FooterFirstCol = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 15%;
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