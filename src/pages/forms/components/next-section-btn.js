import React from "react";

//Styles:
import { FormBtn } from "../../../styles/new-owner-form";


export default function NextPrevBtn(props){
    const { next, currentSection, setCurrentSection, nextSection, setNextSection } = props;

    const SectionOnClick =  async (event) => {
        event.preventDefault()

        setCurrentSection(!currentSection)
        setNextSection(!nextSection)
    }

    return (
        <>
            <FormBtn onClick={event => SectionOnClick(event)}>
                { next ? 'Previous' : 'Next'} Section
            </FormBtn>
        </>
    )
}
