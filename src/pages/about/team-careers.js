/* eslint-disable react/prop-types */
import React from "react";

// Components:
import AccordianTitle from "../faqs/components/accordian-titles";

// Styles:
import { AboutInfoSection, TeamImg, TeamBioSection, TeamStartDiv, TeamBioText } from '../../styles/about'
import { CommonH1, CommonH2 } from '../../styles/commonBDG'
import { FaqTitleDiv } from "../../styles/FAQs";
import { AllRedDropDowns, CommonP } from "../../styles/common-styles";

// Images:
import manager from '../../images/about/manager.jpeg';

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
                            <CommonP>
                                <b>
                                    Pics here
                                </b>
                            </CommonP>
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
                                Raising or, cheep in plows. In the straw rain barrels. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Prairie dogs raccoons robins rats. Blue berries pigeons buzz and bean prairie dogs nails at est. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. bull bowels cat chicken cow, calf donkey duck. Veterinarian at Seeder eggs with watermelon ostriches. Forag.
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