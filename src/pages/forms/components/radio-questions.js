import React from "react"

//Styles:
import { IntakeLabel, IntakeMessageInput, IntakeRow } from "../../../styles/owner-form"
import { FlexColDiv, Input } from "../../../styles/contact"
import { FormAsterisk } from "../../../styles/forms"

/** 
    * The component renders the question + answers. If the user clicks "yes", there is a text input that appears for them to explain their answer more.
    * @component
    * @param {string} htmlFor string
    * @param {string} question string
    * @param {string} example optional string
    * @param {array} answers array of strings as given answers
    * @param {object} formData the current formData object from state
    * @param {function} changeInput function from owner_form component to change the key/value pair of the targeted form input
    * @returns {ReactNode}  a react element that renders the question with radio button answers, + a text input appears if "Yes" is selected
*/
export default function RadioQuestion(props){
    let { changeInput, htmlFor, question, example, options, formData } = props

    //To get all options and capitalize the first letter of the word:
    let mapOptions = options.map(answer => {
        let capitalizeWord = (word) => {
            let firstLetter = word.toUpperCase().charAt(0)
            let remainingLetters = word.slice(1)
            return firstLetter + remainingLetters
        }

        return(
            <div key={`radio_question_${htmlFor}_${answer}`}>
                <IntakeLabel 
                    htmlFor={htmlFor}
                    for={`${htmlFor}_${answer}`}
                >
                    <Input 
                        id={`${htmlFor}_${answer}`}
                        type='radio' 
                        name={htmlFor}
                        value={answer}
                        checked={formData[htmlFor] === answer}
                        required
                        onChange={changeInput}
                    />

                    {capitalizeWord(answer)}
                </IntakeLabel>
            </div>
        )
    }) 

    //Text input box only shows if "Yes" is selected:
    let explainInput = () => {
        return (
            <IntakeRow key={`${htmlFor}_explain`}>
                <FlexColDiv>
                    <IntakeLabel htmlFor={`${htmlFor}_explain`}>
                        <FormAsterisk>*</FormAsterisk> Please explain
                        <IntakeMessageInput 
                            type="text" 
                            name={`${htmlFor}_explain`}
                            value={formData[`${htmlFor}_explain`]}
                            onChange={changeInput}
                            required
                        />
                    </IntakeLabel>
                </FlexColDiv>
            </IntakeRow>
        )
    }

    //Removes the key/value from the formData object:
    let removeExplain = (remove) => {
        delete formData[remove]
    }


    return(
        <IntakeRow key={`radio_${htmlFor}`}>
            <FlexColDiv>
                <IntakeLabel htmlFor={htmlFor}>
                    <FormAsterisk>*</FormAsterisk> 
                    {question}  {example ?
                                    <>
                                        <br/> example
                                    </> : null}
                </IntakeLabel>
                <IntakeRow>
                    {
                        mapOptions
                    }
                </IntakeRow>
                    { 
                        formData[htmlFor] === 'Yes' && 
                        htmlFor.includes('pet') && 
                        !htmlFor.includes('altered') 
                        ?
                        explainInput()
                        : 
                        removeExplain(`${htmlFor}_explain`)
                    }
            </FlexColDiv>
        </IntakeRow>
    )
}