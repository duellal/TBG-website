/* 
    Make long text boxes shorter (less width)

    3 boxes closer together
        cute icon for the boxes
        labeled for boarding, grooming, daycare
        have small text div show on hover
        click on box to go to page
*/

/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router";

// Components:
import Banner from './general-components/banner-pic'

// Home Styles:
import "../styles/home.css"

// Images:


//Variables
import { homeImages } from "../constants/banner-pics";


export default function Home(){
    let navigate = useNavigate();

    return (
        <>
            <Banner allImages={homeImages}/>
            <div id="home">
                <div className="info">
                    <div className="boarding">
                        <h2> Boarding </h2>
                    </div>

                    <div className="daycare">
                        <h2> Daycare </h2>
                    </div>

                    <div className="grooming">
                        <h2> Grooming </h2>
                    </div>
                </div>
            </div>
        </>
    )
}