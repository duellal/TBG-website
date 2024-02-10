import React from "react"

// Styles:
import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { FlexColDiv, Input } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";

/**
 * @component owner info section labels + inputs
 * @param {*} props - ownerKey, formData
 */
export default function OwnerInfo(props){
    const { ownerKey, formData} = props

    return(
        <IntakeHDiv key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
            <IntakeDivider>
                    <IntakeH4>
                        {ownerKey === 1 ? 'Primary' : 'Secondary'} Owner
                        <br/>
                        Owner {ownerKey}
                    </IntakeH4>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            <FormAsterisk>*</FormAsterisk> First Name
                        </IntakeLabel>
                        <Input 
                            type="text" 
                            name={`owner${ownerKey}_first_name`}
                            required 
                            value={formData[`owner${ownerKey}_first_name`]}
                        />
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                            <FormAsterisk>*</FormAsterisk> Last Name
                            </IntakeLabel>
                            <Input 
                                type="text" 
                                name={`owner${ownerKey}_last_name`} 
                                required
                                value={formData[`owner${ownerKey}_last_name`]}    
                            />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            <FormAsterisk>*</FormAsterisk> 
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
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            <FormAsterisk>*</FormAsterisk> 
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
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Address
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address1`} 
                            required 
                            value={formData[`owner${ownerKey}_address1`]}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address2`}
                            value={formData[`owner${ownerKey}_address2`]}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> City
                        </IntakeLabel>
                        <Input 
                            type="city" 
                            name={`owner${ownerKey}_city`} 
                            required 
                            value={formData[`owner${ownerKey}_city`]}
                       />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            required 
                            value={formData[`owner${ownerKey}_state`]}  
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Zip Code
                        </IntakeLabel>
                        <Input 
                            type="zipcode" 
                            name={`owner${ownerKey}_zipcode`} 
                            required 
                            value={formData[`owner${ownerKey}_zipcode`]}    
                        />
                    </FlexColDiv>
                </IntakeRow>
        </IntakeHDiv>
    )
}