/* eslint-disable react/prop-types */
import React from "react";

//Components:
import Banner from "./general-components/banner-pic";
import Requirements from "./general-components/requirements";

//Grooming Styles:
import { CommonH1, CommonH2, CommonH4, CommonInfoSection, CommonStartDiv, PricesImg, PricesTextRight, PricesTextSection, PricesSection, PricesTextLeft, PricesAsteriskDiv, PricesAsteriskP, PricesP, HeaderSection } from "../styles/commonBDG";

//Images:
import grooming1 from '../images/grooming/grooming-1.jpeg';
import grooming2 from '../images/grooming/grooming-2.jpeg';
import grooming3 from '../images/grooming/grooming-3.jpeg';

//Variables:
import { groomingImages } from "../constants/banner-pics";
import { GroomingImg, GroomingPricesDiv } from "../styles/grooming";

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
                    Let us make your pet look and smell their best with a refreshing bath and fluff dry.  This service can be provided at the end of their boarding stay, during their daycare day or as a stand alone appointment.
                    </p>
                    <GroomingImg src={grooming3} alt="" className="pic" />            
                </CommonInfoSection>

                <GroomingPricesDiv>
                    <HeaderSection>
                        <CommonH2>
                            Our Grooming Prices
                        </CommonH2>
                    </HeaderSection>
                    <PricesSection>
                        <PricesImg src={grooming1} alt='' className="pic left"/>
                        <PricesTextSection>
                            <PricesTextLeft>
                                <CommonH4>Bath (free nail trim included)</CommonH4>
                                <br/>
                                <PricesP>$25 per animal</PricesP>
                            </PricesTextLeft>
                            <PricesTextRight>
                                <CommonH4>Nail trim</CommonH4>
                                <br/>
                                <PricesP>$12 per animal</PricesP>
                            </PricesTextRight>
                        </PricesTextSection>
                        <PricesImg src={grooming2} alt='' className="pic right"/>
                    </PricesSection>
                    <PricesAsteriskDiv>
                        <PricesAsteriskP>
                            * Extra Large dogs, Difficult dogs or Super Fluffy dogs may incur an additional fee
                        </PricesAsteriskP>
                    </PricesAsteriskDiv>
                </GroomingPricesDiv>

                <Requirements grooming='grooming'/>
            </CommonStartDiv>
        </>
    )
}