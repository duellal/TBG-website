/* eslint-disable react/prop-types */
import React from "react";

//Components:
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Daycare Styles:
import { CommonH1, CommonH2, CommonH3, CommonH4, CommonInfoSection, CommonStartDiv, HeaderSection, PricesDiv, PricesImg, PricesP, PricesTextLeft, PricesTextRight, PricesSection, ValuesItems, ValuesP, ValuesSection, ValuesText, PricesAsteriskDiv, PricesAsteriskP } from "../styles/commonBDG";
import { DcPackageDiv, DcPackageP, DcPricesTextSection, } from "../styles/daycare";

//Images: 
import bigsDaycare1 from '../images/daycare/bigsDaycare3.jpeg'
import littlesDaycare1 from '../images/daycare/littlesDaycare1.jpeg'

//Variables:
import { daycareValues } from "../constants/board-daycare-values";
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
                    Daycare is the perfect way for your pet to get extra exercise, socialize with new friends, both human and canine, and to introduce them to the facility prior to boarding. Your pet will get hours and hours of play time in small, supervised play groups in our outside and inside play areas. Groups are based on size, temperament and play style. Lunch time naps offer a well deserved rest to keep everyone balanced and happy.
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
                    <CommonH2>
                        Our Daycare Prices
                    </CommonH2>
                    <PricesDiv>
                        <HeaderSection>
                            <CommonH3>
                                Daily Rate
                            </CommonH3>
                        </HeaderSection>
                        
                        <PricesSection>
                            <PricesImg src={bigsDaycare1} alt='' className="pic left"/>
                            <DcPricesTextSection>
                                <PricesTextLeft>
                                    <CommonH4>Full Day</CommonH4>
                                    <br/>
                                    <PricesP>$28 per Visit</PricesP>
                                </PricesTextLeft>
                                <PricesTextRight>
                                    <CommonH4>Half Day</CommonH4>
                                    <br/>
                                    <PricesP>$18 per Visit</PricesP>
                                </PricesTextRight>
                            </DcPricesTextSection>
                            <PricesImg src={littlesDaycare1} alt='' className="pic right"/>
                        </PricesSection>
                    </PricesDiv>

                    <PricesDiv>
                        <HeaderSection>
                            <CommonH3>
                                Daycare Packages
                            </CommonH3>
                            <DcPackageDiv>
                                <DcPackageP>
                                    Full Day Only
                                </DcPackageP>
                            </DcPackageDiv>
                        </HeaderSection>
                        
                        <PricesSection>
                            <PricesImg src={bigsDaycare1} alt='' className="pic left"/>
                            <DcPricesTextSection>
                                <PricesTextLeft>
                                    <CommonH4>
                                        10 Day
                                    </CommonH4>
                                    <br/>
                                    <PricesP>
                                        $260
                                    </PricesP>
                                </PricesTextLeft>
                                <PricesTextRight>
                                    <CommonH4>
                                        20 Day
                                    </CommonH4>
                                    <br/>
                                    <PricesP>
                                        $480
                                    </PricesP>
                                </PricesTextRight>
                                <PricesTextLeft>
                                    <CommonH4>
                                        30 Day
                                    </CommonH4>
                                    <br/>
                                    <PricesP>
                                        $600
                                    </PricesP>
                                </PricesTextLeft>
                            </DcPricesTextSection>
                            <PricesImg src={littlesDaycare1} alt='' className="pic right"/>
                        </PricesSection>

                        <PricesAsteriskDiv>
                            <PricesAsteriskP className="asterisk">
                                * Packages never expire
                            </PricesAsteriskP>
                            <PricesAsteriskP className="asterisk">
                                * Packages are non-refundable
                            </PricesAsteriskP>
                        </PricesAsteriskDiv>
                    </PricesDiv>
                </PricesDiv>

                <Requirements daycare/>
            </CommonStartDiv>
        </>
    )
}