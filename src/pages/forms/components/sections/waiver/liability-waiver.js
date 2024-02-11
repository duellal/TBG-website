import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Components:
import NextPrevBtn from "../../next-section-btn";

//Liability Waiver Styles:
import { ButtonRow, FormBtn, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, WaiverH5, 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv, Rotate } from "../../../../../styles/contact";

//Form PDF:
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from '../../../waiver/waiver-text.js'
import AsteriskHeader from "../../asterisk-header.js";
import { FormAsterisk } from "../../../../../styles/forms.js";


/**
 * @component The liability waiver section with labels + inputs
 * @param {*} props changeInput, loading, btnIndex, setBtnIndex, setTabIndex, formData
 */
export default function LiabilityWaiver(props){
    const { changeInput, loading, btnIndex, setBtnIndex, setTabIndex, formData } = props

    return (
        <>
            <IntakeHDiv key={`waiver-section`}>
                <IntakeH3>
                    Liability Waiver
                </IntakeH3>

                <AsteriskHeader/>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeWaiverDiv>
                            <WaiverH5>
                                {waiverHeader}
                            </WaiverH5>
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
                        <WaiverH5>
                            <FormAsterisk>*</FormAsterisk>
                            {waiverAcknowledgeHeader}
                        </WaiverH5>
                        <IntakeWaiverP style={{margin: '0 0 10px'}}>
                            <Input 
                                type="checkbox" 
                                name="waiver_owner_acknowledgement" 
                                value={formData["waiver_owner_acknowledgement"]}
                                checked={formData['waiver_owner_acknowledgement'] === "true"}
                                onChange={changeInput}
                                required 
                            />
                            {waiverAcknowledgeStatement} 
                        </IntakeWaiverP>
                    </FlexColDiv>
                </IntakeRow>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner_printed_name`}>
                            <FormAsterisk>*</FormAsterisk> Owner's Printed Name
                        </IntakeLabel>
                        <Input 
                            type="text"      
                            name="waiver_owner_name" 
                            value={formData[`waiver_owner_name`]}
                            onChange={changeInput}
                            required 
                        />
                    </FlexColDiv>
                </IntakeRow>

                {/* Form Submit Button */}
                <ButtonRow>
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

                </ButtonRow>
            </IntakeHDiv>
        </>
    )
}