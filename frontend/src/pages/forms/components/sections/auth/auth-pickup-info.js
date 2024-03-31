import React from "react";

//Intake Form Styles:
import { IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";

/**
 * @component label + input for authorized pickup section
 * @param {*} props changeInput, authKey, formData
 */
export default function AuthorizedPickup(props){
    const { changeInput, authKey, formData } = props

    //Phone number is required if a name is inputted:
    const requiredBool = () => {
        let authName = document.getElementsByName(`auth${authKey}_name`)

        if(authName[0] ? authName[0].value.length > 0 : authName.length > 0){
            return true
        }

        return false
    }

    return (
        <div key={`auth${authKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input 
                        type="text" 
                        name={`auth${authKey}_name`} 
                        value={formData[`auth${authKey}_name`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
                <FlexColDiv>
                    <Input 
                        type="text" 
                        name={`auth${authKey}_relation`} 
                        value={formData[`auth${authKey}_relation`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
                <FlexColDiv>
                    <PhoneInput 
                        type="tel" 
                        name={`auth${authKey}_phone`} 
                        placeholder="(___) ___-____"
                        format="(###) ###-####" 
                        mask="_" 
                        required={requiredBool()}
                        value={formData[`auth${authKey}_phone`]}    
                        onChange={changeInput}
                    />
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}