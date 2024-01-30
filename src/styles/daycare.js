import styled from "styled-components";
import { PricesTextSection } from "./commonBDG";


export const DcPackageDiv = styled.div`
width: 300px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 10px 0 15px 0;
`

export const DcPackageP = styled.p`
width: 100%;
font-size: 2rem;
// margin: 5px 0;
text-align: center;
`

export const DcAsteriskDiv = styled.div`
width: 100%;
margin-top: 15px;
`
export const DcPackagePAsterisk = styled.p`
width: 100%;
font-size: 1.6rem;
margin: 5px 0;
text-align: center;
`

export const DcPricesDiv = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
jusitfy-content: space-between;
align-items: center;
// margin: 10px 0;
`

export const DcPricesTextSection = styled(PricesTextSection)`
height: 200px;
`