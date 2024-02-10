import React from "react";

import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeLabelRow, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";

/**
 * @component Emergency info section labels + inputs
 * @param {*} props - emergencyKey, formData
 */
export default function EmergencyInfo(props){
    const { emergencyKey, formData } = props
    
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
                            <Input type="radio" id={`emergency${emergencyKey}_permission_yes`} name={`emergency${emergencyKey}_permission`} value='yes' />
                                <IntakeLabel>
                                    Yes
                                </IntakeLabel>
    
                            <Input type="radio" name={`emergency${emergencyKey}_permission`} id={`emergency${emergencyKey}_permission_no`} value='no'/>
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