/* eslint-disable react/prop-types */
import React from "react";

// Components:
import AccordianTitle from "../faqs/components/accordian-titles";

// Styles:
import { AboutInfoSection, TeamImg, TeamBioSection, TeamStartDiv, TeamBioText } from '../../styles/about'
import { CommonH1, CommonH2 } from '../../styles/commonBDG'
import { FaqTitleDiv } from "../../styles/FAQs";
import { AllRedDropDowns } from "../../styles/common-styles";

// Images:
import manager from '../../images/about/manager.jpeg';
import frontDeskPhone from '../../images/team/front-desk-phone.jpg'
import frontDeskCheckin from '../../images/team/front-desk-checkin.jpg'

// Variables
import { indvTitles, joinTeamDropdown } from "../faqs/faq-arrays";


export default function TeamCareers(){

    return(
        <TeamStartDiv>
            <CommonH1> 
                Meet the Team
            </CommonH1>

            <AboutInfoSection>
                    <TeamBioSection>
                        {/* <TeamBioText> */}
                            <TeamImg src={frontDeskPhone} alt="" />
                            <TeamImg src={frontDeskCheckin} alt="" />
                        {/* </TeamBioText> */}
                    </TeamBioSection>
            </AboutInfoSection>

            <AboutInfoSection>
                    <CommonH2>
                        Meet the Manager!
                    </CommonH2>

                    <TeamBioSection>
                        <TeamBioText>
                            <p>
                                Starting as a kennel technician back in 2019, I’ve been able to see and be a part of the development and growth of The Biscuit Garden. This is truly such a fun and rewarding business to manage and I truly appreciate the connections we make with our clients on a daily basis, both human and pet! I love being a part of this team and not only creating days of fun and excitement for the pets we see every day, but also being a place they are comfortable and content to stay at while their best human friends are away.
                            </p>
                        </TeamBioText>

                        <TeamImg loading="lazy" src={manager} alt="dark brown curly haired woman snuggling a white dog" />
                    </TeamBioSection>
            </AboutInfoSection>

            <AboutInfoSection>
                <AllRedDropDowns style={{width: '100%'}}>
                {/* Gets title for joining the team with accordian content about how to apply*/}
                    {
                        indvTitles.map((title, index) => {
                            if(title.includes('team')){
                                return (
                                    <FaqTitleDiv key={index} id={title}>
                                        <AccordianTitle 
                                            title={title} 
                                            content={joinTeamDropdown} 
                                        />
                                    </FaqTitleDiv>
                                )
                            }
                            return null
                        })
                    }
                </AllRedDropDowns>
            </AboutInfoSection>
        </TeamStartDiv>
    )
}