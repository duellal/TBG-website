import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Components:
import NextPrevBtn from "../../next-section-btn";

//Liability Waiver Styles:
import { FormBtn, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv, Rotate } from "../../../../../styles/contact";

//Form PDF:
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from '../../../waiver/waiver-text.js'
import AsteriskHeader from "../../asterisk-header.js";
import { FormAsterisk } from "../../../../../styles/forms.js";


/**
 * @component The liability waiver section with labels + inputs
 * @param {*} props loading, btnIndex, setBtnIndex, setTabIndex
 */
export default function LiabilityWaiver(props){
    const { loading, btnIndex, setBtnIndex, setTabIndex } = props

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