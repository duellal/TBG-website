import React, { useEffect, useRef, useState } from "react"

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
 * @param {*} props changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML
 */
export default function AuthPickupSection(props){
        const { changeInput, btnIndex, setBtnIndex, formData, formHTML, setFormHTML  } = props
        let authRef = useRef(null)
        let sectionId = 'auth_section'
        let [sectionHTML, setSectionHTML] = useState()

        //Authorized Pickup States:
        const [authBtn, setAuthBtn] = useState(true)
        const [authNum, setAuthNum] = useState(1)
        const [authKey, setAuthKey] = useState(2)
        const [countAuth, setCountAuth] = useState([{}])

        useEffect(() => {
            setSectionHTML(authRef.current.outerHTML)
        }, [sectionHTML])

        //Function to allow user to add up to 3 emergency contacts:
        const authOnClick = async (event) => {
            event.preventDefault()
    
            let toggleAuthBtn = () => {
                setAuthBtn(!authBtn)
            }
    
            setAuthNum(authNum + 1)
    
            if(authNum === 4){
                toggleAuthBtn()
            }
            await setAuthKey(authKey + 1)
            await setCountAuth([...countAuth, {}])
        }
    
        return(
            <IntakeHDiv 
                key={sectionId} 
                id={sectionId} 
                ref={authRef}
            >
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
                    countAuth.map((__, index) => {
                        return <AuthorizedPickup 
                                    key={index + 1}
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
                        formHTML={formHTML}
                        setFormHTML={setFormHTML} 
                        sectionId={sectionId}
                        sectionHTML={sectionHTML}
                    />
                    
                    {
                    authBtn &&
                        <FormBtn onClick={(event) => authOnClick(event)}> 
                            Add Authorized Person
                        </FormBtn>
                    }  

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
        </IntakeHDiv>
    )
}