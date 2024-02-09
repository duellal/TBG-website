import React, { useState } from "react"

//Styles:
import { IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from "../../../styles/owner-form"
import { FlexColDiv, Input } from "../../../styles/contact"
import { FormAsterisk } from "../../../styles/forms"


export default function RadioQuestions(props){
    /* 
    ***
    htmlFor: string
    question: string
    options: array of strings
    ***
    */
    let { htmlFor, question, options } = props
    let [selectedOption, setSelectedOption] = useState(null)

    let optionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    //To get all options and capitalize the first letter of the word:
    let optionMap = options.map(answer => {
        let capitalizeWord = (word) => {
            let firstLetter = word.toUpperCase().charAt(0)
            let remainingLetters = word.slice(1)
            return firstLetter + remainingLetters
        }

        return(
            <>
                <IntakeLabel htmlFor={htmlFor}>
                    <Input 
                        type='radio' 
                        value={answer}
                        checked={selectedOption === answer}
                        onChange={optionChange}
                    />
                        {capitalizeWord(answer)}
                </IntakeLabel>
            </>
        )
    }) 

    //Text input box only shows if "Yes" is selected:
    let explainInput = () => {
        return (
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel htmlFor={htmlFor}>
                        <FormAsterisk>*</FormAsterisk> Please explain
                        <IntakeMessageInput 
                            type="text" 
                            name={htmlFor}
                        />
                    </IntakeLabel>
                </FlexColDiv>
            </IntakeRow>
        )
    }


    return(
        <IntakeRow>
            <FlexColDiv>
                <IntakeLabel htmlFor={htmlFor}>
                    <FormAsterisk>*</FormAsterisk> {question}
                </IntakeLabel>
                <IntakeRow>
                    {
                        optionMap
                    }
                </IntakeRow>
                    { 
                        selectedOption === 'yes' ?
                        explainInput()
                        : null
                    }
            </FlexColDiv>
        </IntakeRow>
    )
}