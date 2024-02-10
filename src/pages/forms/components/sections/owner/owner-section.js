import React from "react"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeDivider, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form.js'

//Components:
import OwnerInfo from './owner-info.js'
import NextPrevBtn from "../../next-section-btn"
import AsteriskHeader from "../../asterisk-header.js"


/**
 * @component The core of the owner information section. Allows user to add up to 2 owners.
 * @param {*} props ownerBtn, setOwnerBtn, ownerKey, setOwnerKey, storedOwners, setStoredOwners, btnIndex, setBtnIndex, formData 
 */
export default function OwnerSection(props){
        const { ownerBtn, setOwnerBtn, ownerKey, 
                setOwnerKey, ownerCountArr, setOwnerCountArr,
                btnIndex, setBtnIndex, formData
        } = props

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

        const deleteSecOwner = async(event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey - 1)
            ownerCountArr.pop()
            await setOwnerCountArr([...ownerCountArr])
        }

        return(
            <IntakeHDiv key={`owner_section${ownerKey}`} id={`owner_section${ownerKey}`}>
                <IntakeDivider>
                    <IntakeH3> 
                        Owner Information 
                    </IntakeH3>
    
                    <AsteriskHeader/>
                        
                    <IntakeCol>
                       {
                            ownerCountArr.map((__, index) => {
                                return <OwnerInfo 
                                            ownerKey={index + 1} 
                                            formData={formData}
                                        />
                            })    
                        } 
                    </IntakeCol>
    
                    <ButtonRow>
                        {ownerBtn && 
                            <FormBtn onClick={(event) => addOwner(event)}> 
                                Add Owner 
                            </FormBtn>
                        }
                        {/* {
                            !ownerBtn &&
                            <FormBtn onClick={event => deleteSecOwner(event)}>
                                Delete Second Owner
                            </FormBtn>
                        } */}
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