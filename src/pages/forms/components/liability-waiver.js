import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas"

//Liability Waiver Styles:
import {CanvasDiv, IntakeButton, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, SignatureClear, SignatureDiv } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";

//Form PDF:
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from '../waiver/waiver-text.js'
import waiverPDF from '../waiver/TBG-Liability-Waiver-2024.pdf'

export default function LiabilityWaiver(){
    //Reference:
    let sigCanvas = useRef()

    return (
        <>
            <IntakeHDiv>
                <IntakeH3>
                    Liability Waiver
                </IntakeH3>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeWaiverDiv>
                            <IntakeH3>
                                {waiverHeader}
                            </IntakeH3>
                            <IntakeWaiverP>
                                {waiverP1}
                            </IntakeWaiverP>
                            <IntakeWaiverP>
                                {waiverP2}
                            </IntakeWaiverP>
                        </IntakeWaiverDiv>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeH3>
                            {waiverAcknowledgeHeader}
                        </IntakeH3>
                        <IntakeWaiverP>
                            <Input type="checkbox" name="liability-waiver-owner-acknowledgement" required />
                            {waiverAcknowledgeStatement}
                        </IntakeWaiverP>
                    </FlexColDiv>
                </IntakeRow>

                {/* Owner Signature */}
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor="waiver-owner-signature">
                            *Owner's Signature
                        </IntakeLabel>
                        <SignatureDiv>
                            <CanvasDiv>
                                <SignatureCanvas 
                                    canvasProps={{width: '500px', height: '200px', borderBottom: '1px solid black'}}
                                    ref={sigCanvas}
                                    required 
                                />
                            </CanvasDiv>        
                        <SignatureClear onClick={() => sigCanvas.current.clear()}>
                            Clear
                        </SignatureClear>
                        </SignatureDiv>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner_printed_name`}>
                            *Owner's Printed Name
                        </IntakeLabel>
                        <Input type="text" name="owner_printed_name"/>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`pets_name`}>
                            *Pet(s) Name(s)
                        </IntakeLabel>
                        <Input type="text" name="pets_name"/>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                    <p>
                        You can download the Liability Waiver below.
                    </p>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <IntakeButton onClick={() => window.open(waiverPDF)}>
                        Download Waiver
                    </IntakeButton>
                </IntakeRow>
            </IntakeHDiv>
        </>
    )
}