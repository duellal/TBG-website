import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import SignatureCanvas from "react-signature-canvas"

//Components:
import NextPrevBtn from "../../next-section-btn";

//Liability Waiver Styles:
import { FormBtn, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow,
    //  IntakeSubmitInput,
      IntakeWaiverDiv, IntakeWaiverP, 
    // SignatureBtns, SignatureDiv 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv, Rotate } from "../../../../../styles/contact";

//Form PDF:
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from '../../../waiver/waiver-text.js'
import AsteriskHeader from "../../asterisk-header.js";
import { FormAsterisk } from "../../../../../styles/forms.js";

export default function LiabilityWaiver(props){
    const { loading, btnIndex, setBtnIndex, setTabIndex } = props
    // let sigCanvas = useRef()

    // const saveSignature = async (event) => {
    //     event.preventDefault()
    //     let isEmpty = await sigCanvas.current.isEmpty();

    //     if(!isEmpty){
    //         let signatureUrl = await sigCanvas.current.getTrimmedCanvas().toDataURL()

    //         event.target.name = 'waiver_signature'
    //         event.target.value = signatureUrl
    //         await changeInput(event)
    //     }else{
    //         event.target.name = 'waiver_signature'
    //         event.target.value = ''
    //         changeInput(event)
    //     }
    // }

    // Clearing Signature Pad:
    // const onClear = async (event) => {
    //     event.preventDefault()
    //     sigCanvas.current.clear()

    //     event.target.name = "waiver_signature"
    //     event.target.value = ''

    //     await changeInput(event)
    // }

    return (
        <>
            <IntakeHDiv>
                <IntakeH3>
                    Liability Waiver
                </IntakeH3>

                <AsteriskHeader/>

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
                            <FormAsterisk>*</FormAsterisk>
                            {waiverAcknowledgeHeader}
                        </IntakeH3>
                        <IntakeWaiverP style={{margin: '0 0 10px'}}>
                            <Input 
                            type="checkbox" name="waiver_owner_acknowledgement" 
                            value={true}
                            required />
                            {waiverAcknowledgeStatement} 
                        </IntakeWaiverP>
                    </FlexColDiv>
                </IntakeRow>

                {/* Owner Signature */}
                {/* <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor="waiver-owner-signature">
                            *Owner's Signature
                        </IntakeLabel>
                        <SignatureDiv>
                            <SignatureCanvas 
                                canvasProps={{
                                    width: '500px',
                                    height: '200px',
                                    name: 'waiver_signature',
                                }}
                                ref={sigCanvas}
                                onEnd={(event) => saveSignature(event)}
                                required 
                            />   
                        <SignatureBtns onClick={(event) => {onClear(event)}}>
                            Clear
                        </SignatureBtns>
                        </SignatureDiv>
                    </FlexColDiv>
                </IntakeRow> */}

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner_printed_name`}>
                            <FormAsterisk>*</FormAsterisk> Owner's Printed Name
                        </IntakeLabel>
                        <Input type="text" name="waiver_owner_name" required />
                    </FlexColDiv>
                </IntakeRow>

                {/* Form Submit Button */}
                <IntakeRow>
                    <NextPrevBtn 
                        btnIndex={btnIndex}
                        setBtnIndex={setBtnIndex}
                        setTabIndex={setTabIndex}
                    />

                    <FormBtn type="submit" value="Send">
                        Send
                    </FormBtn>
                        {
                            loading && <Rotate>
                            <FontAwesomeIcon icon={faSpinner} size="2xl" />
                            </Rotate>
                        }

                </IntakeRow>
            </IntakeHDiv>
        </>
    )
}