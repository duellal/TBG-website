import React from "react";

//Intake Form Styles:
import { IntakeRow, PhoneInput } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";


export default function AuthorizedPickup(props){
    const { authorizedKey } = props

    const requiredBool = () => {
        let authName = document.getElementsByName(`auth${authorizedKey}_name`)

        if(authName){
            return true
        }

        return false
    }

    return (
        <div key={`auth${authorizedKey}`} id={`auth${authorizedKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_name`} />
                </FlexColDiv>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_relation`} />
                </FlexColDiv>
                <FlexColDiv>
                    <PhoneInput 
                        type="tel" 
                        name={`auth${authorizedKey}_phone`} 
                        placeholder="(___) ___-____"
                        format="(###) ###-####" 
                        mask="_" 
                        required={requiredBool}/>
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}