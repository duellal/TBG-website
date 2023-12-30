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
import '../../styles/FAQs.css'

export default function FAQs(){
    return(
        <div id='faqs'>
            <h1> 
                Frequently Asked Questions
            </h1>

            <div className="all-faqs">
            {/* Gets different accordian titled FAQs with accordian content (?s and answers) */}
                {
                    titles.map((title, index) => {
                        if(title === 'General'){
                            return (
                                <div key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={generalFaqs} 
                                    />
                                </div>
                            )
                        }
                        else if(title === `Boarding`){
                            return (
                                <div key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={boardingFaqs} 
                                    />
                                </div>
                            )
                        }
                        else if(title === `Daycare`){
                            return (
                                <div key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={daycareFaqs} 
                                    />
                                </div>
                            )
                        }
                        else if(title === `Grooming`){
                            return (
                                <div key={index} id={title}>
                                    <AccordianTitle 
                                        title={title} 
                                        content={groomingFaqs} 
                                    />
                                </div>
                            )
                        }
                        else{
                            return <div>Error</div>
                        }
                    })
                }
            </div>
        </div>
    )
}