/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AccordianQuestions from "./accordian-questions";

export default function AccordianTitle({title, content}){
    const [isActive, setIsActive] = useState(false);

    return(
        <div id="accordian-title">
            <div className="title" onClick={() => setIsActive(!isActive)}>
                <h2> {title} </h2>
                <h2> {isActive ? '-' : '+'} </h2>
            </div>
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