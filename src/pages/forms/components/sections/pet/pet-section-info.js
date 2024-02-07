import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetInfo from "./pet-info"

export default function PetInfoSection(props){
        const { petBtn, setPetBtn, petKey,
                setPetKey, storedPetInfo, setStoredPetInfo, 
                petNum, setPetNum, btnIndex, setBtnIndex,
                setTabIndex    
        } = props

        //Function to allow user to add up to 3 emergency contacts:
        const petOnClick = async (event) => {
            event.preventDefault()
    
            let togglePetBtn = () => {
                setPetBtn(!petBtn)
            }
    
            await setPetNum(petNum + 1)
    
            if(petNum === 4){
                togglePetBtn()
            }
            await setPetKey(petKey + 1)
            await setStoredPetInfo([...storedPetInfo, <PetInfo petKey={petKey}/>])
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