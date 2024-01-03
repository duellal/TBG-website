import React, { useState } from "react"

//I ntake Form - Owner Styles:
import { IntakeButton, IntakeCol, IntakeH3, IntakeH5, IntakeHDiv, IntakeRow } from '../../../styles/intake-form'

//Child Component:
import OwnerInfo from './owner-info.js'

//Variables:
import { ownerForm } from "../form-template.js";

export default function OwnerSection(){
        //state:
        const [ownerBtn, setOwnerBtn] = useState(true)
        const [ownerKey, setOwnerKey] = useState(1)
        const [ownerInfo, editOwner] = useState(ownerForm)
        const [storedOwners, setStoredOwners] = useState([OwnerInfo(ownerKey, changeInput, ownerInfo)])

        //OnChange Function:
        function changeInput(event){
            event.preventDefault()
            let { name, value } = event
            // console.log(`changeInput Name:`, name)
            // console.log(`changeInput Value:`, value)
            editOwner({ ...OwnerInfo, [name]: value })
         }

        //Function to allow user to add 1 more owner:
        const ownerOnClick = async (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey + 1)
            await setStoredOwners([...storedOwners, OwnerInfo(ownerKey)])
        }
    
        return(
            <div id='owner_section'>
                <IntakeHDiv>
                    <IntakeH3> 
                        Owner Information 
                    </IntakeH3>
    
                    <IntakeH5> 
                        Required information will be starred (*)
                    </IntakeH5>
                        
                    <IntakeCol>
                        {storedOwners}
                    </IntakeCol>
    
                    <IntakeRow>
                        {ownerBtn && 
                            <IntakeButton onClick={(event) => ownerOnClick(event)}> 
                                Add Owner 
                            </IntakeButton>
                        }
                    </IntakeRow>  
                </IntakeHDiv> 
            </div>
        )
}