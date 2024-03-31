import React, { useState } from "react"

//Components:
import NextPrevBtn from "../../buttons/next-section-btn.js"
import OwnerInfo from './owner-info.js'
// import RemoveAddSection from "../../buttons/remove-addition-btn.js"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeDivider, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow } from '../../../../../styles/owner-form.js'
import AsteriskHeader from "../../asterisk-header.js"
import { FlexColDiv, OptionInput, SelectInput } from "../../../../../styles/contact.js"

//Variables:
import { ownerReferral } from "./owner-referArr.js"


/**
 * @component The core of the owner information section. Allows user to add up to 2 owners.
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData, ownerCountArr, setOwnerCountArr
 */
export default function OwnerSection(props){
        const { changeInput, btnIndex, setBtnIndex, formData, ownerCountArr, setOwnerCountArr } = props
        let sectionId = `owner_section`
        
        //Owner Info States:
        const [ownerKey, setOwnerKey] = useState(1)
        const [ownerBtn, setOwnerBtn] = useState(true)
        
        //Function to allow user to add 1 more owner:
        const addOwner = (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            setOwnerKey(ownerKey + 1)
            setOwnerCountArr([...ownerCountArr, {}])
        }

        return (
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
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
                            How did you hear about us?
                        </IntakeLabel>
                        <SelectInput
                            value={formData['referred_by']}
                            name="referred_by"
                            onChange={event => changeInput(event)}
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
                {/* AFTER MVP: uncomment out to add in a remove additional owner */}
                    {/* {
                        ownerKey > 1 && 
                        <RemoveAddSection 
                            sectionId={sectionId}
                            ownerKey={ownerKey}
                            setOwnerKey={setOwnerKey}
                            formData={formData}
                            setOwnerCountArr={setOwnerCountArr}
                            ownerCountArr={ownerCountArr}
                        />
                    } */}

                    {
                        ownerKey === 1 && 
                            <FormBtn onClick={event => addOwner(event)}> 
                                Add Owner 
                            </FormBtn>
                    }
    
                    <NextPrevBtn 
                        next
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}      
                        sectionId={sectionId}             
                    />
                </ButtonRow> 
            </>
        )
}