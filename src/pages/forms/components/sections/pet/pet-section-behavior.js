import React from "react"

//Intake Form - Owner Styles:
import { IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"


/**
 * @component The core of the pet behavior section.
 * @param {*} props storedPetBehavior, btnIndex, setBtnIndex
 */
export default function PetBehaviorsSection(props){
        const { storedPetBehavior, btnIndex, setBtnIndex } = props

        return(
            <IntakeHDiv key={`petSection`}>
                <IntakeH3> 
                    Pet Behavior Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                    {storedPetBehavior}
                </IntakeCol>

                <IntakeRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />

                    <NextPrevBtn
                        next={true}
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                </IntakeRow>
            </IntakeHDiv>
        )
}