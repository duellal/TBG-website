import React from "react";

//Components:
import RadioQuestion from "../../radio-explainations";

//Styles:
import { IntakeDivider, IntakeH5, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormExample } from "../../../../../styles/forms";


/**
 * @component Emergency info section labels + inputs
 * @param {*} props - changeInput, emergencyKey, formData
 */
export default function EmergencyInfo(props){
    const { changeInput, emergencyKey, formData } = props
    
    return(
        <IntakeHDiv key={`emergency${emergencyKey}`}>
            <IntakeDivider>
                    <IntakeH5>
                        Emergency Contact {emergencyKey}
                    </IntakeH5>
            </IntakeDivider>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        Emergency Contact First + Last Name
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
                    Relationship
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
                    <RadioQuestion
                        key={`emergency${emergencyKey}_permission`}
                        htmlFor={`emergency${emergencyKey}_permission`}
                        question={`Does this person have permission to make decisions regarding your pet(s)?`}
                        options={['Yes', 'No']}
                        formData={formData}
                        changeInput={changeInput}
                    />
                </FlexColDiv>
            </IntakeRow>

        </IntakeHDiv>
    )
}