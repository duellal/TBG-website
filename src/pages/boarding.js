/* eslint-disable react/prop-types */
import React from "react";

//Boarding Styles:
import { PricesPocketExP, PricesPocketInstructionP } from "../styles/boarding";
import { ValuesItems, ValuesSection, ValuesText, ValuesLi, ValuesP, CommonH1, CommonH2, CommonH3, CommonStartDiv, CommonInfoSection, PricesDiv, PricesTop, PricesBottom, PricesImg, PricesTextRight, PricesTextLR, PricesTextSection, CommonH4, PricesP } from "../styles/commonBDG";

//Components: 
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Images:
import bigsBoarding from '../images/boarding/bigs-boarding.jpeg';
import littlesBoarding from '../images/boarding/littles-boarding.jpeg'
import pocketPets from '../images/boarding/pocket-pets.jpeg'
import catBoarding from '../images/boarding/cat-boarding.jpeg'

// Variables:
import { boardingValues } from "../constants/values";
import { boardingImages } from "../constants/banner-pics";

export default function Boarding(){
    let listValues = boardingValues.map((statement) => {
        return <ValuesLi>{statement}</ValuesLi>
    })

    return(
        <>
            <Banner allImages={boardingImages}/>
            <CommonStartDiv>
                <CommonH1> 
                    Dog Boarding
                </CommonH1>

                <CommonInfoSection>
                    <p>
                        All inclusive overnight boarding for your pet while you're away!
                    </p>
                    <br/>
                    <p>
                        Wheat in pig. Peacocks baa ostriches owls. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. In the straw rain barrels. Cauliflower a seeds quail. Haybine carrots soybeans, owls duck raising or, cheep in plows. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Ewes fox, hay hook hay manure, John.
                    </p>
                </CommonInfoSection>

                <ValuesSection>
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
                        Our Boarding Prices
                    </CommonH2>
                    <PricesTop>
                        <PricesImg src={bigsBoarding} alt=''/>
                        <PricesTextSection>
                            <CommonH3>Dogs</CommonH3>
                            <PricesTextLR>
                                <CommonH4>40lbs and Over</CommonH4>
                                <br/>
                                <PricesP>$45 per night</PricesP>
                            </PricesTextLR>
                            <PricesTextRight>
                                <CommonH4>Under 40lbs</CommonH4>
                                <br/>
                                <PricesP>$40 per night</PricesP>
                            </PricesTextRight>
                        </PricesTextSection>
                        <PricesImg src={littlesBoarding} alt=''/>
                    </PricesTop>
                </PricesDiv>

                <Requirements/>

                <PricesDiv>
                    <CommonH2>
                        Cat and Pocket Pet Boarding
                    </CommonH2>
                    <PricesBottom>
                        <PricesImg src={catBoarding} alt=''/>
                        <PricesTextSection>
                            <PricesTextLR>
                                <CommonH4>Cat Boarding</CommonH4>
                                <br/>
                                <PricesP>$25 per night</PricesP>
                            </PricesTextLR>
                            <PricesTextRight>
                                <CommonH4>Pocket Pets</CommonH4>
                                <br/>
                                <PricesPocketExP>Bunnies, Birds, Reptiles, etc. </PricesPocketExP>
                                <PricesPocketInstructionP>Please provide your own cage/carrier for your pocket pet</PricesPocketInstructionP>
                                <br/>
                                <PricesP>$20 per night</PricesP>
                            </PricesTextRight>
                        </PricesTextSection>
                        <PricesImg src={pocketPets} alt=''/>
                    </PricesBottom>
                </PricesDiv>
            </CommonStartDiv>
        </>
    )
}