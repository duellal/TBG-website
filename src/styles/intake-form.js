import styled from "styled-components";

export const IntakeSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
`

export const IntakeHeader = styled.div`
    margin: 48px 0;
`

export const IntakeCard = styled.div`
    margin: 30px;
    padding: 12px;
    background-color: #dedede;
    width: 50%;
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
    width: 100%;
    justify-content: flex-start;
    display: flex;
    margin-bottom: 20px;
    font-weight: bold;
`

export const IntakeH4 = styled.h4`
    font-size: 2rem;
    width: 100%;
    justify-content: flex-start;
    display: flex;
`

export const IntakeHDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`