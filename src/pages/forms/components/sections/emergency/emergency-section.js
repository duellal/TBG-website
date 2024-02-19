import React, { useEffect, useRef, useState } from "react"

//Components:
import AsteriskHeader from "../../asterisk-header"
import EmergencyInfo from "./emergency-info"
import NextPrevBtn from "../../next-section-btn"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'


/**
 * @component the core of the emergency contact section. Allows user to add up to 3 emergency contacts
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML
 */
export default function EmergencySection(props){
        const { changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML, countEmergencyContacts, setCountEmergencyContacts } = props
        let emergencyRef = useRef()
        let sectionId = `emergency_section`
        let [sectionHTML, setSectionHTML] = useState()

        //Emergency Contact States:
        const [emergencyKey, setEmergencyKey] = useState(2)
        const [emergencyBtn, setEmergencyBtn] = useState(true)
        const [emergencyNum, setEmergencyNum] = useState(1)

        // useEffect(() => {
        //     setSectionHTML({
        //         innerHTML: emergencyRef.current, 
        //         outerHTML: emergencyRef.current.outerHTML
        //     })
        // }, [])
            
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
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                    ref={emergencyRef}
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
                            formHTML={formHTML}
                            setFormHTML={setFormHTML} 
                            sectionId={sectionId}
                            sectionHTML={sectionHTML}
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
                            formHTML={formHTML}
                            setFormHTML={setFormHTML} 
                            sectionId={sectionId}
                            sectionHTML={sectionHTML}
                        />
                </ButtonRow>
            </>
        )
}