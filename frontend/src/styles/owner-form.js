import styled from "styled-components";
import { PatternFormat } from "react-number-format";
import { bright_red, darkGrey } from "./constants/colors";


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
    padding: 12px 12px 0;
    background-color: #dedede;
    width: 900px;
`

export const IntakeForm = styled.form`
    height: auto;
    margin: auto;
    padding: 50px 50px 0;
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
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: flex-end;
    text-align: center;
    padding: 10px 20px;
    width: 100%;
    align-items: flex-start;

    ${props => {
        if(props.auth){
            return {
                'padding': '0 20px'
            }
        }
    }}
`

export const SpeciesRow = styled(IntakeRow)`
padding: 10px 0;
`

export const ButtonRow = styled(IntakeRow)`
justify-content: center;
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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    // border: 1px solid orange;
`

export const FormBtn = styled.button`
    margin: 40px 15px;
    padding: 5px 10px;
    align-items: center;
    background-color: ${bright_red};
    cursor: pointer;
    border: 1px solid ${bright_red};
    box-shadow: 0 0 8px 1px black;
    color: white;
`

export const SendBtn = styled(FormBtn)`
// margin-top: 0;
`

export const IntakeLink = styled.a`
    &:hover {
        color: green;
        text-decoration: underline;
    }
`

export const IntakeH3 = styled.h3`
    font-size: 2.4rem;
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const IntakeH4 = styled.h3`
    font-size: 2.2rem;
    margin: 20px 0;
    padding-top: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid ${darkGrey};
`

export const IntakeH5 = styled.h5`
    font-size: 2rem;
    text-align: left;
`

export const WaiverH5 = styled.h5`
    font-size: 2.4rem;
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const IntakeHDiv = styled.div`
    width: 100%;
    border-top: 1px solid ${darkGrey};
`

export const IntakeLabel = styled.label`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    text-align: left;
    margin: 0 6px;

    // border: 1px solid orange;
`

export const AuthPickupLabel = styled(IntakeLabel)`
    margin-left: 10px;
`

export const IntakeP = styled.p`
    width: 900px;
`

export const IntakeCol = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeMessageInput = styled.textarea`
    width: 100%;
    font-family: 'Georgia, Times, "Times New Roman"';
    font-size: 16px;
    padding: 10px;
    height: 80px;
    overflow-y: scroll;
    resize: none;
    scrollbar-gutter: stable both-edges;
    margin-top: 6px;
`

export const SpeciesTextInput = styled(IntakeMessageInput)`
height: 20px;
margin: 6px 0px 0px 6px;
`

export const SpeciesLabel = styled(IntakeLabel)`
margin: 0;
`

export const IntakeWaiverDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
    padding: 20px;
    height: 490px;
    overflow-y: scroll;
    background-color: white;
    border: 1px solid black;
`

export const IntakeWaiverP = styled.p`
    font-size: 16px;
    margin-top: 20px;
`

export const IntakePolicyP = styled(IntakeWaiverP)`
text-align: justify;
`

export const PolicyBoldUnderline = styled(IntakePolicyP)`
text-decoration: underline;
font-weight: bold;
// border: 1px solid purple;
`

export const PolicyRow = styled.div`
display: flex;
align-items: flex-end;
// border: 1px solid orange;
`

// Used for below submit styling:
const Input = styled.input`
    font-size: 16px;
    margin: 6px;
`

export const PolicyInitialsInput = styled(Input)`
border: none;
border-bottom: 1px solid black;
width: 50px;
`
// const InitialsInput = styled(Input)`

// `

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