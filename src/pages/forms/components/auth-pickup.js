import React from "react";

//Intake Form Styles:
import { IntakeRow } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";


export default function AuthorizedPickup(authorizedKey){
    return (
        <div key={`auth${authorizedKey}`} id={`auth${authorizedKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_name`} />
                </FlexColDiv>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_relation`} />
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}