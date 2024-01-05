import React, { useState } from "react"

//I ntake Form - Owner Styles:
import { IntakeButton, IntakeCol, IntakeH3, IntakeH5, IntakeHDiv, IntakeRow, IntakeSection } from '../../../styles/intake-form'

//Child Component:
import EmergencyInfo from "./emergency-info"

export default function EmergencySection(props){
        const { form, emergencyBtn,
                setEmergencyBtn, emergencyKey, setEmergencyKey,
                storedEmergencyContacts, setStoredEmergencyContacts,
                emergencyNum, setEmergencyNum        
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
            <IntakeHDiv id={`emergency_section${emergencyKey}`}>
                <IntakeHDiv>
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
                        {emergencyBtn &&
                            <IntakeButton onClick={(event) => emergencyOnClick(event)}> 
                            Add Emergency Contact 
                            </IntakeButton>
                        }
                    </IntakeRow>
                </IntakeHDiv>
            </IntakeHDiv>
        )
}