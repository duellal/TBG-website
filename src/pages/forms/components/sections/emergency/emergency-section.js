import React, { useState } from "react"

//Components:
import AsteriskHeader from "../../asterisk-header"
import EmergencyInfo from "./emergency-info"
import NextPrevBtn from "../../next-section-btn"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'


/**
 * @component the core of the emergency contact section. Allows user to add up to 3 emergency contacts
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData
 */
export default function EmergencySection(props){
        const { changeInput, btnIndex, setBtnIndex, formData } = props

        //Emergency Contact States:
        const [emergencyKey, setEmergencyKey] = useState(2)
        const [emergencyBtn, setEmergencyBtn] = useState(true)
        const [emergencyNum, setEmergencyNum] = useState(1)
        const [countEmergencyContacts, setCountEmergencyContacts] = useState([{}])
            
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
            await setCountEmergencyContacts([...countEmergencyContacts, {}])
        }    
    
        return(
            <IntakeHDiv key={`emergency_section`}>
                <IntakeH3> 
                    Emergency Contact Information
                </IntakeH3>
                
                <AsteriskHeader/>
            
                <IntakeCol>
                    {
                        countEmergencyContacts.map((__, index) => {
                            return <EmergencyInfo 
                                        key={emergencyKey}
                                        emergencyKey={index + 1} 
                                        formData={formData}
                                        changeInput={changeInput}
                                    />
                        })    
                    } 
                </IntakeCol> 

                <ButtonRow>
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
                </ButtonRow>
            </IntakeHDiv>
        )
}