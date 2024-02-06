/* 
    Put intake form where button to digital form goes
    Have a small box for intake form
        User puts in info + clicks next for the next section
        At the end will submit the form

    Intake Form:    
        - Title: New Owner Form
        - Blurb: Intake and medication forms will be filled out at time of checkout
        - Buttons: make them stand out
            - red or blue button
            - on hover change gradient of color
            - add shadow behind it
        - Make it like the Green beagle lodge with a sections + next -> submit
        - Intake Form PDF + digital:
            - Liability waiver: take out pets on
            - Emergency Contact: Take out initials
            - Required info: (Required) in red italics (digital only)
    
        LEAVE THESE TWO COMMENTS TO ASK BAY LATER ABOUT:
        ** See if I can link form information to TBG Gingr's client form
        ** Possibly just forward clients to the client portal to create an account + do forms there
*/

/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

//Forms Styles:
import '../../styles/forms.css'
import { FormPageInfoSection, FormPageRedBox, FormPageBtn, FormPagePdfBtn } from "../../styles/forms-page";
import { CommonP, UnderlineLink } from "../../styles/common-styles";
import { CommonH2, CommonStartDiv } from '../../styles/commonBDG'

//Import Form PDF:
import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

export default function Forms(){
    let navigate = useNavigate();

    return (
        <CommonStartDiv>
            <CommonH2> new client form </CommonH2>

            <FormPageInfoSection>
                <FormPageRedBox>
                    <p> 
                        We require all owners to fill out a new client form to insure that we have your contact information and all of your pets information. 
                    </p>
                </FormPageRedBox>
                <FormPageBtn onClick={() => navigate('/forms/new-owner')}> Fill Out the Form Online </FormPageBtn>

                <CommonH2 style={{marginBottom: '40px'}}> 
                    Having Trouble Completing the Form Digitally? 
                </CommonH2>

                <FormPageRedBox>
                    <CommonP>
                        If the form does not work for you, please download a printable version by clicking the button below. 
                    </CommonP>
                    <CommonP>
                        You are more than welcome to complete the form by hand and bring it in, or you may email it to us at 
                        {<UnderlineLink href="mailto:thebiscuitgarden@gmail.com"> thebiscuitgarden@gmail.com.</UnderlineLink>}
                    </CommonP>
                </FormPageRedBox>

                <FormPagePdfBtn onClick={() => window.open(intakeForm)}> 
                        New Owner Form PDF
                    </FormPagePdfBtn>
            </FormPageInfoSection>
        </CommonStartDiv>
    )
}