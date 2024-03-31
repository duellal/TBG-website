/* eslint-disable react/prop-types */
import React from "react";

//Boarding Styles:
import { CommonH1, CommonH2, CommonStartDiv, CommonInfoSection, PricesDiv, PricesSection, HeaderSection, CommonH3 } from "../styles/commonBDG";
import { FaqTitleDiv } from "../styles/FAQs";
import { AllRedDropDowns, CollageImg, CommonP } from "../styles/common-styles";
import { BannerDiv, BannerImg } from "../styles/banner";

//Components: 
import AccordianTitle from "./general-components/accordian-divs/accordian-titles";
import Requirements from "./general-components/requirements";

//Images:
import boardingBanner5 from '../images/boarding/boarding-slide-show-5.png'
import { boardingImages } from "./general-components/slideshow/banner-pics-arr";
import collage from '../images/collage-boarding.jpg'

//FAQ Arrays: 
import {
    indvTitles,
    boardingFaqs,
} from './faqs/faq-arrays'


export default function Boarding(){
    return(
        <>
            <BannerDiv>
                <BannerImg
                    src={boardingBanner5}
                />
            </BannerDiv>
            <CommonStartDiv>
                <CommonH1> 
                    Boarding at Our Facility
                </CommonH1>

                <CommonInfoSection>
                    <CommonP>
                        All inclusive overnight boarding for your pet while you're away!
                    </CommonP>
                    <br/>
                    <CommonP>
                    Your pet will enjoy spacious accommodations, fluffy bedding, play time, potty
                    breaks, meals, water play (weather permitting) and constant interaction with staff during their stay. All activities are included in the boarding rate.
                    </CommonP>
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
                        <CommonP>
                            Dogs under 40 lbs ..........$40/night
                        </CommonP>
                        <CommonP>
                            Dogs 40 lbs and over ..........$45/night
                        </CommonP>
                        <CommonP>
                            Additional Dog(s) ..........$35/night
                        </CommonP>
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
                        <CommonP>
                            Cat Boarding ..........$25/night
                        </CommonP>
                        <CommonP>
                            Additional Cat(s) ..........$15/night
                        </CommonP>
                        <CommonP>
                            Pocket Pets (Bunnies, Birds, Reptiles, etc.) ..........$20/night
                        </CommonP>
                    </PricesSection>

                    <Requirements pocket={'pocket'} />
                </PricesDiv>

                <AllRedDropDowns>
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
                </AllRedDropDowns>
            </CommonStartDiv>

            <CollageImg src={collage} alt=""/>
        </>
    )
}