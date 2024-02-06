import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeH5, IntakeHDiv, IntakeRow } from '../../../../../styles/new-owner-form.js'

//Components:
import OwnerInfo from './owner-info.js'
import NextPrevBtn from "../../next-section-btn"

export default function OwnerSection(props){
        const { ownerBtn, setOwnerBtn, ownerKey, 
                setOwnerKey, storedOwners, setStoredOwners, 
                ownerSection, setOwnerSection, emergencySection,
                setEmergencySection        
        } = props

        //Function to allow user to add 1 more owner:
        const ownerOnClick = async (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey + 1)
            await setStoredOwners([...storedOwners, <OwnerInfo ownerKey={ownerKey} />])
        }
    
        return(
            <div id={`owner_section`}>
                <IntakeHDiv>
                    <IntakeH3> 
                        Owner Information 
                    </IntakeH3>
    
                    <IntakeH5> 
                        Required information will be starred (*)
                    </IntakeH5>
                        
                    <IntakeCol>
                        {storedOwners}
                    </IntakeCol>
    
                    <IntakeRow>
                        {ownerBtn && 
                            <FormBtn onClick={(event) => ownerOnClick(event)}> 
                                Add Owner 
                            </FormBtn>
                        }
                        <NextPrevBtn 
                            next={true}
                            currentSection={ownerSection}
                            setCurrentSection={setOwnerSection}   
                            nextSection={emergencySection}
                            setNextSection={setEmergencySection}                      
                        />
                    </IntakeRow>  
                </IntakeHDiv> 
            </div>
        )
}