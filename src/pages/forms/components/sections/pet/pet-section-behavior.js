import React, { useEffect, useRef, useState } from "react"

//Intake Form - Owner Styles:
import { ButtonRow, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetBehavior from "./pet-behavior"


/**
 * @component The core of the pet behavior section.
 * @param {*} props changeInput, countPets, btnIndex, setBtnIndex, formData, formHTML, setFormHTML
 */
export default function PetBehaviorsSection(props){
        const { changeInput, countPets, btnIndex, setBtnIndex, formData, formHTML, setFormHTML } = props
        let petBehavRef = useRef(null)
        let sectionId = 'pet_behavior_section'
        let [sectionHTML, setSectionHTML] = useState()

        // useEffect(() => {
        //     setSectionHTML({
        //         innerHTML: petBehavRef.current, 
        //         outerHTML: petBehavRef.current.outerHTML
        //     })
        // }, [])

        return(
            <>
                <IntakeHDiv 
                    key={sectionId} 
                    id={sectionId}
                    ref={petBehavRef}
                >
                    <IntakeH3> 
                        Pet Behavior Information
                    </IntakeH3>

                    <AsteriskHeader/>

                    <IntakeCol>
                    {
                            countPets.map((__, index) => {
                                return <PetBehavior
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