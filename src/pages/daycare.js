/* eslint-disable react/prop-types */
import React from "react";

//Components:
import AccordianTitle from "./faqs/components/accordian-titles";
import Banner from "./general-components/banner-pic";
// import Requirements from "./general-components/requirements";


//Daycare Styles:
import { CommonH1, CommonH2, 
    // CommonH3, 
    CommonH4, CommonInfoSection, CommonStartDiv, HeaderSection, PricesDiv,
    //  PricesImg, PricesP, PricesTextLeft, PricesTextRight, 
     PricesSection, 
    //  ValuesItems, ValuesP, ValuesSection, ValuesText, 
     PricesAsteriskDiv, PricesAsteriskP, PricesText } from "../styles/commonBDG";
// import { DcPackageDiv, DcPackageP, DcPricesTextSection, } from "../styles/daycare";
import { AllFaqs, FaqTitleDiv } from "../styles/FAQs";

// //Images: 
// import bigsDaycare1 from '../images/daycare/bigsDaycare3.jpeg'
// import littlesDaycare1 from '../images/daycare/littlesDaycare1.jpeg'

//Variables:
// import { daycareValues } from "../constants/board-daycare-values";
import { daycareImages } from "../constants/banner-pics";

//FAQ Arrays:
import { daycareFaqs, indvTitles } from "./faqs/faq-arrays";



export default function Daycare(){
    // let listValues = daycareValues.map((statement) => {
    //     return <li>{statement}</li>
    // })

    return(
        <>
            <Banner allImages={daycareImages} />
            <CommonStartDiv>
                <CommonH1> 
                    Doggie Daycare
                </CommonH1>

                <CommonInfoSection>
                    <p>
                    Daycare is the perfect way for your pet to get extra exercise, socialize with new friends, both human and canine, and to introduce them to the facility prior to boarding. Your pet will get hours and hours of play time in small, supervised play groups in our outside and inside play areas. Groups are based on size, temperament and play style. Lunch time naps offer a well deserved rest to keep everyone balanced and happy.
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
                    <CommonH2>
                        Daycare Rates
                    </CommonH2>
                    <PricesDiv>
                        <PricesSection>
                            {/* <PricesImg src={bigsDaycare1} alt='' className="pic left"/>
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
                            <PricesImg src={littlesDaycare1} alt='' className="pic right"/> */}
                            <PricesText>
                                Full Day ..........$28
                            </PricesText>
                            <PricesText>
                                Half Day .........$18
                            </PricesText>
                        </PricesSection>
                    </PricesDiv>

                    <PricesDiv>
                        <HeaderSection>
                            <CommonH4 style={{marginTop: '40px'}}>
                                Packages (Full Day Only)
                            </CommonH4>
                            {/* <DcPackageDiv>
                                <DcPackageP>
                                    Full Day Only
                                </DcPackageP>
                            </DcPackageDiv> */}
                        </HeaderSection>
                        
                        <PricesSection>
                            {/* <PricesImg src={bigsDaycare1} alt='' className="pic left"/>
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
                            <PricesImg src={littlesDaycare1} alt='' className="pic right"/> */}
                            <PricesText>
                                10 Day .........$260
                            </PricesText>
                            <PricesText>
                                20 Day .........$480
                            </PricesText>
                            <PricesText>
                                30 Day ..........$600
                            </PricesText>

                            <PricesAsteriskDiv>
                                <PricesAsteriskP>
                                    *Packages never expire
                                </PricesAsteriskP>
                                <PricesAsteriskP>
                                    *Packages are non-refundable
                                </PricesAsteriskP>
                        </PricesAsteriskDiv>       
                        </PricesSection>

                        {/* <PricesAsteriskDiv>
                            <PricesAsteriskP className="asterisk">
                                * Packages never expire
                            </PricesAsteriskP>
                            <PricesAsteriskP className="asterisk">
                                * Packages are non-refundable
                            </PricesAsteriskP>
                        </PricesAsteriskDiv> */}
                    </PricesDiv>
                </PricesDiv>

                {/* <Requirements daycare/> */}

                <AllFaqs className="all-faqs">
                {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                    {
                        indvTitles.map((title, index) => {
                            if(title === `Daycare FAQs`){
                                return (
                                    <FaqTitleDiv key={index} id={title}>
                                        <AccordianTitle 
                                            title={title} 
                                            content={daycareFaqs} 
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