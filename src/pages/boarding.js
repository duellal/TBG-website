/* eslint-disable react/prop-types */
import React from "react";

//Boarding Styles:
import { PricesPocketExP, PricesPocketInstructionP } from "../styles/boarding";
import { ValuesItems, ValuesSection, ValuesText, ValuesLi, ValuesP, CommonH1, CommonH2, CommonStartDiv, CommonInfoSection, PricesDiv, PricesSection, PricesImg, PricesTextRight, PricesTextLeft, PricesTextSection, CommonH4, PricesP, PricesAsteriskDiv, PricesAsteriskP, HeaderSection } from "../styles/commonBDG";

//Components: 
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Images:
import bigsBoarding from '../images/boarding/bigs-boarding.jpeg';
import littlesBoarding from '../images/boarding/littles-boarding.jpeg'
import pocketPets from '../images/boarding/pocket-pets.jpeg'
import catBoarding from '../images/boarding/cat-boarding.jpeg'

// Variables:
import { boardingValues } from "../constants/board-daycare-values";
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
                    Your pet will enjoy spacious accommodations, fluffy bedding, play time, potty
                    breaks, meals, water play (weather permitting) and constant interaction with staff during their stay. All activities are included in the boarding rate.
                    </p>

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
                </CommonInfoSection>

                <PricesDiv>
                    <HeaderSection>
                        <CommonH2>
                            Dog Boarding Prices
                        </CommonH2>
                    </HeaderSection>
                    <PricesSection>
                        <PricesImg src={bigsBoarding} alt=''/>
                        <PricesTextSection>
                            <PricesTextLeft>
                                <CommonH4>40lbs+</CommonH4>
                                <br/>
                                <PricesP>$45 per night</PricesP>
                            </PricesTextLeft>
                            <PricesTextRight>
                                <CommonH4>Under 40lbs</CommonH4>
                                <br/>
                                <PricesP>$40 per night</PricesP>
                            </PricesTextRight>
                            <PricesTextLeft>
                                <CommonH4>Additional Dog(s)</CommonH4>
                                <br/>
                                <PricesP>$30 per night</PricesP>
                            </PricesTextLeft>
                        </PricesTextSection>
                        <PricesImg src={littlesBoarding} alt=''/>
                    </PricesSection>
                </PricesDiv>

                <Requirements boarding='boarding'/>

                <PricesDiv>
                    <CommonH2 style={{marginTop: '60px'}}>
                        Cat and Pocket Pet Boarding
                    </CommonH2>
                    <PricesSection>
                        <PricesImg src={catBoarding} alt=''/>
                        <PricesTextSection>
                            <PricesTextLeft>
                                <CommonH4>Cat Boarding</CommonH4>
                                <br/>
                                <PricesP>$25 per night</PricesP>
                            </PricesTextLeft>
                            <PricesTextRight>
                                <CommonH4>Additional Cat(s)</CommonH4>
                                <br/>
                                <PricesP>$15 per night</PricesP>
                            </PricesTextRight>
                            <PricesTextLeft>
                                <CommonH4>Pocket Pets</CommonH4>
                                <br/>
                                <PricesPocketExP>Bunnies, Birds, Reptiles, etc. </PricesPocketExP>
                                <PricesPocketInstructionP>* Please provide your own cage/carrier for your pocket pet</PricesPocketInstructionP>
                                <br/>
                                <PricesP>$20 per night</PricesP>
                            </PricesTextLeft>
                        </PricesTextSection>
                        <PricesImg src={pocketPets} alt=''/>
                    </PricesSection>
                    <PricesAsteriskDiv>
                        <PricesAsteriskP>
                            * Please bring your cats and pocket pets in a carrier when entering the building.
                        </PricesAsteriskP>
                    </PricesAsteriskDiv>
                </PricesDiv>
            </CommonStartDiv>
        </>
    )
}