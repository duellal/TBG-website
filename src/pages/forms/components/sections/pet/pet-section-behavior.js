import React from "react"

//Intake Form - Owner Styles:
import { IntakeCol, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'

//Components:
import AsteriskHeader from "../../asterisk-header"
import NextPrevBtn from "../../next-section-btn"
import PetBehavior from './pet-behavior'

export default function PetBehaviorsSection(props){
        const { storedPetBehavior, setStoredPetBehavior, 
                petNum, btnIndex, setBtnIndex, setTabIndex    
        } = props

        //Adding pet behavior for number of pets added on information page:
        let addPets = () => {
            console.log(`PetNum:`, petNum)
            if(petNum > 1){
                for(let i=2; i < (petNum + 2); i++)
                setStoredPetBehavior([...storedPetBehavior, <PetBehavior petKey={i} />])
            }

            console.log(`Does this go through?`)
            console.log(`stored Pet behavior:`, storedPetBehavior)
            return storedPetBehavior
        }
    
        return(
            <IntakeHDiv key={`petSection`}>
                <IntakeH3> 
                    Pet Behavior Information
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeCol>
                    {addPets()}
                </IntakeCol>

                <IntakeRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                        setTabIndex={setTabIndex}
                    />

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