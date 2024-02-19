import React from "react";

//Functions:
import findSection from "./btn-findSectionFunc";

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

        let previousSection = async () => {
            // await findSection(btnIndex, sectionId)
            setBtnIndex(btnIndex - 1)
        }

        let nextSection = async () => {
            // await findSection(sectionHTML, formHTML, setFormHTML, btnIndex, sectionId)
            setBtnIndex(btnIndex + 1)
        }

        if(!valid && !previous){
            return
        }
        else if(previous){
            previousSection()
        }
        else{
            nextSection()
        }

        return window.scrollTo({
            top: 200,
            behavior: "smooth"
        })
    }


    return (
        <>
            <FormBtn 
                key={`tab-${btnIndex}`}
                onClick={event => SectionOnClick(event)} 
                name={ next ? 'next' : 'previous'}
            >
                { next ? 'Next' : 'Previous' } Section
            </FormBtn>
        </>
    )
}
