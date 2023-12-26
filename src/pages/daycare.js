/* eslint-disable react/prop-types */
import React from "react";

//Daycare Styles:
import '../styles/daycare.css';

//Images: 
import genDaycare1 from '../images/bigs-daycare.jpeg'
import genDaycare2 from '../images/littles-daycare.jpeg'
import genDaycare3 from '../images/bigs-daycare-2.jpeg'
import bigsDaycare1 from '../images/bigsDaycare3.jpeg'
import bigsDaycare2 from '../images/bigsDaycare4.jpeg'
import littlesDaycare1 from '../images/littlesDaycare1.jpeg'
import littlesDaycare2 from '../images/littlesDaycare3.jpeg'

//Variables:
import { daycareValues } from "../constants/values";

export default function Daycare(){
    let listValues = daycareValues.map((statement) => {
        return <li>{statement}</li>
    })

    return(
        <div id='daycare-div'>
            <h1> 
                Daycare At Our Facility
            </h1>

            <div id="info">
                <p>
                    Wheat in pig. Peacocks baa ostriches owls. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. In the straw rain barrels. Cauliflower a seeds quail. Haybine carrots soybeans, owls duck raising or, cheep in plows. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Ewes fox, hay hook hay manure, John.
                </p>
            </div>

            <div id="values">
                <div className="images">
                    <img src={genDaycare1} alt="" />
                    <img src={genDaycare2} alt="" />
                    <img src={genDaycare3} alt="" />
                </div>

                <div className="value-text">
                    <p> 
                        No matter what, we believe that all dogs should be treated equally. 
                    </p>
                    <br/>
                    <p>
                        All dogs will receive:
                    </p>
                    <div className="list-items">
                        {listValues}
                    </div>
                </div>                  
            </div>

            <div id="prices">
                <h2>
                    Our Daycare Prices
                </h2>
                <div id="top">
                    <img src={bigsDaycare1} alt='' className="pic left"/>
                    <div className="text">
                        <h3>Daily Daycare Rate</h3>
                        <div className="left">
                            <h4>Full Day</h4>
                            <br/>
                            <p>$28 per Visit</p>
                        </div>
                        <div className="right">
                            <h4>Half Day</h4>
                            <br/>
                            <p>$18 per Visit</p>
                        </div>
                    </div>
                    <img src={littlesDaycare1} alt='' className="pic right"/>
                </div>

                <div id="bottom">
                    <img src={littlesDaycare2} alt='' className="pic left"/>
                    <div className="text">
                        <h3>Daycare Packages</h3>
                        <div className="left">
                            <h4>10 Day Package</h4>
                            <br/>
                            <p>Price Here</p>
                        </div>
                        <div className="right">
                            <h4>20 Day Package</h4>
                            <br/>
                            <p>Price Here</p>
                        </div>
                    </div>
                    <img src={bigsDaycare2} alt='' className="pic right"/>
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