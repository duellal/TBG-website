import React from "react";

import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeLabelRow, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";

/**
 * @component Emergency info section labels + inputs
 * @param {*} props - changeInput, emergencyKey, formData
 */
export default function EmergencyInfo(props){
    const { changeInput, emergencyKey, formData } = props
    
    return(
        <IntakeHDiv key={`emergency${emergencyKey}`} id={`emergency${emergencyKey}`}>
            <IntakeDivider>
                    <IntakeH4>
                        Emergency Contact {emergencyKey}
                    </IntakeH4>
            </IntakeDivider>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Emergency Contact First + Last Name
                    </IntakeLabel>
                    <Input 
                        type="text" 
                        name={`emergency${emergencyKey}_name`}
                        required
                        value={formData[`emergency${emergencyKey}_name`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
            </IntakeRow>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> 
                        Emergency Contact Phone Number 
                        <FormExample>
                            ex: (xxx) xxx-xxxx
                        </FormExample>
                    </IntakeLabel>
                    <PhoneInput 
                        type="tel" 
                        name={`emergency${emergencyKey}_phone`} 
                        placeholder="(___) ___-____"
                        format="(###) ###-####" 
                        mask="_"  
                        required 
                        value={formData[`emergency${emergencyKey}_phone`]}  
                        onChange={changeInput}
                    />
                </FlexColDiv>

                <FlexColDiv>
                    <IntakeLabel>
                    <FormAsterisk>*</FormAsterisk> Relationship
                    </IntakeLabel>
                    <Input 
                        type="text" 
                        name={`emergency${emergencyKey}_relation`} 
                        required 
                        value={formData[`emergency${emergencyKey}_relation`]}
                        onChange={changeInput}
                    />
                </FlexColDiv>
            </IntakeRow>

            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                    <FormAsterisk>*</FormAsterisk> Does this person have permission to make decisions regarding your pet(s)?
                    </IntakeLabel>
                    
                    <IntakeLabelRow>
                        <IntakeRow>
                            <Input 
                                type="radio" 
                                id={`emergency${emergencyKey}_permission_yes`} 
                                name={`emergency${emergencyKey}_permission`} 
                                value='yes' 
                                checked={formData[`emergency${emergencyKey}_permission`] === 'yes'}
                                onChange={changeInput}
                            />
                                <IntakeLabel>
                                    Yes
                                </IntakeLabel>
    
                            <Input 
                                type="radio"
                                name={`emergency${emergencyKey}_permission`} 
                                id={`emergency${emergencyKey}_permission_no`} 
                                value='no'
                                checked={formData[`emergency${emergencyKey}_permission`] === 'no'}
                                onChange={changeInput}
                            />
                                <IntakeLabel>
                                    No
                                </IntakeLabel>
                        </IntakeRow>
                    </IntakeLabelRow>
                </FlexColDiv>
            </IntakeRow>

        </IntakeHDiv>
    )
}