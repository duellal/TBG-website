/*
    Move to about page
*/

/* eslint-disable react/prop-types */
import React from "react";

//TeamCareers Styles:
import '../../styles/team_careers.css'

//Images:
import owner from '../../images/owner.jpeg';
import manager from '../../images/manager.jpeg';
import team from '../../images/team.jpeg';

export default function TeamCareers(){

    return(
        <div id='teamCareers'>
            <h1> 
                Our Team
            </h1>

            <div className="info-div">
                    <h2>
                        Meet the Owner!
                    </h2>

                    <div className="bio">
                        <div className="pic left">
                            <img loading="lazy" src={owner} width='100%' alt="a white short-haired cat with a black face and blue eyes close up" />
                        </div>
                        <div className="text right">
                            <p>
                                Puppy kitty ipsum dolor sit good dog throw wet nose paws barky dragging tuxedo running nest cockatiel tongue. Harness slobbery birds pet supplies dragging paws cockatiel bird commands treats scratch left paw food chew stay grooming crate cage park paws. Water leash critters cage gimme five slobber. Bird Food kisses run fast wet nose purr slobbery run cage chew bedding food scratch leash dog house dinnertime roll over slobbery right paw. Cage Fido yawn chow swimming Rover bark Scooby snacks house train hamster. Food small animals slobbery smooshy running sit. Throw bedding parrot Scooby snacks biscuit bark Spike furry.
                            </p>
                        </div>
                    </div>
            </div>

            <div className="info-div">
                    <h2>
                        Meet the Manager!
                    </h2>

                    <div className="bio">
                        <div className="text left">
                            <p>
                                Raising or, cheep in plows. In the straw rain barrels. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Prairie dogs raccoons robins rats. Blue berries pigeons buzz and bean prairie dogs nails at est. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. bull bowels cat chicken cow, calf donkey duck. Veterinarian at Seeder eggs with watermelon ostriches. Forag.
                            </p>
                        </div>

                        <div className="pic right">
                            <img loading="lazy" src={manager} width='100%' alt="dark brown curly haired woman snuggling a white dog" />
                        </div>
                    </div>
            </div>

            <div className="info-div">
                    <h2>
                        Meet the Team!
                    </h2>

                    <div className="bio">
                        <div className="pic left">
                            <img loading="lazy" src={team} width='100%' alt="four dogs tugging at a toy" />
                        </div>
                        <div className="text right">
                            <p>
                                Veterinarian at Seeder eggs with watermelon ostriches. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. John Deere bees, parsley sweet corn at, porky pig shovels. Kidney beans ostrich trucks. Lamb in eggplant baler rain barrels manure hay rake. Killer scourge scared, drowning helpless sheep at.
                            </p>
                        </div>
                    </div>
            </div>

            <div id="careers" className="info-div">
                <h2>
                    Ready to Join the Team?
                </h2>

                    <div className="p-div">
                        <p>
                            Paragraph about joining the team.
                        </p>
                        <br/>
                        <p>
                            Lamb in eggplant baler rain barrels manure hay rake. Gourds utters at welding equipment a oink oink haybine. Forage Harvester rakes peacocks, squeal garden woof. Haybine carrots soybeans, owls duck raising or, cheep in plows. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Haybine carrots soybeans, owls duc.
                        </p>
                    </div>
            </div>
        </div>
    )
}