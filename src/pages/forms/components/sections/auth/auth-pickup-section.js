import React, { useState } from "react"

//Intake Form - Owner Styles:
import { AuthPickupLabel, ButtonRow, FormBtn, IntakeH3, IntakeHDiv, IntakeRow } from '../../../../../styles/owner-form'
import { FlexColDiv } from "../../../../../styles/contact";

//Components:
import AsteriskHeader from "../../asterisk-header";
import AuthorizedPickup from "./auth-pickup-info"
import NextPrevBtn from "../../next-section-btn";
import { FormExample } from "../../../../../styles/forms";

/**
 * @component The core of the authorized pickup section. Allows user to add up to 5 authorized people.
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData
 */
export default function AuthPickupSection(props){
        const { changeInput, btnIndex, setBtnIndex, formData } = props

        //Authorized Pickup States:
        const [authBtn, setAuthBtn] = useState(true)
        const [authNum, setAuthNum] = useState(1)
        const [authorizedKey, setAuthorizedKey] = useState(2)
        const [countAuthorized, setCountAuthorized] = useState([{}])

        //Function to allow user to add up to 3 emergency contacts:
        const authorizedOnClick = async (event) => {
            event.preventDefault()
    
            let toggleAuthBtn = () => {
                setAuthBtn(!authBtn)
            }
    
            setAuthNum(authNum + 1)
    
            if(authNum === 4){
                toggleAuthBtn()
            }
            await setAuthorizedKey(authorizedKey + 1)
            await setCountAuthorized([...countAuthorized, {}])
        }
    
        return(
            <IntakeHDiv>
                <IntakeH3> 
                    Authorized People to Pickup Your Pets
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeRow>
                    <FlexColDiv>
                        <AuthPickupLabel>
                            First + Last Name
                        </AuthPickupLabel>
                    </FlexColDiv>
                    <FlexColDiv>
                        <AuthPickupLabel>
                            Relationship
                        </AuthPickupLabel>
                    </FlexColDiv>
                    <FlexColDiv>
                        <AuthPickupLabel>
                            Phone Number 
                            <FormExample $auth='true'>
                                ex: (xxx) xxx-xxxx
                            </FormExample>
                        </AuthPickupLabel>
                    </FlexColDiv>
                </IntakeRow>
                        
                {
                    countAuthorized.map((__, index) => {
                        return <AuthorizedPickup 
                                    authKey={index + 1} 
                                    formData={formData}
                                    changeInput={changeInput}
                                />
                    })    
                } 

                <ButtonRow>
                    <NextPrevBtn
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                    />
                    
                    {
                    authBtn &&
                        <FormBtn onClick={(event) => authorizedOnClick(event)}> 
                            Add Authorized Person
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