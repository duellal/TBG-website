import React from "react"

//Intake Form - Owner Styles:
import { ButtonRow, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../buttons/next-section-btn"
import PetHealth from "./pet-health"


/**
 * @component The core of the pet health section.
 * @param {*} props changeInput, countPets, btnIndex, setBtnIndex, formData
 */
export default function PetHealthSection(props){
        const { changeInput, countPets, btnIndex, setBtnIndex, formData } = props
        let sectionId = 'pet_health_section'

        return(
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
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
                        sectionId={sectionId}
                    />

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