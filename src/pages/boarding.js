/* 
    Title: Dog Boarding
    Take out cat boarding
    At the very very bottom:
        - Title: Cat + Pocket Pet Boarding
        - Sub Title: Limited Availability
        - move pocket pet + cat boarding prices
    
        ALL pages have an expanded different photo - same like header below the nav bar
            Make long text boxes shorter (less width)

    Have all info on one page (no nav items)

    No checkin/out boxes/area - take out
*/


/* eslint-disable react/prop-types */
import React, { useState } from "react";

//Boarding Styles:
import "../styles/boarding.css"

//Components: 
import Banner from "./general-components/banner-pic";

//Images:
import bigsBoarding from '../images/boarding/bigs-boarding.jpeg';
import littlesBoarding from '../images/boarding/littles-boarding.jpeg'
import pocketPets from '../images/boarding/pocket-pets.jpeg'
import catBoarding from '../images/boarding/cat-boarding.jpeg'
import genBoarding1 from '../images/boarding/gen-boarding-1.jpeg'
import genBoarding2 from '../images/boarding/gen-boarding-2.jpeg'
import genBoarding3 from '../images/boarding/gen-boarding-3.jpeg'
// import boardingBanner1 from '../images/boarding/boarding-slide-show-1.jpeg'
// import boardingBanner2 from '../images/boarding/boarding-slide-show-2.jpeg'
// import boardingBanner3 from '../images/boarding/boarding-slide-show-3.jpeg'
// import boardingBanner4 from '../images/boarding/boarding-slide-show-4.jpeg'
// import boardingBanner5 from '../images/boarding/boarding-slide-show-5.jpeg'

// Variables:
import { boardingValues } from "../constants/values";

export default function Boarding(){
    const [toggle, setToggle] = useState(true);
    let boardingImages = []

    let listValues = boardingValues.map((statement) => {
        return <li>{statement}</li>
    })

    return(
        <>
            <Banner allImages={boardingImages}/>
            <div id='boarding'>
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
                        <div className="list-items">
                            {listValues}
                        </div>
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
                    <h2> Boarding Checking In and Out</h2>
                    <div className="info">
                        <p> General information about checking in and out at our facility. </p>
                    </div>
                    <div className="toggle-box">
                        <div className="buttons">
                            <button className={`checkin ${toggle ? 'btn-toggle' : ''}`} onClick={() => {
                                if(toggle === false){
                                    setToggle(!toggle)
                                }
                            }}>
                                Check In
                            </button>
                            <button className={`checkout ${!toggle ? 'btn-toggle' : ''}`} onClick={() => {
                                if(toggle === true){
                                    setToggle(!toggle)
                                }
                            }}>
                                Check Out
                            </button>
                        </div>

                        {/* Toggling between the two buttons for check in / out */}
                        {toggle ?   
                        <div id="checkin" className="toggle">
                            <div id="times">
                                <h3> Typical Times to Check In</h3>
                                <div className="days">
                                    <h4> Monday - Saturday </h4>
                                    <p>8am - 6pm</p>
                                    <h4>Sunday</h4>
                                    <p>4pm - 6pm</p>
                                </div>
                            </div>
                            <div id="checklist">
                                <h3>What to Expect</h3>
                                <div className="text">
                                    <p className="first">Paragraph on what to expect when checking in.</p>
                                    <p>Check list of what the customer needs to do before their pet visits us:
                                        <div className="list">
                                            <li>One</li>
                                            <li>Two</li>
                                            <li>Three</li>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        <div id="checkout" className="toggle">
                            <div id="times">
                                <h3> Typical Times to Check Out</h3>
                                <div className="days">
                                    <h4> Monday - Saturday </h4>
                                    <p>8am - 6pm</p>
                                    <h4>Sunday</h4>
                                    <p>4pm - 6pm</p>
                                </div>
                            </div>
                            <div id="checklist">                      
                                <h3>What to Expect</h3>
                                <div className="text">
                                    <p>Paragraph on what to expect when checking out.</p>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}