/* eslint-disable react/prop-types */
import React from "react";

// Components: 
import InfoButton from "../general-components/info-buttons.js/info-button";
import TeamCareers from "./team-careers";

// Images:
import graffiti2 from '../../images/grafitti-wall2.jpg'

// Styles:
import { CommonH2 } from "../../styles/commonBDG";
import { AboutInfoSection, AboutStartDiv, GraffitiDiv, GraffitiImg, QuoteAuthor, QuoteBody, QuoteHeader, ValuesSection } from "../../styles/about";
import { CommonP } from "../../styles/common-styles";

// Variables:
import { values } from "./values-arr";

export default function About(){
    return (
        <>
            <AboutStartDiv>
                <AboutInfoSection>
                    <CommonH2>
                        We base everything that we do around 4 simple values:
                    </CommonH2>
                    <ValuesSection>
                        <InfoButton 
                            array={values}
                        />
                    </ValuesSection>

                    <TeamCareers/>
                    
                </AboutInfoSection>
            </AboutStartDiv>
            <GraffitiDiv style={{marginBottom: '-20px'}}>
                <GraffitiImg src={graffiti2}/>
            </GraffitiDiv>
        </>
    )
}