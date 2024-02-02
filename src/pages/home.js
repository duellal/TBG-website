/* eslint-disable react/prop-types */
import React from "react";

// Components:
import Banner from './general-components/banner-pic'
import InfoButton from "./general-components/info-buttons.js/info-button";

// Home Styles:
import { CommonStartDiv } from '../styles/commonBDG'

//Variables:
import { homeImages } from "../constants/banner-pics";


export default function Home(){
    return (
        <>
            <Banner allImages={homeImages}/>
            <CommonStartDiv>
                <InfoButton/>
            </CommonStartDiv>
        </>
    )
}