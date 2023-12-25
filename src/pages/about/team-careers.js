/* eslint-disable react/prop-types */
import React from "react";

//About Styles:
import '../../styles/team_careers.css'

//Images:
import owner from '../../images/owner.jpeg';
import manager from '../../images/manager.jpeg';
import team from '../../images/team.jpeg';

export default function TeamCareers(){

    return(
        <div id='teamCareer-div'>
            <h1> 
                Our Team
            </h1>
            <div className="owner">
                <h2>
                    Meet the Owner!
                </h2>
                <img src={owner} width='100%'></img>
                <p>
                    Puppy kitty ipsum dolor sit good dog throw wet nose paws barky dragging tuxedo running nest cockatiel tongue. Harness slobbery birds pet supplies dragging paws cockatiel bird commands treats scratch left paw food chew stay grooming crate cage park paws. Water leash critters cage gimme five slobber. Bird Food kisses run fast wet nose purr slobbery run cage chew bedding food scratch leash dog house dinnertime roll over slobbery right paw. Cage Fido yawn chow swimming Rover bark Scooby snacks house train hamster. Food small animals slobbery smooshy running sit. Throw bedding parrot Scooby snacks biscuit bark Spike furry.
                </p>
            </div>

            <div className="manager">
                <h2>
                    Meet the Manager!
                </h2>
                <p>
                    Raising or, cheep in plows. In the straw rain barrels. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Prairie dogs raccoons robins rats. Blue berries pigeons buzz and bean prairie dogs nails at est. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. bull bowels cat chicken cow, calf donkey duck. Veterinarian at Seeder eggs with watermelon ostriches. Forag.
                </p>
                <img src={manager} width='100%'></img>
            </div>

            <div className="team">
                <h2>
                    Meet the Team!
                </h2>
                <img src={team} width='100%'></img>
                <p>
                    Veterinarian at Seeder eggs with watermelon ostriches. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. John Deere bees, parsley sweet corn at, porky pig shovels. Kidney beans ostrich trucks. Lamb in eggplant baler rain barrels manure hay rake. Killer scourge scared, drowning helpless sheep at.
                </p>
            </div>
            <div id="careers">
                <h2>Wanna Join the Team?</h2>
                <p>
                    Paragraph about joining the team.
                </p>
                <p>
                    Lamb in eggplant baler rain barrels manure hay rake. Gourds utters at welding equipment a oink oink haybine. Forage Harvester rakes peacocks, squeal garden woof. Haybine carrots soybeans, owls duck raising or, cheep in plows. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Haybine carrots soybeans, owls duc.
                </p>
            </div>
        </div>
    )
}