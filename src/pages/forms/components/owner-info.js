import React from "react"

//Intake Form - Owner Styles:
import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../styles/new-owner-form'
import { FlexColDiv, Input } from "../../../styles/contact";

export default function OwnerInfo(props){
    const { ownerKey } = props

    return(
        <IntakeHDiv key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
            <IntakeDivider>
                    <IntakeH4>
                        Owner {ownerKey}
                    </IntakeH4>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            *First Name
                        </IntakeLabel>
                        <Input 
                            type="text" 
                            name={`owner${ownerKey}_first_name`}
                            required 
                        />
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                                *Last Name
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
                            *Email <br/> ex: someemail@server.com
                        </IntakeLabel>
                        <Input 
                            type="email" 
                            name={`owner${ownerKey}_email`} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            *Phone <br/> ex: (xxx) xxx-xxxx
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
                            *Address
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
                            *City
                        </IntakeLabel>
                        <Input 
                            type="city" 
                            name={`owner${ownerKey}_city`} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            required />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Zip Code
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