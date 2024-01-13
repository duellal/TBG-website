/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router";

//Home Styles:
import "../styles/home.css"

//Images:
import stockGolden from '../images/grafitti.jpeg'
import stockDaycare from '../images/stock-minnie.jpeg'
import stockGroom from '../images/stock-grooming.jpeg'
import stockBoard from '../images/stock-littlebit.jpeg'

export default function Home(){
    let navigate = useNavigate();

    return (
        <div id="home">
            <div className="image">
                <img loading="lazy" src={stockGolden} alt='Golden retriever smiling with black chairs in background' width='100%'></img>
            </div>

            <div className="info">
                <div className="boarding">
                    <h2> Boarding </h2>
                    <img loading="lazy" src={stockBoard} alt='' width='100%'></img>
                    <p> Poop on grasses rub whiskers on bare skin act innocent stick butt in face hide at bottom of staircase to trip human but chase the pig around the house. Kitty mew sleep on my human's head meow head nudges yet attack dog, run away and pretend to be victim. Iâ€™m so hungry iâ€™m so hungry but ew not for that . Eats owners hair then claws head. Dont wait for the storm to pass, dance in the rain chew foot ask for petting yet fat baby cat best buddy little guy so sleep all day whilst slave is at work, play all night whilst slave is sleeping. Lick butt and make a weird face lounge in doorway. Scratch the furniture tweeting a baseball or thinking longingly about tuna brine for stare at the wall, play with food and get confused by dust. </p>
                    <button onClick={() => navigate('/boarding')}> Learn more </button>
                </div>

                <div className="daycare">
                    <h2> Daycare </h2>
                    <img loading="lazy" src={stockDaycare} alt='' width='100%'></img>
                    <p> Love fish hate dog. Drink water out of the faucet i show my fluffy belly but it's a trap! if you pet it i will tear up your hand yet kitty power but pelt around the house and up and down stairs chasing phantoms wake up human for food at 4am so enslave the hooman. I see a bird i stare at it i meow at it i do a wiggle come here birdy. Fight own tail side-eyes your "jerk" other hand while being petted man running from cops stops to pet cats, goes to jail toy mouse squeak roll over. I can haz if it fits i sits, for get scared by sudden appearance of cucumber, pee on walls it smells like breakfast and dont wait for the storm to pass, dance in the rain for prance along on top of the garden fence, annoy the neighbor's dog and make it bark. </p>
                    <button onClick={() => navigate('/daycare')}> Learn more </button>
                </div>

                <div className="grooming">
                    <h2> Grooming </h2>
                    <img loading="lazy" src={stockGroom} alt='' width='100%'></img>
                    <p> Jump on fridge toilet paper attack claws fluff everywhere meow miao french ciao litterbox. Put butt in owner's face cat walks in keyboard and stick butt in face. I cry and cry and cry unless you pet me, and then maybe i cry just for fun side-eyes your "jerk" other hand while being petted asdflkjaertvlkjasntvkjn (sits on keyboard) so crash against wall but walk away like nothing happened give me some of your food give me some of your food give me some of your food meh, i don't want it chew master's slippers claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Soft kitty warm kitty little ball of furr. Slap the dog because cats rule kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? </p>
                    <button onClick={() => navigate('/grooming')}> Learn more </button>
                </div>
            </div>
        </div>
    )
}