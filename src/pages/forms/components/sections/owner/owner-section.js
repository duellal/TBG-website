import React, { useEffect, useRef, useState } from "react"

//Components:
import OwnerInfo from './owner-info.js'
import NextPrevBtn from "../../next-section-btn.js"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeDivider, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow } from '../../../../../styles/owner-form.js'
import AsteriskHeader from "../../asterisk-header.js"
import { FlexColDiv, OptionInput, SelectInput } from "../../../../../styles/contact.js"
import { FormAsterisk } from "../../../../../styles/forms.js"

//Variables:
import { ownerReferral } from "./owner-referArr.js"


/**
 * @component The core of the owner information section. Allows user to add up to 2 owners.
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML
 */
export default function OwnerSection(props){
        const { changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML } = props
        let ownerRef = useRef()
        let sectionId = `owner_section`
        let [sectionHTML, setSectionHTML] = useState()
        
        //Owner Info States:
        const [ownerKey, setOwnerKey] = useState(1)
        const [ownerBtn, setOwnerBtn] = useState(true)
        const [ownerCountArr, setOwnerCountArr] = useState([{}])

        useEffect(() => {
            setSectionHTML(ownerRef.current.outerHTML)
        }, [sectionHTML])

        //Function to allow user to add 1 more owner:
        const addOwner = async (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey + 1)
            await setOwnerCountArr([...ownerCountArr, {}])
        }

        return (
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                    ref={ownerRef}
                >
                    <IntakeDivider>
                        <IntakeH3> 
                            Owner Information 
                        </IntakeH3>
        
                        <AsteriskHeader/>
                            
                        <IntakeCol>
                        {
                                ownerCountArr.map((__, index) => {
                                    return <OwnerInfo 
                                                key={index + 1}
                                                ownerKey={index + 1} 
                                                formData={formData}
                                                changeInput={changeInput}
                                            />
                                })    
                            } 
                        </IntakeCol> 
                    </IntakeDivider> 
                </IntakeHDiv>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            <FormAsterisk>*</FormAsterisk> How did you hear about us?
                        </IntakeLabel>
                        <SelectInput
                            value={formData['referred_by']}
                            name="referred_by"
                            onChange={changeInput}
                            required
                        >
                            <OptionInput 
                                value=''
                            >
                                Select an option
                            </OptionInput>
                            {
                                ownerReferral.map((item, index) =>
                                    <OptionInput 
                                        key={`referral_${index}`} 
                                        value={item}
                                    >
                                        {item}
                                    </OptionInput> 
                                )
                            }
                        </SelectInput>
                    </FlexColDiv>
                </IntakeRow>

                <ButtonRow>
                    {
                        ownerBtn && 
                            <FormBtn onClick={(event) => addOwner(event)}> 
                                Add Owner 
                            </FormBtn>
                    }
                    <NextPrevBtn 
                        next
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}     
                        formHTML={formHTML}
                        setFormHTML={setFormHTML}   
                        sectionId={sectionId}             
                        sectionHTML={sectionHTML}
                    />
                </ButtonRow> 
            </>
        )
}