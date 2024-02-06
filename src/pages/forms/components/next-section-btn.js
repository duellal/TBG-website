import React from "react";

//Styles:
import { FormBtn } from "../../../styles/owner-form";


export default function NextPrevBtn(props){
    const { 
            next, btnIndex, setBtnIndex 
        } = props;

    const SectionOnClick =  async (event) => {
        event.preventDefault()
        let previous = event.target.name === 'previous'

        let previousSection = () => {
            setBtnIndex(btnIndex - 1)
        }

        let nextSection = () => {
            setBtnIndex(btnIndex + 1)
        }

        if(previous){
            return previousSection()
        }
        else{
            return nextSection()
        }
    }

    return (
        <>
            <FormBtn onClick={event => SectionOnClick(event)} name={ next ? 'next' : 'previous'}>
                { next ? 'Next' : 'Previous' } Section
            </FormBtn>
        </>
    )
}
