import React from "react";

import { Bold, IntakeDivider, IntakeH4, IntakeLabel, IntakeLabelRow, IntakeRow } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";

export default function EmergencyInfo(emergencyKey){
    return(
        <div key={`emergency${emergencyKey}`} id={`emergency${emergencyKey}`}>
            <IntakeDivider>
                <Bold>
                    <IntakeH4>
                        Emergency Contact {emergencyKey}
                    </IntakeH4>
                </Bold>
            </IntakeDivider>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Emergency Contact First + Last Name
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_name`}/>
                </FlexColDiv>
            </IntakeRow>
            <IntakeRow>
            <FlexColDiv>
                    <IntakeLabel>
                        *Emergency Contact Phone Number
                    </IntakeLabel>
                    <Input type="phone" name={`emergency${emergencyKey}_phone`}/>
                </FlexColDiv>

                <FlexColDiv>
                    <IntakeLabel>
                        *Relationship
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_relation`} />
                </FlexColDiv>
            </IntakeRow>

            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Does this person have permission to make decisions regarding your pet(s)?
                    </IntakeLabel>
                    
                    <IntakeLabelRow>
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_yes`}/>
                            <IntakeLabel>
                                Yes
                            </IntakeLabel>
  
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_no`}/>
                            <IntakeLabel>
                                No
                            </IntakeLabel>
                    </IntakeLabelRow>

                    <IntakeLabel>
                        If yes, type your intials
                        <Input type="text" name={`emergency${emergencyKey}_initials`} />
                    </IntakeLabel>
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}