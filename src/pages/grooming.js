/* 
    ALL pages have an expanded different photo - same like header below the nav bar
        Make long text boxes shorter (less width)

    Have all info on one page (no nav items)

    No checkin/out boxes/area - take out
*/

/* eslint-disable react/prop-types */
import React, { useState } from "react";

//Components:
import Banner from "./general-components/banner-pic";

//Grooming Styles:
import "../styles/grooming.css"

//Images:
import grooming1 from '../images/grooming/grooming-1.jpeg';
import grooming2 from '../images/grooming/grooming-2.jpeg';
import grooming3 from '../images/grooming/grooming-3.jpeg';
import groomingBanner1 from '../images/grooming/grooming-slideshow-1.png'
import groomingBanner2 from '../images/grooming/grooming-slideshow-2.png'
import groomingBanner3 from '../images/grooming/grooming-slideshow-3.png'

export default function Grooming(){
    const [toggle, setToggle] = useState(true);
    const bannerImages = [groomingBanner1, groomingBanner2, groomingBanner3]

    return(
        <>
            <Banner allImages={bannerImages} />
            <div id='grooming'>
                <h1> 
                    Grooming At Our Facility
                </h1>

                <div id="info">
                    <p>
                        Quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Feed in a woof, a farmers market. Peacocks ba.
                    </p>
                    <img src={grooming3} alt="" className="pic" />            
                    </div>

                <div id="prices">
                    <h2>
                        Our Grooming Prices
                    </h2>
                    <div id="top">
                        <img src={grooming1} alt='' className="pic left"/>
                        <div className="text">
                            <div className="left">
                                <h4>Bath (free nail trim included)</h4>
                                <br/>
                                <p>$25 per animal</p>
                            </div>
                            <div className="right">
                                <h4>Nail trim</h4>
                                <br/>
                                <p>$12 per animal</p>
                            </div>
                        </div>
                        <img src={grooming2} alt='' className="pic right"/>
                    </div>
                </div>

                <div id="checkin-out">
                    <h2>Grooming Checking In and Out</h2>
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
                                    <p>
                                        Please arrive about 5 minutes before your appointment. 
                                    </p>
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