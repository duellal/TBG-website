import React, { useEffect, useRef, useState } from "react";

//Components:
import AsteriskHeader from "../../asterisk-header.js";
import NextPrevBtn from "../../next-section-btn.js";

//Liability Waiver Styles:
import { ButtonRow, IntakeH3, IntakeHDiv, IntakeLabel, IntakeRow, IntakeWaiverDiv, IntakeWaiverP, WaiverH5, 
} from '../../../../../styles/owner-form.js'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms.js";

//Waiver Info:
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from './waiver-text.js'


/**
 * @component The liability waiver section with labels + inputs
 * @param {*} props changeInput, formData, btnIndex, setBtnIndex, loading, formHTML, setFormHTML
 */
export default function LiabilityWaiver(props){
    const { changeInput, formData, btnIndex, setBtnIndex, formHTML, setFormHTML } = props

    let waiverRef = useRef()
    let sectionId = `waiver_section`
    let [sectionHTML, setSectionHTML] = useState()

    useEffect(() => {
        setSectionHTML({
            innerHTML: waiverRef.current, 
            outerHTML: waiverRef.current.outerHTML
        })
    }, [])

    return (
        <>
            <IntakeHDiv 
                key={sectionId}
                id={sectionId}
                ref={waiverRef}
            >
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
            </IntakeHDiv>

            <ButtonRow>
                <NextPrevBtn
                    btnIndex={btnIndex}
                    setBtnIndex={setBtnIndex}
                    formHTML={formHTML}
                    setFormHTML={setFormHTML} 
                    sectionId={sectionId}
                    sectionHTML={sectionHTML}
                />
            </ButtonRow>
        </>
    )
}