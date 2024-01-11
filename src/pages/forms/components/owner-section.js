import React from "react"

//I ntake Form - Owner Styles:
import { IntakeButton, IntakeCol, IntakeH3, IntakeH5, IntakeHDiv, IntakeRow } from '../../../styles/intake-form'

//Child Component:
import OwnerInfo from './owner-info.js'

export default function OwnerSection(props){
        const { ownerBtn, setOwnerBtn, ownerKey, 
                setOwnerKey, storedOwners, setStoredOwners        
        } = props

        //Function to allow user to add 1 more owner:
        const ownerOnClick = async (event) => {
            event.preventDefault()
    
            let toggleOwnerBtn = () => {
                setOwnerBtn(!ownerBtn)
            }
            
            toggleOwnerBtn();
            await setOwnerKey(ownerKey + 1)
            await setStoredOwners([...storedOwners, <OwnerInfo ownerKey={ownerKey} />])
        }
    
        return(
            <div id={`owner_section${ownerKey}`}>
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