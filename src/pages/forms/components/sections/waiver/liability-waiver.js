import React from "react";

//Components:
import AsteriskHeader from "../../asterisk-header.js";
import NextPrevBtn from "../../next-section-btn.js";

//Liability Waiver Styles:
import { ButtonRow, IntakeH3, IntakeH4, IntakeHDiv, IntakeLabel, IntakePolicyP, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, PolicyBoldUnderline, PolicyInitialsInput, PolicyRow, WaiverH5, 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv } from "../../../../../styles/contact";

//Waiver Info:
import { cancellationAcknowledgeStatement, liabilityAcknowledgeStatement, liabilityP1, liabilityP2, waiverAcknowledgeHeader, cancelP1, cancelP2, cancelP3, cancelP4, cancelP5, cancelP6, cancelP7, cancelP8, cancelP9, cancelP10, cancelP11, } from './waiver-text.js'

/**
 * @component The liability waiver section with labels + inputs
 * @param {*} props changeInput, formData, btnIndex, setBtnIndex
 */
export default function LiabilityWaiver(props){
    const { changeInput, formData, btnIndex, setBtnIndex } = props
    let sectionId = `waiver_section`

    return (
        <>
            <IntakeHDiv 
                key={sectionId}
                id={sectionId}
            >
                <IntakeH3>
                    Waivers
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeH4>
                    Liability Waiver
                </IntakeH4>
                
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeWaiverDiv>
                            <IntakePolicyP>
                                {liabilityP1}
                            </IntakePolicyP>
                            <IntakePolicyP>
                                {liabilityP2}
                            </IntakePolicyP>
                        </IntakeWaiverDiv>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <WaiverH5>
                            {waiverAcknowledgeHeader}
                        </WaiverH5>
                        <IntakeWaiverP style={{margin: '0px'}}>
                            <Input 
                                type="checkbox" 
                                name="liability_owner_acknowledgement" 
                                value={formData["liability_owner_acknowledgement"]}
                                checked={formData['liability_owner_acknowledgement'] === "true"}
                                onChange={changeInput}
                                required 
                            />
                            {liabilityAcknowledgeStatement} 
                        </IntakeWaiverP>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeH4>
                    Cancellation Policy
                </IntakeH4>
                
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeWaiverDiv>
                            <IntakePolicyP>
                                {cancelP1}
                            </IntakePolicyP>

                            {/* Grooming */}
                            <IntakePolicyP>
                                <PolicyRow>
                                    <PolicyInitialsInput 
                                        type="text"
                                        name="grooming_policy_initials"
                                        htmlFor="grooming_policy_initials"
                                        value={formData['grooming_policy_initials']?.toUpperCase()}
                                        onChange={changeInput}
                                        format=""
                                        required
                                    />
                                    <PolicyBoldUnderline>
                                        {cancelP2} 
                                    </PolicyBoldUnderline>
                                </PolicyRow>
                                {cancelP3}
                            </IntakePolicyP>

                            {/* Daycare */}
                            <IntakePolicyP>
                                <PolicyRow>
                                        <PolicyInitialsInput 
                                            type="text"
                                            name="daycare_policy_initials"
                                            htmlFor="daycare_policy_initials"
                                            value={formData['daycare_policy_initials']?.toUpperCase()}
                                            onChange={changeInput}
                                            format=""
                                            required
                                        />
                                    <PolicyBoldUnderline>
                                        {cancelP4}
                                    </PolicyBoldUnderline>
                                </PolicyRow>
                                {cancelP5}
                            </IntakePolicyP>

                            {/* Boarding */}
                            <IntakePolicyP>
                                <PolicyRow>
                                    <PolicyInitialsInput 
                                        type="text"
                                        name="boarding_policy_initials"
                                        htmlFor="boarding_policy_initials"
                                        value={formData['boarding_policy_initials']?.toUpperCase()}
                                        onChange={changeInput}
                                        format=""
                                        required
                                    />
                                    <PolicyBoldUnderline>
                                        {cancelP6}
                                    </PolicyBoldUnderline>
                                </PolicyRow>
                                {cancelP7}
                            </IntakePolicyP>

                            <IntakePolicyP>
                                {cancelP8}
                            </IntakePolicyP>

                            <IntakePolicyP>
                                {cancelP9}
                            </IntakePolicyP>

                            {/* Modifications to Reservations */}
                            <IntakePolicyP>
                                <PolicyRow>
                                    <PolicyInitialsInput 
                                        type="text"
                                        name="change_reservation_policy_initials"
                                        htmlFor="change_reservation_policy_initials"
                                        value={formData['change_reservation_policy_initials']?.toUpperCase()}
                                        onChange={changeInput}
                                        format=""
                                        required
                                    />
                                    <PolicyBoldUnderline>
                                        {cancelP10}
                                    </PolicyBoldUnderline>
                                </PolicyRow>
                                    {cancelP11}
                            </IntakePolicyP>
                        </IntakeWaiverDiv>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <WaiverH5>
                            {waiverAcknowledgeHeader}
                        </WaiverH5>
                        
                        <IntakeWaiverP style={{margin: '0 0 20px'}}>
                            <Input 
                                type="checkbox" 
                                name="cancel_owner_acknowledgement" 
                                value={formData["cancel_owner_acknowledgement"]}
                                checked={formData['cancel_owner_acknowledgement'] === "true"}
                                onChange={changeInput}
                                required 
                            />
                            {cancellationAcknowledgeStatement} 
                        </IntakeWaiverP>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner_printed_name`}>
                            Owner's Signature - Please Type First and Last Name
                        </IntakeLabel>
                        <Input 
                            type="text"      
                            name="waiver_owner_name" 
                            value={formData[`waiver_owner_name`]}
                            onChange={changeInput}
                            format="first last"
                            required
                        />
                    </FlexColDiv>
{/* 
                    <FlexColDiv style={{width: '30%'}}>
                        <IntakeLabel htmlFor={`waiver_date`}>
                            Date
                        </IntakeLabel>
                        <div>{
                                `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
                            }
                            </div>
                    </FlexColDiv> */}
                </IntakeRow>
            </IntakeHDiv>

            <ButtonRow>
                <NextPrevBtn
                    btnIndex={btnIndex}
                    setBtnIndex={setBtnIndex} 
                    sectionId={sectionId}
                />

                <NextPrevBtn
                    next
                    btnIndex={btnIndex}
                    setBtnIndex={setBtnIndex} 
                    sectionId={sectionId}
                    formData={formData}
                />
            </ButtonRow>
        </>
    )
}