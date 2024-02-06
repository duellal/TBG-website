import React from "react"

//Intake Form - Owner Styles:
import { FormBtn, IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../styles/new-owner-form'

//Child Component:
import PetInfo from "./pet-info"

export default function PetSection(props){
        const { petBtn, setPetBtn, petKey,
                setPetKey, storedPets, setStoredPets, 
                petNum, setPetNum        
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
            await setStoredPets([...storedPets, <PetInfo petKey={petKey}/>])
        }
    
        return(
            <IntakeHDiv key={`petSection`}>
                <IntakeH3> 
                    Pet Information
                </IntakeH3>

                <IntakeCol>
                    {storedPets}
                </IntakeCol>

                <IntakeRow>
                    {petBtn && 
                        <FormBtn onClick={(event) => petOnClick(event)}>
                        Add Pet
                        </FormBtn>
                    }
                </IntakeRow>
            </IntakeHDiv>
        )
}