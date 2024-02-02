/* eslint-disable react/prop-types */
import React from "react";

//TeamCareers Styles:
import { AboutInfoSection, TeamImg, TeamBioSection, TeamSection, TeamStartDiv, TeamBioText } from '../../styles/about'
import { CommonH1, CommonH2 } from '../../styles/commonBDG'

//Images:
import owner from '../../images/about/owner.jpeg';
import manager from '../../images/about/manager.jpeg';
import team from '../../images/about/team.jpeg';

export default function TeamCareers(){

    return(
        <TeamStartDiv>
            <CommonH1> 
                Our Team
            </CommonH1>

            <AboutInfoSection>
                    <TeamBioSection>
                        {/* <TeamBioText> */}
                            <p>
                                Puppy kitty ipsum dolor sit good dog throw wet nose paws barky dragging tuxedo running nest cockatiel tongue. Harness slobbery birds pet supplies dragging paws cockatiel bird commands treats scratch left paw food chew stay grooming crate cage park paws. Water leash critters cage gimme five slobber. Bird Food kisses run fast wet nose purr slobbery run cage chew bedding food scratch leash dog house dinnertime roll over slobbery right paw. Cage Fido yawn chow swimming Rover bark Scooby snacks house train hamster. Food small animals slobbery smooshy running sit. Throw bedding parrot Scooby snacks biscuit bark Spike furry.
                            </p>
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
                        Meet the Team!
                    </CommonH2>

                    <TeamBioSection>
                        <TeamImg loading="lazy" src={team} alt="four dogs tugging at a toy" />
                        <TeamBioText>
                            <p>
                                Veterinarian at Seeder eggs with watermelon ostriches. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. John Deere bees, parsley sweet corn at, porky pig shovels. Kidney beans ostrich trucks. Lamb in eggplant baler rain barrels manure hay rake. Killer scourge scared, drowning helpless sheep at.
                            </p>
                        </TeamBioText>
                    </TeamBioSection>
            </AboutInfoSection>

            <AboutInfoSection>
                <CommonH2>
                    Ready to Join the Team?
                </CommonH2>

                <TeamSection>
                    <p>
                        Lamb in eggplant baler rain barrels manure hay rake. Gourds utters at welding equipment a oink oink haybine. Forage Harvester rakes peacocks, squeal garden woof. Haybine carrots soybeans, owls duck raising or, cheep in plows. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Haybine carrots soybeans, owls duc.
                    </p>
                </TeamSection>
            </AboutInfoSection>
        </TeamStartDiv>
    )
}