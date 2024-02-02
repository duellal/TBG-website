/* eslint-disable react/prop-types */
import React from "react";

// Banner Images:
import { homeImages } from "../constants/banner-pics";

// Components:
import Banner from './general-components/banner-pic'
import InfoButton from "./general-components/info-buttons.js/info-button";

// Styles:
import { CommonStartDiv } from '../styles/commonBDG'

//Variables:
import { home_btns } from "../constants/home-page-btns";


export default function Home(){
    return (
        <>
            <Banner allImages={homeImages}/>
            <CommonStartDiv>
                <InfoButton array={home_btns}/>
            </CommonStartDiv>
        </>
    )
}