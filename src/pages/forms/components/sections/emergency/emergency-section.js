import React, { useState } from "react"

//Components:
import AsteriskHeader from "../../asterisk-header"
import EmergencyInfo from "./emergency-info"
import NextPrevBtn from "../../next-section-btn"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'


/**
 * @component the core of the emergency contact section. Allows user to add up to 3 emergency contacts
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData, countEmergencyContacts, setCountEmergencyContacts
 */
export default function EmergencySection(props){
        const { changeInput, btnIndex, setBtnIndex, formData, countEmergencyContacts, setCountEmergencyContacts } = props
        let sectionId = `emergency_section`

        //Emergency Contact States:
        const [emergencyKey, setEmergencyKey] = useState(2)
        const [emergencyBtn, setEmergencyBtn] = useState(true)
        const [emergencyNum, setEmergencyNum] = useState(1)

        //Function to allow user to add up to 3 emergency contacts:
        const emergencyOnClick = async (event) => {
            event.preventDefault()
    
            let toggleEmergencyBtn = () => {
                setEmergencyBtn(!emergencyBtn)
            }
    
            setEmergencyNum(emergencyNum + 1)
    
            if(emergencyNum === 2){
                toggleEmergencyBtn()
            }
    
            setEmergencyKey(emergencyKey + 1)
            await setCountEmergencyContacts([...countEmergencyContacts, {}])
        }    
    
        return(
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                >
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
                </IntakeHDiv>

                <ButtonRow>
                        <NextPrevBtn
                            btnIndex={btnIndex}
                            setBtnIndex={setBtnIndex} 
                            sectionId={sectionId}
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
                            sectionId={sectionId}
                        />
                </ButtonRow>
            </>
        )
}