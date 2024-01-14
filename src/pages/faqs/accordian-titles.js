/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AccordianQuestions from "./accordian-questions";
import { FaqExpand, FaqTitleH2 } from "../../styles/FAQs";

export default function AccordianTitle({title, content}){
    const [isActive, setIsActive] = useState(false);

    return(
        <div id="accordian-title">
            <FaqExpand className="title" onClick={() => setIsActive(!isActive)}>
                <FaqTitleH2> {title} </FaqTitleH2>
                <FaqTitleH2> {isActive ? '-' : '+'} </FaqTitleH2>
            </FaqExpand>
            {isActive && 
                <div className="title-content"> 
                    {
                        content.map(({question, answer}) => (
                            <AccordianQuestions question={question} answer={answer} />
                        ))
                    }
                </div>
            }
        </div>
    )
}