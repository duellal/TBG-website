/* eslint-disable react/prop-types */
import React, { useState } from "react";

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
    const [toggle, setToggle] = useState(true);

    let listValues = daycareValues.map((statement) => {
        return <li>{statement}</li>
    })

    return(
        <div id='daycare'>
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
                <h2> Daycare Checking In and Out</h2>
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
                                <div className="full">
                                    <h4>Full Days</h4>
                                    <h5> Monday - Saturday </h5>
                                    <p>7:15am - 11am </p>
                                </div>

                                <div className="half">
                                    <h4>Half Days</h4>
                                    <h5> Monday - Saturday </h5>
                                    <div className="am-pm">
                                        <p className="am">AM:</p>
                                        <p>7:15am - 9am</p>
                                        <p className="pm">PM:</p>
                                        <p>2pm - 4pm</p>
                                    </div>
                                </div>
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
                                <div className="full">
                                    <h4>Full Days</h4>
                                    <h5> Monday - Saturday </h5>
                                    <p>8am - 6pm</p>
                                </div>

                                <div className="half">
                                    <h4>Half Days</h4>
                                    <h5> Monday - Saturday </h5>
                                        <div className="am-pm">
                                            <p className="am">AM:</p>
                                            <p>7:15am - 9am</p>
                                            <p className="pm">PM:</p>
                                            <p>2pm - 4pm</p>
                                        </div>
                                </div>
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
    )
}