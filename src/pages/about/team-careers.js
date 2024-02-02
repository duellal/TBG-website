/* eslint-disable react/prop-types */
import React from "react";

//TeamCareers Styles:
import { AboutInfoSection, TeamImg, TeamBioSection, TeamSection, TeamStartDiv, TeamBioText } from '../../styles/about'
import { CommonH1, CommonH2 } from '../../styles/commonBDG'

//Images:
import owner from '../../images/about/owner.jpeg';
import manager from '../../images/about/manager.jpeg';
import team from '../../images/about/team.jpeg';
import { AllRedDropDowns, CommonP, RedBoxWithShadow } from "../../styles/common-styles";

export default function TeamCareers(){

    return(
        <TeamStartDiv>
            <CommonH1> 
                Our Team
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
                <CommonH2>
                    Ready to Join the Team?
                </CommonH2>

            <AllRedDropDowns>
                <TeamSection>
                    <p>
                        Lamb in eggplant baler rain barrels manure hay rake. Gourds utters at welding equipment a oink oink haybine. Forage Harvester rakes peacocks, squeal garden woof. Haybine carrots soybeans, owls duck raising or, cheep in plows. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Haybine carrots soybeans, owls duc.
                    </p>
                </TeamSection>
            </AllRedDropDowns>
            </AboutInfoSection>
        </TeamStartDiv>
    )
}