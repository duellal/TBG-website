/* eslint-disable react/prop-types */
import React from "react";

//Components:
import AccordianTitle from "./faqs/components/accordian-titles";

//Grooming Styles:
import { CommonH1, 
    CommonInfoSection, CommonStartDiv, 
    PricesSection, 
    PricesAsteriskDiv, PricesAsteriskP, 
 } from "../styles/commonBDG";
import { FaqTitleDiv } from "../styles/FAQs";
import { AllRedDropDowns, CollageImg, CommonP } from "../styles/common-styles";
import { BannerDiv, BannerImg } from "../styles/banner";

// //Images:
import collage from '../images/grooming/grooming-collage-2.jpg'
import groomingBanner1 from '../images/grooming/grooming-white-tan-dog.jpg'

//FAQ Arrays:
import { groomingFaqs, indvTitles } from "./faqs/faq-arrays";

export default function Grooming(){
    return(
        <>
            <BannerDiv>
                <BannerImg
                    src={groomingBanner1}
                />
            </BannerDiv>
            <CommonStartDiv>
                <CommonH1> 
                    Grooming
                </CommonH1>

                <CommonInfoSection>
                    <p style={{margin: '40px 43px'}}>
                    Let us make your pet look and smell their best with a refreshing bath and fluff dry.  This service can be provided at the end of their boarding stay, during their daycare day or as a stand alone appointment.
                    </p>
                    {/* <GroomingImg src={grooming3} alt="" className="pic" />             */}
                </CommonInfoSection>

                {/* <GroomingPricesDiv> */}
                    {/* <HeaderSection>
                        <CommonH2>
                            Our Grooming Prices
                        </CommonH2>
                    </HeaderSection> */}
                    <PricesSection>
                        {/* <PricesImg src={grooming1} alt='' className="pic left"/>
                        <CommonPSection>
                            <CommonPLeft>
                                <CommonH4>Bath (free nail trim included)</CommonH4>
                                <br/>
                                <PricesP>$25 per animal</PricesP>
                            </CommonPLeft>
                            <CommonPRight>
                                <CommonH4>Nail trim</CommonH4>
                                <br/>
                                <PricesP>$12 per animal</PricesP>
                            </CommonPRight>
                        </CommonPSection>
                        <PricesImg src={grooming2} alt='' className="pic right"/> */}
                        <CommonP>
                            Bath (FREE Nail Trim Included) ..........$25
                        </CommonP>
                        <CommonP>
                            Nail Trim ..........$12
                        </CommonP>
                    </PricesSection>
                    <PricesAsteriskDiv>
                        <PricesAsteriskP style={{fontSize: '2.2rem'}}>
                            Extra Large dogs, Difficult dogs or Super Fluffy dogs may incur an additional fee
                        </PricesAsteriskP>
                    </PricesAsteriskDiv>
                {/* </GroomingPricesDiv> */}

                {/* <Requirements grooming='grooming'/> */}

                <AllRedDropDowns>
                {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                    {
                        indvTitles.map((title, index) => {
                            if(title === `Grooming FAQs`){
                                return (
                                    <FaqTitleDiv key={index} id={title}>
                                        <AccordianTitle 
                                            title={title} 
                                            content={groomingFaqs} 
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