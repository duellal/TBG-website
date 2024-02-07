import React from "react"

//Intake Form - Owner Styles:
import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { FlexColDiv, Input } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms";

export default function OwnerInfo(props){
    const { ownerKey } = props

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
                        />
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                            <FormAsterisk>*</FormAsterisk> Last Name
                            </IntakeLabel>
                            <Input 
                                type="text" 
                                name={`owner${ownerKey}_last_name`} 
                                required />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                        <FormAsterisk>*</FormAsterisk> Email <br/> ex: someemail@server.com
                        </IntakeLabel>
                        <Input 
                            type="email" 
                            name={`owner${ownerKey}_email`} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                        <FormAsterisk>*</FormAsterisk> Phone <br/> ex: (xxx) xxx-xxxx
                        </IntakeLabel>
                        <PhoneInput
                            type="tel" 
                            name={`owner${ownerKey}_phone`} 
                            placeholder="(___) ___-____"
                            format="(###) ###-####" 
                            mask="_" 
                            required />
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
                            required />
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
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Zip Code
                        </IntakeLabel>
                        <Input 
                            type="zipcode" 
                            name={`owner${ownerKey}_zipcode`} 
                            required />
                    </FlexColDiv>
                </IntakeRow>
        </IntakeHDiv>
    )
}