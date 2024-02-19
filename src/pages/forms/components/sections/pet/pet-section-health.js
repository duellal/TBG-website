import React, { useEffect, useRef, useState } from "react"

//Intake Form - Owner Styles:
import { ButtonRow, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetHealth from "./pet-health"


/**
 * @component The core of the pet health section.
 * @param {*} props changeInput, countPets, btnIndex, setBtnIndex, formData, formHTML, setFormHTML
 */
export default function PetHealthSection(props){
        const { changeInput, countPets, btnIndex, setBtnIndex, formData, formHTML, setFormHTML } = props
        let petHealthRef = useRef()
        let sectionId = 'pet_health_section'
        let [sectionHTML, setSectionHTML] = useState()

        useEffect(() => {
            setSectionHTML({
                innerHTML: petHealthRef.current, 
                outerHTML: petHealthRef.current.outerHTML
            })
        }, [])

        return(
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                    ref={petHealthRef}
                >
                    <IntakeH3> 
                        Pet Health Information
                    </IntakeH3>

                    <AsteriskHeader/>

                    <IntakeCol>
                    {
                            countPets.map((__, index) => {
                                return <PetHealth
                                            key={index + 1}
                                            petKey={index + 1}
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