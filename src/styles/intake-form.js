/* Title: New Owner Form 
Blurb: Intake forms and medication forms will be filled out at time of checkin

Buttons on intake form: make them stand out
    - red or blue button
    - on hover change gradient of color
    - add shadow behind it

Intake Form: 
Title and blurb outside of the form box (own div)
Make it like the Green beagle lodge with a sections + next -> submit
Intake Form 
    - take out pets on liability waiver
    -Emergency Contact: Take out initials
    - Required info: (Required) in red italics

*/

import styled from "styled-components";
import { PatternFormat } from "react-number-format";


export const IntakeSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
`

export const IntakeHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0 0 0;
`

export const IntakeCard = styled.div`
    margin: 30px;
    padding: 12px;
    background-color: #dedede;
    width: 700px;
`

export const IntakeForm = styled.form`
    height: auto;
    margin: auto;
    padding: 50px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
`

export const IntakeDivider = styled.div`
    margin: 12px 0;
    width: 100%;
`

export const IntakePDF = styled.div`
    flex-wrap: wrap;
    width: 60%;
`

export const IntakeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: flex-end;
    text-align: center;
    margin: 10px 0;
    width: 100%;
`

export const IntakeLabelRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeHealthLabel = styled.label`
    font-size: 16px;
    text-align: left;
    margin: 0 6px;
`

export const IntakeHealthInput = styled(PatternFormat)`
    font-size: 15px;
    text-align: left;
    width: 70%;
    margin: 6px;
`

export const IntakeButton = styled.button`
    margin: 2% 0;
    padding: 5px 10px;
`

export const IntakeLink = styled.a`
    &:hover {
        color: green;
        text-decoration: underline;
    }
`

export const IntakeH3 = styled.h3`
    font-size: 2.4rem;
`

export const IntakeH4 = styled.h4`
    font-size: 2rem;
    text-align: left;
`
export const IntakeH5 = styled.h4`
    font-size: 1.8rem;
    margin: 5px 0 20px 0;
`

export const AuthPickupH5 = styled.h4`
    font-size: 1.8rem;
    margin: 5px 0 0 0;
`
export const IntakeHDiv = styled.div`
    grid-template-columns: 1;
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 5;
`

export const IntakeLabel = styled.label`
    font-size: 16px;
    text-align: left;
    margin: 0 6px;
`

export const IntakeP = styled.p`
    width: 500px;
`

export const IntakeCol = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeMessageInput = styled.textarea`
    font-size: 16px;
    padding: 10px;
    height: 40px;
    overflow-y: scroll;
    resize: none;
    scrollbar-gutter: stable both-edges;
`

export const IntakeWaiverDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
    padding: 20px;
    height: 200px;
    overflow-y: scroll;
    background-color: white;
    border: 1px solid black;
`

export const IntakeWaiverP = styled.p`
    font-size: 16px;
    margin-top: 20px;
`
export const SignatureDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    margin: 20px 0;
    background-color: white;
`
export const SignatureBtns = styled.button`
    margin-top: 20px;
    background-color: white;
    border: none;
`

export const CanvasDiv = styled.div`
    border-bottom: 1px solid black
`

export const Controller = styled(CanvasDiv)`
`

// Used for below submit styling:
const Input = styled.input`
    font-size: 15px;
    margin: 6px;
`

export const IntakeSubmitInput = styled(Input)`
    padding: 5px 10px;
    font-size: 16px;
    background-color: #06aed5;
    color: white;
    border: 1px solid black;

    &:hover {
        background-color: #37bedd;
    }
`

export const PhoneInput = styled(PatternFormat)`
    font-size: 15px;
    margin: 6px;
`