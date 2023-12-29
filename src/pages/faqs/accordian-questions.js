/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function AccordianQuestions({question, answer}){
    const [isActive, setIsActive] = useState(false);

    return(
        <div id="accordian-question">
            <div className="question" onClick={() => setIsActive(!isActive)}>
                <h3> {question} </h3>
                <h3> {isActive ? '-' : '+'} </h3>
            </div>
            {isActive && <p className="answer"> {answer} </p>}
        </div>
    )
}

