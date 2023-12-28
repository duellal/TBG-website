/* eslint-disable react/prop-types */
import React from "react";

//Component
import Accordian from "./accordian";

//FAQ Arrays: 
import {
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
        <div id="general">
                <Accordian title={<h2>General</h2>} content={
                    <div className="dropdown">
                        {generalFaqs.map(({title, content}) => (
                            <Accordian title={title} content={content} />
                        ))}
                    </div>
                }/> 
            
        </div>
        <div id="boarding">
            <h2> Boarding </h2>
            <div className="dropdown">
                {boardingFaqs.map(({title, content}) => (
                    <Accordian title={title} content={content} />
                ))}
            </div>
        </div>
        <div id="daycare">
            <h2> Daycare </h2>
            <div className="dropdown">
                {daycareFaqs.map(({title, content}) => (
                    <Accordian title={title} content={content} />
                ))}
            </div>
        </div>
        <div id="grooming">
            <h2> Grooming </h2>
            <div className="dropdown">
                {groomingFaqs.map(({title, content}) => (
                    <Accordian title={title} content={content} />
                ))}
            </div>
        </div>
    </div>
)
}