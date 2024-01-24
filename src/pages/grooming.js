/* eslint-disable react/prop-types */
import React from "react";

//Components:
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Grooming Styles:
import { CommonH1, CommonH2, CommonH4, CommonInfoSection, CommonStartDiv, PricesDiv, PricesImg, PricesTextRight, PricesTextSection, PricesTop, PricesTextLR } from "../styles/commonBDG";

//Images:
import grooming1 from '../images/grooming/grooming-1.jpeg';
import grooming2 from '../images/grooming/grooming-2.jpeg';
import grooming3 from '../images/grooming/grooming-3.jpeg';

//Variables:
import { groomingImages } from "../constants/banner-pics";
import { GroomingImg } from "../styles/grooming";

export default function Grooming(){
    return(
        <>
            <Banner allImages={groomingImages} />
            <CommonStartDiv>
                <CommonH1> 
                    Grooming At Our Facility
                </CommonH1>

                <CommonInfoSection>
                    <p>
                        Quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Feed in a woof, a farmers market. Peacocks ba.
                    </p>
                    <GroomingImg src={grooming3} alt="" className="pic" />            
                    </CommonInfoSection>

                <PricesDiv>
                    <CommonH2>
                        Our Grooming Prices
                    </CommonH2>
                    <PricesTop>
                        <PricesImg src={grooming1} alt='' className="pic left"/>
                        <PricesTextSection>
                            <PricesTextLR>
                                <CommonH4>Bath (free nail trim included)</CommonH4>
                                <br/>
                                <p>$25 per animal</p>
                            </PricesTextLR>
                            <PricesTextRight>
                                <CommonH4>Nail trim</CommonH4>
                                <br/>
                                <p>$12 per animal</p>
                            </PricesTextRight>
                        </PricesTextSection>
                        <PricesImg src={grooming2} alt='' className="pic right"/>
                    </PricesTop>
                </PricesDiv>

                <Requirements grooming='grooming'/>
            </CommonStartDiv>
        </>
    )
}