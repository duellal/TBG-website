import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetInfo from "./pet-info"
import PetBehavior from "./pet-behavior"
import PetHealth from "./pet-health"

export default function PetInfoSection(props){
        const { petBtn, setPetBtn, storedPetInfo, setStoredPetInfo, 
                petNum, setPetNum, btnIndex, setBtnIndex,
                setTabIndex, setStoredPetBehavior, storedPetBehavior, 
                setStoredPetHealth, storedPetHealth  
        } = props

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

            await setStoredPetInfo([...storedPetInfo, <PetInfo petKey={petNum} />])
            await setStoredPetBehavior([...storedPetBehavior, <PetBehavior petKey={petNum} />])
            await setStoredPetHealth([...storedPetHealth, <PetHealth petKey={petNum} />])
        }
    
        return(
            <IntakeHDiv key={`PetInfoSection${petNum}`}>
                <IntakeH3> 
                    Pet Preliminary Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                    {storedPetInfo}
                </IntakeCol>

                <IntakeRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                        setTabIndex={setTabIndex}
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
                        setTabIndex={setTabIndex}
                    />
                </IntakeRow>
            </IntakeHDiv>
        )
}