import styled from "styled-components";

export const CommonH1 = styled.h1`
width: 100%;
text-align: center;
`

export const CommonH2 = styled.h2`
width: 100%;
text-align: center;
margin-top: 40px
`

export const CommonH3 = styled.h3`
text-align: center;
width: 100%;
font-size: 3rem;
` 

export const CommonH4 = styled.h4`
font-size: 2.2rem;
`

//Start of the Page:
export const CommonStartDiv = styled.div`
padding: 2.5% 10% 5%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

//Information Sections:
export const CommonInfoSection = styled.div`
text-align: center;
margin: 40px;
`

//What we value section:
export const ValuesSection = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: left;
width: 100%;
margin-top: 15px;
`

export const ValuesText = styled.div`
display: flex;
justify-content: center;
width: 40%;
align-items: center;
flex-wrap: wrap;
margin-top: 25px;
`
export const ValuesP = styled.p`
width: 100%;
margin-bottom: 5px;
`

export const ValuesItems = styled.div`
font-size: 1.5rem;
`

export const ValuesLi = styled.li`
width: 100%;
`

//Prices Section:
export const PricesDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
jusitfy-content: space-between;
align-items: center;
// margin: 10px 0;
`

export const PricesSection = styled.div`
padding-top: 3%;
display: inherit;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

export const HeaderSection = styled.div`
width: 100%;
display: inherit;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 10px;
`

export const PricesImg = styled.img`
min-width: 25%;    
max-width: 25%;
height: 300px;
`

export const PricesTextSection = styled.div`
display: flex;
flex-wrap: wrap;
align-items: space-between;
width: 50%;
padding: 15px 65px;
height: 300px;
`

export const PricesTextLeft = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-between;
width: 100%;
height: 60px;
`

export const PricesTextRight = styled(PricesTextLeft)`
justify-content: flex-end;
text-align: end;
`

export const PricesP = styled.p`
width: 100%
`

export const PricesAsteriskDiv = styled.div`
width: 100%;
margin-top: 15px;
`

export const PricesAsteriskP = styled.p`
width: 100%;
font-size: 1.6rem;
margin: 5px 0;
text-align: center;
`

//Requirements Section:
export const RequirementSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
margin-top: 100px;
`

export const RequirementH2 = styled.h2`
width: 50%;
margin-top: 20px;
font-weight: 500;
font-size: 2.5rem;
`

export const RequirementH3 = styled.h3`
// margin-top: 2%;
margin: 40px 0 20px;
`

export const RequirementChecklistSection = styled.div`
width: 80%;
margin-top: 20px;
`

export const RequireChecklistDivs = styled.div`
margin: 15px 0;
`

export const RequirementsP = styled.p`
margin: 20px 0;
`

export const RequirementsList = styled.li`
text-align: left;
margin: 0 0 1% 24%;
list-style: square;
`

export const RequirementBtn = styled.button`
margin-top: 2%
`