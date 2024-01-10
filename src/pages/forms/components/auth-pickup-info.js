import React from "react";

//Intake Form Styles:
import { IntakeRow } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";


export default function AuthorizedPickup(props){
    const { authorizedKey } = props
    return (
        <div key={`auth${authorizedKey}`} id={`auth${authorizedKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_name`} />
                </FlexColDiv>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_relation`} />
                </FlexColDiv>
                <FlexColDiv>
                    <Input type="tel" name={`auth${authorizedKey}_phone`} pattern="^\(\d{3}\)\s\d{3}-\d{4}"/>
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}