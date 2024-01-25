/* 
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
import { CommonInfoSection, CommonStartDiv } from '../styles/commonBDG'
import {} from '../styles/home'


// Icons:
import { faCarSide, faDog, faBone, faPaw, faSchoolFlag, faScissors, faShieldDog, faShop, faShower} from '@fortawesome/free-solid-svg-icons'



//Variables
import { homeImages } from "../constants/banner-pics";


export default function Home(){
    let navigate = useNavigate();



    return (
        <>
            <Banner allImages={homeImages}/>
            <CommonStartDiv>
                <CommonInfoSection>
                    <div id="boarding">
                        <h2> Boarding </h2>
                    </div>

                    <div id="daycare">
                        <h2> Daycare </h2>
                    </div>

                    <div id="grooming">
                        <h2> Grooming </h2>
                    </div>
                </CommonInfoSection>
            </CommonStartDiv>
        </>
    )
}