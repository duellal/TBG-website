import React from "react"

// Styles:
import { IntakeDivider, IntakeH5, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { FlexColDiv, Input } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";


/**
 * @component owner info section labels + inputs
 * @param {*} props - changeInput, ownerKey, formData
 */
export default function OwnerInfo(props){
    const { changeInput, ownerKey, formData } = props

    return(
        <IntakeHDiv key={`owner${ownerKey}`}>
            <IntakeDivider>
                    <IntakeH5>
                        Owner {ownerKey}
                    </IntakeH5>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            First Name
                        </IntakeLabel>
                        <Input 
                            type="text" 
                            name={`owner${ownerKey}_first_name`}
                            required 
                            value={formData[`owner${ownerKey}_first_name`]}
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                            Last Name
                            </IntakeLabel>
                            <Input 
                                type="text" 
                                name={`owner${ownerKey}_last_name`} 
                                required
                                value={formData[`owner${ownerKey}_last_name`]}    
                                onChange={event => changeInput(event)}
                            />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            
                            Email 
                            <FormExample>
                                ex: someemail@server.com
                            </FormExample>
                        </IntakeLabel>
                        <Input 
                            type="email" 
                            name={`owner${ownerKey}_email`} 
                            required 
                            value={formData[`owner${ownerKey}_email`]}
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            
                            Phone 
                            <FormExample>
                                ex: (xxx) xxx-xxxx
                            </FormExample>
                        </IntakeLabel>
                        <PhoneInput
                            type="tel" 
                            name={`owner${ownerKey}_phone`} 
                            placeholder="(___) ___-____"
                            format="(###) ###-####" 
                            mask="_" 
                            required
                            value={formData[`owner${ownerKey}_phone`]}        
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        Address
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address1`} 
                            required 
                            value={formData[`owner${ownerKey}_address1`]}
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite # - Not Required
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address2`}
                            value={formData[`owner${ownerKey}_address2`]}
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        City
                        </IntakeLabel>
                        <Input 
                            type="city" 
                            name={`owner${ownerKey}_city`} 
                            required 
                            value={formData[`owner${ownerKey}_city`]}
                            onChange={event => changeInput(event)}
                       />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            required 
                            value={formData[`owner${ownerKey}_state`]}  
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        Zip Code
                        </IntakeLabel>
                        <Input 
                            type="zipcode" 
                            name={`owner${ownerKey}_zipcode`} 
                            required 
                            value={formData[`owner${ownerKey}_zipcode`]}    
                            onChange={event => changeInput(event)}
                        />
                    </FlexColDiv>
                </IntakeRow>
        </IntakeHDiv>
    )
}