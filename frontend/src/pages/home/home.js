/* eslint-disable react/prop-types */
import React from "react";

// Images:
import homeBannerPic from '../../images/home/home-banner-pic.jpeg'
import collage from '../../images/home-collage.jpg'

// Components:
import InfoButton from "../general-components/info-buttons.js/info-button";

// Styles:
import { CommonStartDiv } from '../../styles/commonBDG'
import { BannerDiv, BannerImg } from "../../styles/banner";
import { CollageImg, CommonP } from "../../styles/common-styles";

//Variables:
import { home_btns } from "./home-page-btns";
import About from "../about/about";
import { AboutInfoSection, QuoteAuthor, QuoteBody, QuoteHeader } from "../../styles/about";


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

                <AboutInfoSection>
                        <CommonP>
                            The Biscuit Garden is a small, family owned business based out of Wake County, NC.  With over 20+ years in the animal care industry, the staff take great pride in the relationships formed with their community, their clients and their four legged friends.
                        </CommonP>

                        <QuoteHeader>
                            A note from the owner:
                        </QuoteHeader>
                        <QuoteBody>
                            "The purpose of The Biscuit Garden has always been to provide a place that owners feel comfortable and confident in leaving their beloved pets while they are away and a place where the pets themselves are so excited to come that they drag their owners in the door.  That simple act, is in fact, our greatest compliment.  We hope that you will find  our sincerest love for our clients and guests welcoming and reassuring and we look forward to having you become part of our Biscuit Garden family."
                        </QuoteBody>
                        <QuoteAuthor>
                            Beth Ann Young
                        </QuoteAuthor>
                    </AboutInfoSection>
            </CommonStartDiv>

           

            <CollageImg src={collage} alt=""/>

            <About />
        </>
    )
}