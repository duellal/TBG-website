/* eslint-disable react/prop-types */
import React from "react";

//Components:
import AccordianTitle from "./faqs/components/accordian-titles";
import Banner from "./general-components/slideshow/banner-slideshow";

//Daycare Styles:
import { CommonH1, CommonH2, CommonH4, CommonInfoSection, CommonStartDiv, HeaderSection, PricesDiv, PricesSection, PricesAsteriskDiv, PricesAsteriskP } from "../styles/commonBDG";
import { FaqTitleDiv } from "../styles/FAQs";
import { AllRedDropDowns, CollageImg, CommonP } from "../styles/common-styles";

//Images: 
import collage from '../images/collage-daycare.jpg'

//Variables:
import { daycareImages } from "./general-components/slideshow/banner-pics";

//FAQ Arrays:
import { daycareFaqs, indvTitles } from "./faqs/faq-arrays";



export default function Daycare(){
    return(
        <>
            <Banner allImages={daycareImages} />
            <CommonStartDiv>
                <CommonH1> 
                    Doggie Daycare
                </CommonH1>

                <CommonInfoSection>
                    <CommonP>
                    Daycare is the perfect way for your pet to get extra exercise, socialize with new friends, both human and canine, and to introduce them to the facility prior to boarding. Your pet will get hours and hours of play time in small, supervised play groups in our outside and inside play areas. Groups are based on size, temperament and play style. Lunch time naps offer a well deserved rest to keep everyone balanced and happy.
                    </CommonP>
                </CommonInfoSection>

                <PricesDiv>
                    <CommonH2>
                        Daycare Rates
                    </CommonH2>
                    <PricesDiv>
                        <PricesSection>
                            <CommonP>
                                Full Day ..........$28
                            </CommonP>
                            <CommonP>
                                Half Day .........$18
                            </CommonP>
                        </PricesSection>
                    </PricesDiv>

                    <PricesDiv>
                        <HeaderSection>
                            <CommonH4 style={{marginTop: '40px'}}>
                                Packages (Full Day Only)
                            </CommonH4>
                        </HeaderSection>
                        
                        <PricesSection>
                            <CommonP>
                                10 Day .........$260
                            </CommonP>
                            <CommonP>
                                20 Day .........$480
                            </CommonP>
                            <CommonP>
                                30 Day ..........$600
                            </CommonP>

                            <PricesAsteriskDiv>
                                <PricesAsteriskP>
                                    *Packages never expire
                                </PricesAsteriskP>
                                <PricesAsteriskP>
                                    *Packages are non-refundable
                                </PricesAsteriskP>
                        </PricesAsteriskDiv>       
                        </PricesSection>
                    </PricesDiv>
                </PricesDiv>

                <AllRedDropDowns>
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
                </AllRedDropDowns>
            </CommonStartDiv>

            <CollageImg src={collage} alt=""/>
        </>
    )
}