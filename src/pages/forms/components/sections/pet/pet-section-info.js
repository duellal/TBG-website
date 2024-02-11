import React, { useState } from "react"

//Intake Form - Owner Styles:
import { ButtonRow, FormBtn, IntakeCol, IntakeH3, IntakeHDiv } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetInfo from "./pet-info"

/**
 * @component The core of the initial pet information section. Allows user to add up to 5 pets + adds the pets to the other 2 pet sections (behavior + health).
 * @param {*} props changeInput, countPets, setCountPets, btnIndex, setBtnIndex, formData
 */
export default function PetInfoSection(props){
        const { changeInput, countPets, setCountPets, btnIndex, setBtnIndex, formData } = props

        //Pet Info States:
        const [petBtn, setPetBtn] = useState(true)
        const [petNum, setPetNum] = useState(2)

        //Function to allow user to add up to 5 pets:
        const petOnClick = async (event) => {
            event.preventDefault()
    
            let togglePetBtn = () => {
                setPetBtn(!petBtn)
            }
    
            await setPetNum(petNum + 1)
    
            if(petNum === 5){
                togglePetBtn()
            }

            await setCountPets([...countPets, {}])
        }
    
        return(
            <IntakeHDiv key={`pet_info_section`}>
                <IntakeH3> 
                    Pet Preliminary Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                    {
                        countPets.map((__, index) => {
                            return <PetInfo
                                        key={index + 1}
                                        petKey={index + 1}
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
                        petBtn && 
                            <FormBtn onClick={(event) => petOnClick(event)}>
                                Add Pet
                            </FormBtn>
                    }

                    <NextPrevBtn
                        next={true}
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                </ButtonRow>
            </IntakeHDiv>
        )
}