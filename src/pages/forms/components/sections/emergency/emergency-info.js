import React from "react";

import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeLabelRow, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";

export default function EmergencyInfo(props){
    const { emergencyKey } = props
    
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
                    <Input type="text" name={`emergency${emergencyKey}_name`} required />
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
                        required />
                </FlexColDiv>

                <FlexColDiv>
                    <IntakeLabel>
                    <FormAsterisk>*</FormAsterisk> Relationship
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_relation`} required />
                </FlexColDiv>
            </IntakeRow>

            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                    <FormAsterisk>*</FormAsterisk> Does this person have permission to make decisions regarding your pet(s)?
                    </IntakeLabel>
                    
                    <IntakeLabelRow>
                        <Input type="radio" id={`emergency${emergencyKey}_permission_yes`} name={`emergency${emergencyKey}_permission`} value='yes' />
                            <IntakeLabel>
                                Yes
                            </IntakeLabel>
  
                        <Input type="radio" name={`emergency${emergencyKey}_permission`} id={`emergency${emergencyKey}_permission_no`} value='no'/>
                            <IntakeLabel>
                                No
                            </IntakeLabel>
                    </IntakeLabelRow>

                    <IntakeLabel id="yes-show">
                    <FormAsterisk>*</FormAsterisk> Owner's intials (ex: HJ or HEJ) 
                        <Input type="text" name={`emergency${emergencyKey}_initials`} pattern="^[A-Z]{2}$|^[A-Z]{3}$" required />
                    </IntakeLabel>
                
                </FlexColDiv>
            </IntakeRow>
        </IntakeHDiv>
    )
}