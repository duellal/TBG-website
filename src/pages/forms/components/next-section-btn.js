import React from "react";

//Styles:
import { FormBtn } from "../../../styles/new-owner-form";


export default function NextPrevBtn(props){
    const { 
            next, currentSection, setCurrentSection, nextSection,
            setNextSection, prevSection, setPrevSection 
        } = props;

    const SectionOnClick =  async (event) => {
        event.preventDefault()

        if(prevSection && nextSection){
            setPrevSection(!prevSection)
            setCurrentSection(!currentSection)
            setNextSection(!nextSection)
        }
        else if(prevSection && !nextSection){
            setPrevSection(!prevSection)
            setCurrentSection(!currentSection)
        }

        setCurrentSection(!currentSection)
        setNextSection(!nextSection)
    }

    return (
        <>
            <FormBtn onClick={event => SectionOnClick(event)}>
                { next ? 'Next' : 'Previous'} Section
            </FormBtn>
        </>
    )
}
