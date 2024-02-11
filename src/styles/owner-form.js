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


    ${props => {
        if(props.auth){
            return {
                'padding': '0 20px'
            }
        }
    }}
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

export const IntakeHealthInput = styled(PatternFormat)`
    font-size: 15px;
    text-align: left;
    width: 70%;
    margin: 6px;
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

// export const IntakeH4 = styled.h4`
//     font-size: 2rem;
//     text-align: left;
// `

export const IntakeH5 = styled.h5`
    font-size: 2rem;
    text-align: left;
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
    width: 500px;
`

export const IntakeCol = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeMessageInput = styled.textarea`
    width: 100%;
    font-size: 16px;
    padding: 10px;
    height: 80px;
    overflow-y: scroll;
    resize: none;
    scrollbar-gutter: stable both-edges;
    margin-top: 6px;
`

export const IntakeWaiverDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
    padding: 20px;
    height: 530px;
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