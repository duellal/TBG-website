import React from "react";

//Styles:
import { FormBtn } from "../../../styles/owner-form";


/**
 * @component Buttons for going to the previous + next sections
 * @param {*} props next, btnIndex, setBtnIndex 
 */
export default function NextPrevBtn(props){
    const { 
            next, btnIndex, setBtnIndex 
        } = props;

    const SectionOnClick = (event) => {
        event.preventDefault()
        let previous = event.target.name === 'previous'
        let valid = document.forms['new_owner_form'].reportValidity()

        let previousSection = () => {
            setBtnIndex(btnIndex - 1)
        }

        let nextSection = () => {
            setBtnIndex(btnIndex + 1)
        }
        /* 
        Add back in when done with form:
            for validity when clicking previous/next buttons 
        */
        // if(!valid){
        //     return
        // }
        // else 
        if(previous){
            return previousSection()
        }
        else{
            return nextSection()
        }
    }

    return (
        <>
            <FormBtn onClick={SectionOnClick} name={ next ? 'next' : 'previous'}>
                { next ? 'Next' : 'Previous' } Section
            </FormBtn>
        </>
    )
}
