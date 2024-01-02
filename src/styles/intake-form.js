import styled from "styled-components";

export const IntakeSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
    width: 50%;
`

export const IntakeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeLabelRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const IntakeButton = styled.button`
    margin: 2% 0;
`

export const IntakeLink = styled.a`
    &:hover {
        color: green;
        text-decoration: underline;
    }
`

export const IntakeH3 = styled.h3`
    font-size: 2.4rem;
    margin-bottom: 20px;
    font-weight: bold;
`

export const IntakeH4 = styled.h4`
    font-size: 2rem;
    text-align: left;
`
export const IntakeH5 = styled.h4`
    font-size: 1.8rem;
    margin-top: 15px;
`

export const IntakeHDiv = styled.div`
    grid-template-columns: 1;
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 5;
`

export const IntakeLabel = styled.label`
    font-size: 15px;
    text-align: left;
`

export const IntakeP = styled.p`
    width: 500px;
`

export const IntakeCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`