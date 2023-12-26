/* eslint-disable react/prop-types */
import React from "react";

//Grooming Styles:
import "../styles/grooming.css"

//Images:
import grooming1 from '../images/grooming-1.jpeg';
import grooming2 from '../images/grooming-2.jpeg';
import grooming3 from '../images/grooming-3.jpeg';

export default function Grooming(){
    return(
        <div id='grooming-div'>
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
                <div id="checkin">

                </div>
                <div id="checkout">

                </div>
            </div>
        </div>
    )
}