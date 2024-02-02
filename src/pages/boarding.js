/* eslint-disable react/prop-types */
import React from "react";

//Boarding Styles:
// import { PricesPocketExP, PricesPocketInstructionP } from "../styles/boarding";
import { 
    // ValuesItems, ValuesSection, ValuesText, ValuesLi, ValuesP, 
    CommonH1, CommonH2, CommonStartDiv, CommonInfoSection, PricesDiv, PricesSection, 
    // PricesImg, PricesTextRight, PricesTextLeft, PricesTextSection, CommonH4, PricesP, PricesAsteriskDiv, PricesAsteriskP
     HeaderSection, CommonH3, PricesText } from "../styles/commonBDG";
import { AllFaqs, FaqTitleDiv } from "../styles/FAQs";

//Components: 
import AccordianTitle from './faqs/components/accordian-titles';
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

// //Images:
// import bigsBoarding from '../images/boarding/bigs-boarding.jpeg';
// import littlesBoarding from '../images/boarding/littles-boarding.jpeg'
// import pocketPets from '../images/boarding/pocket-pets.jpeg'
// import catBoarding from '../images/boarding/cat-boarding.jpeg'

// Variables:
// import { boardingValues } from "../constants/board-daycare-values";
import { boardingImages } from "../constants/banner-pics";

//FAQ Arrays: 
import {
    indvTitles,
    boardingFaqs,
} from './faqs/faq-arrays'

export default function Boarding(){
    // let listValues = boardingValues.map((statement) => {
    //     return <ValuesLi>{statement}</ValuesLi>
    // })

    return(
        <>
            <Banner allImages={boardingImages}/>
            <CommonStartDiv>
                <CommonH1> 
                    Boarding at Our Facility
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

                    {/* <ValuesSection>
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
                    </ValuesSection> */}
                </CommonInfoSection>

                <PricesDiv>
                    <HeaderSection>
                        <CommonH2>
                            Dog Boarding
                        </CommonH2>
                        <div style={{width: '100%', height: '20px'}}></div>
                        <CommonH3>
                            Rates
                        </CommonH3>
                    </HeaderSection>
                    <PricesSection>
                        {/* <PricesImg src={bigsBoarding} alt=''/>
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
                        <PricesImg src={littlesBoarding} alt=''/> */}
                        <PricesText>
                            Dogs under 40 lbs - $40.00/night
                        </PricesText>
                        <PricesText>
                            Dogs 40 lbs and over - $45.00/night
                        </PricesText>
                        <PricesText>
                            Additional Dog(s) - $30.00/night
                        </PricesText>
                    </PricesSection>
                </PricesDiv>

                <Requirements boarding='boarding'/>

                <PricesDiv>
                    <HeaderSection>
                        <CommonH2>
                            Other Pets
                        </CommonH2>
                        <div style={{width: '100%', height: '20px'}}></div>
                        <CommonH3>
                            Rates
                        </CommonH3>
                    </HeaderSection>
                    <PricesSection>
                        {/* <PricesImg src={catBoarding} alt=''/>
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
                        <PricesImg src={pocketPets} alt=''/> */}
                        <PricesText>
                            Cat Boarding - $25/night
                        </PricesText>
                        <PricesText>
                            Additional Cat(s) - $15/night
                        </PricesText>
                        <PricesText>
                            Pocket Pets (Bunnies, Birds, Reptiles, etc.) - $20/night
                        </PricesText>
                    </PricesSection>
                    {/* <PricesAsteriskDiv>
                        <PricesAsteriskP>
                            * Please bring your cats and pocket pets in a carrier when entering the building.
                        </PricesAsteriskP>
                    </PricesAsteriskDiv> */}
                    <Requirements pocket={'pocket'} />
                </PricesDiv>

                <AllFaqs className="all-faqs">
                {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                    {
                        indvTitles.map((title, index) => {
                            if(title === `Boarding FAQs`){
                                return (
                                    <FaqTitleDiv key={index} id={title}>
                                        <AccordianTitle 
                                            title={title} 
                                            content={boardingFaqs} 
                                        />
                                    </FaqTitleDiv>
                                )
                            }
                            return null
                        })
                    }
                </AllFaqs>
            </CommonStartDiv>
        </>
    )
}