/* eslint-disable react/prop-types */
import React from "react";

// Images:
import homeBannerPic from '../../images/pics/golden-w-black-dogs.jpeg'
import collage from '../../images/home-collage.jpg'

// Components:
import InfoButton from "../general-components/info-buttons.js/info-button";

// Styles:
import { CommonStartDiv } from '../../styles/commonBDG'
import { BannerDiv, BannerImg } from "../../styles/banner";
import { CollageImg } from "../../styles/common-styles";

//Variables:
import { home_btns } from "./home-page-btns";


export default function Home(){
    return (
        <>
            <BannerDiv>
                <BannerImg
                    src={homeBannerPic}
                />
            </BannerDiv>
            <CommonStartDiv>
                <InfoButton array={home_btns}/>
            </CommonStartDiv>

            <CollageImg src={collage} alt=""/>
        </>
    )
}