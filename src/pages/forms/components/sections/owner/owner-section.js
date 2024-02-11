import React, { useState } from "react"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeDivider, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form.js'

//Components:
import OwnerInfo from './owner-info.js'
import NextPrevBtn from "../../next-section-btn"
import AsteriskHeader from "../../asterisk-header.js"


/**
 * @component The core of the owner information section. Allows user to add up to 2 owners.
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData 
 */
export default function OwnerSection(props){
        const { changeInput, btnIndex, setBtnIndex, formData } = props

        //Owner Info States:
        const [ownerKey, setOwnerKey] = useState(1)
        const [ownerBtn, setOwnerBtn] = useState(true)
        const [ownerCountArr, setOwnerCountArr] = useState([{}])

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

        return(
            <IntakeHDiv key={`owner_section${ownerKey}`}>
                <IntakeDivider>
                    <IntakeH3> 
                        Owner Information 
                    </IntakeH3>
    
                    <AsteriskHeader/>
                        
                    <IntakeCol>
                       {
                            ownerCountArr.map((__, index) => {
                                return <OwnerInfo 
                                            key={ownerKey}
                                            ownerKey={index + 1} 
                                            formData={formData}
                                            changeInput={changeInput}
                                        />
                            })    
                        } 
                    </IntakeCol>
    
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
                        />
                    </ButtonRow>  
                </IntakeDivider> 
            </IntakeHDiv>
        )
}