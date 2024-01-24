/* eslint-disable react/prop-types */
import React from "react";

//Components:
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Daycare Styles:
import { CommonH1, CommonH2, CommonH3, CommonH4, CommonInfoSection, CommonStartDiv, PricesDiv, PricesImg, PricesP, PricesTextLR, PricesTextRight, PricesTextSection, PricesTop, ValuesImg, ValuesImgSection, ValuesItems, ValuesP, ValuesSection, ValuesText } from "../styles/commonBDG";

//Images: 
import genDaycare1 from '../images/daycare/bigs-daycare.jpeg'
import genDaycare2 from '../images/daycare/littles-daycare.jpeg'
import genDaycare3 from '../images/daycare/bigs-daycare-2.jpeg'
import bigsDaycare1 from '../images/daycare/bigsDaycare3.jpeg'
import littlesDaycare1 from '../images/daycare/littlesDaycare1.jpeg'

//Variables:
import { daycareValues } from "../constants/values";
import { daycareImages } from "../constants/banner-pics";


export default function Daycare(){
    let listValues = daycareValues.map((statement) => {
        return <li>{statement}</li>
    })

    return(
        <>
            <Banner allImages={daycareImages} />
            <CommonStartDiv>
                <CommonH1> 
                    Daycare At Our Facility
                </CommonH1>

                <CommonInfoSection>
                    <p>
                        Wheat in pig. Peacocks baa ostriches owls. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. In the straw rain barrels. Cauliflower a seeds quail. Haybine carrots soybeans, owls duck raising or, cheep in plows. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Ewes fox, hay hook hay manure, John.
                    </p>
                </CommonInfoSection>

                <ValuesSection>
                    <ValuesImgSection>
                        <ValuesImg src={genDaycare1} alt="" />
                        <ValuesImg src={genDaycare2} alt="" />
                        <ValuesImg src={genDaycare3} alt="" />
                    </ValuesImgSection>

                    <ValuesText>
                        <ValuesP> 
                            No matter what, we believe that all dogs should be treated equally. 
                        </ValuesP>
                        <br/>
                        <ValuesP>
                            All dogs will receive:
                        </ValuesP>
                        <ValuesItems>
                            {listValues}
                        </ValuesItems>
                    </ValuesText>                  
                </ValuesSection>

                <PricesDiv>
                    <CommonH2>
                        Our Daycare Prices
                    </CommonH2>
                    <PricesTop>
                        <PricesImg src={bigsDaycare1} alt='' className="pic left"/>
                        <PricesTextSection>
                            <CommonH3>Daily Daycare Rate</CommonH3>
                            <PricesTextLR>
                                <CommonH4>Full Day</CommonH4>
                                <br/>
                                <PricesP>$28 per Visit</PricesP>
                            </PricesTextLR>
                            <PricesTextRight>
                                <CommonH4>Half Day</CommonH4>
                                <br/>
                                <PricesP>$18 per Visit</PricesP>
                            </PricesTextRight>
                        </PricesTextSection>
                        <PricesImg src={littlesDaycare1} alt='' className="pic right"/>
                    </PricesTop>
                </PricesDiv>

                <Requirements/>
            </CommonStartDiv>
        </>
    )
}