import React from "react";

//Styles:
import { FormBtn } from "../../../styles/owner-form";


/**
 * @component Buttons for going to the previous + next sections
 * @param {*} props next, btnIndex, setBtnIndex, sectionId, formData
 */
export default function NextPrevBtn(props){
    const { 
            next, btnIndex, setBtnIndex, sectionId, formData
        } = props;

    //To go through the sections of the form
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
        else if(sectionId.includes('waiver')){
            const name = formData[`waiver_owner_name`]
            const validName = name.trim().split(' ').length > 1
            
            if(!validName){
                return
            }

            nextSection()
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
