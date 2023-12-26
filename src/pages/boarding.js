/* eslint-disable react/prop-types */
import React from "react";

//Boarding Styles:
import "../styles/boarding.css"

//Images:
import bigsBoarding from '../images/bigs-boarding.jpeg';
import littlesBoarding from '../images/littles-boarding.jpeg'
import pocketPets from '../images/pocket-pets.jpeg'
import catBoarding from '../images/cat-boarding.jpeg'
import genBoarding1 from '../images/gen-boarding-1.jpeg'
import genBoarding2 from '../images/gen-boarding-2.jpeg'
import genBoarding3 from '../images/gen-boarding-3.jpeg'

// Variables:
import { boardingValues } from "../constants/boarding-constants";

export default function Boarding(){
    let listValues = boardingValues.map((statement) => {
        return <li>{statement}</li>
    })

    return(
        <div id='boarding-div'>
            <h1> 
                Boarding At Our Facility
            </h1>

            <div id="info">
                <p>
                    All inclusive overnight boarding for your pet while you're away!
                </p>
                <br/>
                <p>
                    Wheat in pig. Peacocks baa ostriches owls. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. In the straw rain barrels. Cauliflower a seeds quail. Haybine carrots soybeans, owls duck raising or, cheep in plows. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Ewes fox, hay hook hay manure, John.
                </p>
            </div>

            <div id="values">
                <div className="images">
                    <img src={genBoarding1} alt="" />
                    <img src={genBoarding2} alt="" />
                    <img src={genBoarding3} alt="" />
                </div>

                <div className="value-text">
                    <p> 
                        No matter what, we believe that all dogs should be treated equally. 
                    </p>
                    <br/>
                    <p>
                        All dogs will receive:
                    </p>
                    <ul className="list-items">
                        {listValues}
                    </ul>
                </div>                  
            </div>

            <div id="prices">
                <h2>
                    Our Boarding Prices
                </h2>
                <div id="top">
                    <img src={bigsBoarding} alt='' className="pic left"/>
                    <div className="text">
                        <h3>Dogs</h3>
                        <div className="left">
                            <h4>40lbs and Over</h4>
                            <br/>
                            <p>$45 per night</p>
                        </div>
                        <div className="right">
                            <h4>Under 40lbs</h4>
                            <br/>
                            <p>$40 per night</p>
                        </div>
                    </div>
                    <img src={littlesBoarding} alt='' className="pic right"/>
                </div>

                <div id="bottom">
                    <img src={catBoarding} alt='' className="pic left"/>
                    <div className="text">
                        <h3>Other Pets</h3>
                        <div className="left">
                            <h4>Cat Boarding</h4>
                            <br/>
                            <p>$25 per night</p>
                        </div>
                        <div className="right">
                            <h4>Pocket Pets</h4>
                            <br/>
                            <p className="pocket-ex">Bunnies, Birds, Reptiles, etc. </p>
                            <p className="pocket-instruction">Please provide your own cage/carrier for your pocket pet</p>
                            <br/>
                            <p>$20 per night</p>
                        </div>
                    </div>
                    <img src={pocketPets} alt='' className="pic right"/>
                </div>
            </div>

            <div id="checkin-out">
                <div id="checkin">

                </div>
                <div id="checkout">

                </div>
            </div>
        </div>
    )
}