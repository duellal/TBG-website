import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetHealth from "./pet-health"

export default function PetHealthSection(props){
        const { petBtn, setPetBtn, petKey,
                setPetKey, storedPetHealth, setStoredPetHealth, 
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
            await setStoredPetHealth([...storedPetHealth, <PetHealth petKey={petKey}/>])
        }
    
        return(
            <IntakeHDiv key={`petSection`}>
                <IntakeH3> 
                    Pet Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                    {storedPetHealth}
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