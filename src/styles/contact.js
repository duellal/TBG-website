import styled, { keyframes } from "styled-components";

export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
`

export const ContactHeader = styled.div`
    margin: 48px 0;
`

export const ContactCard = styled.div`
    margin: 30px;
    padding: 12px;
    background-color: #dedede;
`

export const ContactForm = styled.form`
    height: auto;
    margin: auto;
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
`

export const Label = styled.label`
    font-size: 15px;
    margin: 12px;
`

export const Input = styled.input`
    font-size: 15px;
    margin: 6px;
`

export const MessageInput = styled.textarea`
    width: 350px;
    font-size: 15px;
    padding: 10px;
    height: 48px;
`;

export const FlexColDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubmitInput = styled(Input)`
    background-color: #06aed5;
    color: white;
    border: 1px solid black;
    width: 100px;
    &:hover {
        background-color: #37bedd;
    }
`

export const ContactDivider = styled.div`
    margin: 12px 0;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
display: inline-block;
animation: ${rotate} 2s linear infinite;
padding: 5px;
font-size: 1.2rem;
`

export const ErrorText = styled.p`
  color: #cc0000;
`
export const ErrorLink = styled.a`
  color: #cc0000;
  &:hover{
    text-decoration: underline;
  }
`