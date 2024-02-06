import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeH5, IntakeHDiv, IntakeRow } from '../../../../../styles/new-owner-form'

//Components:
import EmergencyInfo from "./emergency-info"
import NextPrevBtn from "../../next-section-btn"

export default function EmergencySection(props){
        const { emergencyBtn, setEmergencyBtn, emergencyKey, 
                setEmergencyKey, storedEmergencyContacts, setStoredEmergencyContacts,
                emergencyNum, setEmergencyNum, btnIndex, setBtnIndex   
        } = props

        //Function to allow user to add up to 3 emergency contacts:
        const emergencyOnClick = async (event) => {
            event.preventDefault()
    
            let toggleEmergencyBtn = () => {
                setEmergencyBtn(!emergencyBtn)
            }
    
            await setEmergencyNum(emergencyNum + 1)
    
            if(emergencyNum === 2){
                toggleEmergencyBtn()
            }
    
            await setEmergencyKey(emergencyKey + 1)
            await setStoredEmergencyContacts([...storedEmergencyContacts, <EmergencyInfo emergencyKey={emergencyKey} />])
        }    
    
        return(
            <IntakeHDiv id={`emergency_section`}>
                <IntakeH3> 
                    Emergency Contact Information
                </IntakeH3>
                <IntakeH5>
                    In case we can't reach you
                </IntakeH5>
            
                <IntakeCol>
                    {storedEmergencyContacts}
                </IntakeCol> 

                <IntakeRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />

                    {
                        emergencyBtn &&
                            <FormBtn onClick={(event) => emergencyOnClick(event)}> 
                                Add Emergency Contact 
                            </FormBtn>
                    }

                    <NextPrevBtn
                        next
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                </IntakeRow>
            </IntakeHDiv>
        )
}