import styled from "styled-components";
import { devices } from "./constants/device-size";

const { laptopL, laptop, laptopS, laptopXS, mobileL, mobileM, mobileS, mobileXL, mobileXLfooter, tablet,tabletL, tabletXL } = devices

export const FooterStyle = styled.footer`
    bottom: 0;
    padding: 2% 0; 
    margin-top: 1%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgb(221, 219, 219);

    p, a, .nav-item {
        font-size: 2.2rem;
    }

    @media ${laptopL}{
        p, a, .nav-item{
            font-size: 1.8rem;
        }
    }

    @media ${laptop}{
        p, a, .nav-item{
            font-size: 1.6rem;
        }
    }

    @media ${tablet}{
        p, a, .nav-item{
            // font-size: 1.4rem;
        }
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
    // border: 1px solid red;

    @media ${laptopXS}{
        width: 70%;
        justify-content: space-between;
    }

    @media ${tabletXL}{
        width: 60%;
        justify-content: center;
    }

    @media ${tabletL}{
        width: 70%;
    }
`

export const FooterTitle = styled.div`
    font-size: 2.8rem;
    font-weight: bolder;
    width: 100%;

    @media ${laptopL}{
        font-size: 2.4rem;
    }

    @media ${laptop}{
        font-size: 2.2rem;
    }

    @media ${laptopS}{
        font-size: 2rem;
    }
`

export const FooterFirstCol = styled.div`
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    width: 220px;
    min-width: 160px;
    height: 660px; 
    // border: 1px solid red;

    @media ${laptopL}{
        width: 185px;
        height: 600px;
    }

    @media ${laptop}{
        width: 175px;
        height: 555px;
    }

    @media ${laptopXS}{
        width: 160px;
        height: 490px;
        align-content: flex-start;
    }

    @media ${tabletXL}{
        width: 80%;
        height: 250px;
    }

    @media ${tablet}{
        width: 90%;
        justify-content: space-evenly;
    }

    @media ${mobileXL}{
       width: 70%;
       justify-content: space-between;
       text-align: center;
    }

    @media ${mobileM}{
        width: 80%;
    }
`

export const DivHours = styled.div`
    max-height: 200px;
    min-height: 150px;
    width: 100%;
    // border: 1px solid blue;

    @media ${tabletXL}{
        width: 50%;
    }

    @media ${mobileXL}{
        min-width: 150px;
    }
`

export const DivAdjustHours = styled.div`
    width: 100%;

    @media ${laptopXS}{
        margin-top: 50px;
    }

    @media ${tabletXL}{
        text-align: right;
        margin: 0;
        width: 50%;
    }

    @media ${mobileXL}{
        min-width: 130px;
     }
`

export const FooterSecondCol = styled.div`
    display:flex;
    width: 550px;
    align-content: space-between;
    height: 580px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    // border: 1px solid purple;

    @media ${laptop}{
        width: 500px;
        height: 555px;
    }

    @media ${laptopS}{
        width: 350px;
    }

    @media ${laptopXS}{
        height: 490px;
        width: 500px;
    }

    @media ${tabletXL}{
        width: 80%;
        height: 505px;
        margin-top: 10px;
    }

    @media ${tablet}{
        width: 90%;
        justify-content: space-around;
        align-items: center;
        height: 430px;
    }

    @media ${mobileXL}{
        width: 90%;
        justify-content: center;
     }
`

// export const FooterContactDiv = styled.div`
//     display:flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-content: space-between;
//     text-align: center;
//     height: 550px;
//     // border: 1px solid purple;

//     @media ${tablet}{
//         justify-content: space-around;
//         align-items: center;
//     }
// `

export const DivContactSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100px;
    // border: 1px solid salmon;

    @media ${laptop}{
        min-height: 90px;
    }

    @media ${tabletXL}{
        margin-top: 10px;
    }

    @media ${tablet}{
        // width: 40%;
        align-items: center;
        max-height: 200px;
        margin: 0;
    }

    @media ${mobileXL}{
        padding-top: 5px;
    }
`

export const DivContactIconSection = styled.section`
    width: 10%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
    // border: 1px solid blue;

    @media ${tablet}{
        min-height: 80px;
        align-content: space-between;
    }
`

export const DivContactIcon = styled.div`
    width: 100%;

    @media ${mobileXL}{
        width: 50px
    }
`

export const DivContactInfo = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1%;
    align-items: center;
    // border: 1px solid indigo;

    @media ${tabletXL}{
        width: 50%;
    }


    @media ${tablet}{
        min-width: 250px;
        min-height: 90px;
    }

    @media ${mobileXL}{
        width: 200px;
    }
`

export const FooterIframe = styled.iframe`
    margin-top: 25px;
    width: 500px;
    height: 350px;
    border: 1px solid black;

    @media ${laptop}{
        width: 500px;
    }

    @media ${laptopXS}{
        margin-top: 0;
    }

    @media ${tablet}{
        max-height: 305px;
    }

    @media (max-width: 450px){
        min-width: 350px;
        max-height: 200px;
    }
`

export const FooterThirdCol = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 200px;
    height: 660px;
    align-content: space-between;
    // border: 1px solid blue;

    .navbar{
        text-align: center;
        width: 100%;
        min-width: 130px;

        @media ${laptopXS}{
            width: 130px;
            border: 1px solid orange;
        }

        @media ${tabletXL}{
            min-height: 100%;
            align-content: center;
            text-align:right;
        }

        @media ${tablet}{
            width: 30%;
        }
    }

    .nav-item{
        height: 25px;
        cursor: pointer;
        padding: 4px 0;
    }

    @media ${laptopL}{
        height: 600px;
    }

    @media ${laptop}{
        width: 170px;
        height: 555px;
    }

    @media ${laptopXS}{
        flex-wrap: nowrap;
        height: 220px;
        width: 100%;
        margin-top: 25px;
        justify-content: space-between;
    }

    @media ${tabletXL}{
        width: 80%;
        justify-content: space-between;

    }

    @media ${tablet}{
        width: 90%;
        align-items: center;
        margin: 20px 0;
        height: 230px;
    }

    @media ${mobileXL}{
        margin-top: 20px;
        width: 50%;
    }

    @media ${mobileXL}{
        margin-bottom: 20px;
    }

    .nav{
        @media ${tablet}{
            min-height: 100%;
            // border: 1px solid purple;
        }
    }
`

export const FooterSocials = styled.div`
    width: 100%;
    min-width: 170px;
    text-align: center;
    border: 1px solid hotpink;

    @media ${laptopXS}{
        width: 170px;
        text-align: left;
    }

    @media ${tablet}{
        width: 30%;
    }
`

export const FooterIndvSocials = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px 0;
    align-items: center;
    // border: 1px solid red;

    @media ${laptopXS}{
        justify-content: flex-start;
    }
`

export const FooterSocialImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media ${laptopXS}{
        margin: 0;
    }

    @media ${mobileXL}{
        margin-bottom: 5px;
    }
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    min-height: 130px;
    border: 1px solid black;

    @media ${laptopXS}{
        align-self: center;
        height: 150px;
    }

    @media ${tabletXL}{
        height: 130px;
    }

    @media ${tablet}{
        width: 30%;
        height: auto;
    }

    @media ${mobileXL}{
        margin: 15px 0;
    }
`

export const LogoImg = styled.img`
    width: 75%;
    // border: 1px solid yellow;

    @media ${laptopXS}{
        width: 100%;
    }
`

export const CopyrightDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`

export const CopyrightName = styled.p`
    text-align: end;
`

export const CopyrightYear = styled.p`
    text-align: left;
    padding-left: 0.5%;
`