/* eslint-disable react/prop-types */
import React from "react";

//Components:
import AccordianTitle from './components/accordian-titles';

//FAQ Arrays: 
import {
    faqPageTitles,
    generalFaqs,
    boardingFaqs,
    daycareFaqs,
    groomingFaqs
} from './faq-arrays'

//Styles:
import { AllFaqs, FaqH1, FaqSection, FaqTitleDiv } from "../../styles/FAQs";

export default function FAQs(){
    return(
        <FaqSection id='faqs'>
            <FaqH1> 
                Frequently Asked Questions
            </FaqH1>

            <AllFaqs className="all-faqs">
            {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                {
                    faqPageTitles.map((title, index) => {
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