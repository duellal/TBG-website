/* eslint-disable react/prop-types */
import React from "react";

// Components: 
import InfoButton from "../general-components/info-buttons.js/info-button";
import TeamCareers from "./team-careers";

// Images:
import graffiti from '../../images/graffiti-wall.jpg'
import graffiti2 from '../../images/grafitti-wall2.jpg'

// Styles:
import { CommonH1, CommonH2 } from "../../styles/commonBDG";
import { AboutInfoSection, AboutStartDiv, GraffitiDiv, GraffitiImg, QuoteAuthor, QuoteBody, QuoteHeader, ValuesSection } from "../../styles/about";
import { CommonP } from "../../styles/common-styles";

// Variables:
import { values } from "../../constants/values";

export default function About(){
    return (
        <>
            <GraffitiDiv>
                <GraffitiImg src={graffiti2}/>
            </GraffitiDiv>
            <AboutStartDiv>
                <CommonH1>
                    A Little About Us
                </CommonH1>
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

                <AboutInfoSection>
                        <CommonP>
                            The Biscuit Garden is a small, family owned business based out of Wake County, NC.  With over 20+ years in the animal care industry, the staff take great pride in the relationships formed with their community, their clients and their four legged friends.
                        </CommonP>

                        <QuoteHeader>
                            A note from the owner:
                        </QuoteHeader>
                        <QuoteBody>
                            "The purpose of The Biscuit Garden has always been to provide a place that owners feel comfortable and confident in leaving their beloved pets while they are away and a place where the pets themselves are so excited to come that they drag their owners in the door.  That simple act, is in fact, our greatest compliment.  We hope that you will find  our sincerest love for our clients and guests welcoming and reassuring and we look forward to having you become part of our Biscuit Garden family."
                        </QuoteBody>
                        <QuoteAuthor>
                            Beth Ann Young
                        </QuoteAuthor>
                    </AboutInfoSection>
                </AboutInfoSection>
            </AboutStartDiv>
            <GraffitiDiv style={{marginBottom: '-20px'}}>
                <GraffitiImg src={graffiti}/>
            </GraffitiDiv>
        </>
    )
}