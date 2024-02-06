/* eslint-disable react/prop-types */
import React from "react";

// Images:
import { homeImages } from "../constants/banner-pics";
import collage from '../images/home-collage.jpg'

// Components:
import Banner from './general-components/banner-pic'
import InfoButton from "./general-components/info-buttons.js/info-button";

// Styles:
import { CommonStartDiv } from '../styles/commonBDG'

//Variables:
import { home_btns } from "../constants/home-page-btns";
import { CollageImg } from "../styles/common-styles";


export default function Home(){
    return (
        <>
            <Banner allImages={homeImages}/>
            <CommonStartDiv>
                <InfoButton array={home_btns}/>
            </CommonStartDiv>

            <CollageImg src={collage} alt=""/>
        </>
    )
}