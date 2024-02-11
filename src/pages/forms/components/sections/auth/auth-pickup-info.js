import React from "react";

//Intake Form Styles:
import { IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";

/**
 * @component label + input for authorized pickup section
 * @param {*} props changeInput, authorizedKey, formData
 */
export default function AuthorizedPickup(props){
    const { changeInput, authorizedKey, formData } = props

    const requiredBool = () => {
        let authName = document.getElementsByName(`auth${authorizedKey}_name`)

        if(authName){
            return true
        }

        return false
    }

    return (
        <div key={`auth${authorizedKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input 
                        type="text" 
                        name={`auth${authorizedKey}_name`} 
                        value={formData[`auth${authorizedKey}_name`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
                <FlexColDiv>
                    <Input 
                        type="text" 
                        name={`auth${authorizedKey}_relation`} 
                        value={formData[`auth${authorizedKey}_relation`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
                <FlexColDiv>
                    <PhoneInput 
                        type="tel" 
                        name={`auth${authorizedKey}_phone`} 
                        placeholder="(___) ___-____"
                        format="(###) ###-####" 
                        mask="_" 
                        required={requiredBool()}
                        value={formData[`auth${authorizedKey}_phone`]}    
                        onChange={changeInput}
                    />
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}