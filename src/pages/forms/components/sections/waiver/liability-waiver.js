import React, { useState } from "react";

//Components:
import AsteriskHeader from "../../asterisk-header.js";
import NextPrevBtn from "../../next-section-btn.js";

//Liability Waiver Styles:
import { ButtonRow, IntakeH3, IntakeH4, IntakeHDiv, IntakeLabel, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, WaiverH5, 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv } from "../../../../../styles/contact";

//Waiver Info:
import { cancellationAcknowledgeStatement, liabilityAcknowledgeStatement, waiverHeader, liabilityP1, liabilityP2, waiverAcknowledgeHeader, cancelP1, cancelP2 } from './waiver-text.js'

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
                            <WaiverH5>
                                {waiverHeader}
                            </WaiverH5>
                            <IntakeWaiverP>
                                {liabilityP1}
                            </IntakeWaiverP>
                            <IntakeWaiverP>
                                {liabilityP2}
                            </IntakeWaiverP>
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
                                name="liability_waiver_owner_acknowledgement" 
                                value={formData["liability_waiver_owner_acknowledgement"]}
                                checked={formData['liability_waiver_owner_acknowledgement'] === "true"}
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
                            <WaiverH5>
                                {waiverHeader}
                            </WaiverH5>
                            <IntakeWaiverP>
                                {cancelP1}
                            </IntakeWaiverP>
                            <IntakeWaiverP>
                                {cancelP2}
                            </IntakeWaiverP>
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
                                name="cancel_waiver_owner_acknowledgement" 
                                value={formData["cancel_waiver_owner_acknowledgement"]}
                                checked={formData['cancel_waiver_owner_acknowledgement'] === "true"}
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