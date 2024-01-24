import styled from "styled-components";

export const CommonStartDiv = styled.div`
    padding: 2.5% 10% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CommonInfoSection = styled.div`
    text-align: center;
    margin: 2% 0;
`

export const CommonH1 = styled.h1`
width: 100%;
text-align: center;
`

export const CommonH2 = styled.h2`
width: 100%;
text-align: center;
margin: 3% 0;
`

export const CommonH3 = styled.h3`
text-align: center;
width: 100%;
font-size: 3rem;
` 

export const CommonH4 = styled.h4`
font-size: 2.2rem;
`

export const ValuesSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const  ValuesImgSection = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
`

export const ValuesImg = styled.img`
    min-width: 100%;
    max-height: 300px;
`

export const ValuesText = styled.div`
display: flex;
justify-content: center;
width: 40%;
height: 25%;
align-items: center;
flex-wrap: wrap;
`
export const ValuesP = styled.p`
width: 100%;
`

export const ValuesItems = styled.div`
    font-size: 1.5rem;
`

export const ValuesLi = styled.li`
width: 100%;
`

export const PricesDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
padding-top: 12%;
`

export const PricesTop = styled.div`
padding-top: 3%;
display: inherit;
`

export const PricesBottom = styled.div`
display: inherit;
justify-content: space-between;
`

export const PricesImg = styled.img`
min-width: 300px;
    max-width: 300px;
    height: 300px;
`

export const PricesTextSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
padding: 1%;
`

export const PricesTextLR = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 60px;
`

export const PricesTextRight = styled(PricesTextLR)`
justify-content: flex-end;
    text-align: end;
`

export const PricesP = styled.p`
width: 100%
`