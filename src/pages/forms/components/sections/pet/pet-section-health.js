import React from "react"

//Intake Form - Owner Styles:
import { ButtonRow, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetHealth from "./pet-health"


/**
 * @component The core of the pet health section.
 * @param {*} props countPets, btnIndex, setBtnIndex, formData
 */
export default function PetHealthSection(props){
        const { countPets, btnIndex, setBtnIndex, formData } = props

        return(
            <IntakeHDiv key={`petSection`}>
                <IntakeH3> 
                    Pet Health Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                {
                        countPets.map((__, index) => {
                            return <PetHealth
                                        petKey={index + 1}
                                        formData={formData}
                                    />
                        })
                    }
                </IntakeCol>

                <ButtonRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />

                    <NextPrevBtn
                        next={true}
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                </ButtonRow>
            </IntakeHDiv>
        )
}