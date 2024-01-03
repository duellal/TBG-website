import React from "react"

//Intake Form Styles:
import { IntakeDivider, IntakeH4, IntakeLabel, IntakeRow } from '../../../styles/intake-form.js'
import { Input, FlexColDiv } from "../../../styles/contact.js";

export default function OwnerInfo(ownerKey){
    return(
        <div key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
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
                        <Input type="text" name={`owner${ownerKey}_first_name`} />
                
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                                *Last Name
                            </IntakeLabel>
                            <Input type="text" name={`owner${ownerKey}_last_name`} />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            *Email
                        </IntakeLabel>
                        <Input type="email" name={`owner${ownerKey}_email`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            *Phone
                        </IntakeLabel>
                        <Input type="tel" name={`owner${ownerKey}_phone`} pattern="^\(\d{3}\)\s\d{3}-\d{4}" required />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Address
                        </IntakeLabel>
                        <Input type='address' name={`owner${ownerKey}_address1`}/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input type='address' name={`owner${ownerKey}_address2`}/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *City
                        </IntakeLabel>
                        <Input type="city" name={`owner${ownerKey}_city`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *State
                        </IntakeLabel>
                        <Input type="state" name={`owner${ownerKey}_state`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Zip Code
                        </IntakeLabel>
                        <Input type="zipcode" name={`owner${ownerKey}_zipcode`} />
                    </FlexColDiv>
                </IntakeRow>
        </div>
    )
}