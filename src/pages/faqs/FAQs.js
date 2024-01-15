/* eslint-disable react/prop-types */
import React from "react";

//Other Component
import AccordianTitle from './accordian-titles';

//FAQ Arrays: 
import {
    titles,
    generalFaqs,
    boardingFaqs,
    daycareFaqs,
    groomingFaqs
} from './faq-arrays'

//FAQs Styles:
import { AllFaqs, FaqSection, FaqTitleDiv } from "../../styles/FAQs";

export default function FAQs(){
    return(
        <FaqSection id='faqs'>
            <h1> 
                Frequently Asked Questions
            </h1>

            <AllFaqs className="all-faqs">
            {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                {
                    titles.map((title, index) => {
                        if(title === 'General'){
                            return (
                                <FaqTitleDiv key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={generalFaqs} 
                                    />
                                </FaqTitleDiv>
                            )
                        }
                        else if(title === `Boarding`){
                            return (
                                <FaqTitleDiv key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={boardingFaqs} 
                                    />
                                </FaqTitleDiv>
                            )
                        }
                        else if(title === `Daycare`){
                            return (
                                <FaqTitleDiv key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={daycareFaqs} 
                                    />
                                </FaqTitleDiv>
                            )
                        }
                        else if(title === `Grooming`){
                            return (
                                <FaqTitleDiv key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={groomingFaqs} 
                                    />
                                </FaqTitleDiv>
                            )
                        }
                        else{
                            return <div>Error</div>
                        }
                    })
                }
            </AllFaqs>
        </FaqSection>
    )
}