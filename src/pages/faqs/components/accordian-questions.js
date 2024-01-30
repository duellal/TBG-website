/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaqAnswer, FaqQuestionDiv, FaqQuestionH3 } from "../../../styles/FAQs";

export default function AccordianQuestions({question, answer}){
    const [isActive, setIsActive] = useState(false);

    let checkParagraphs = (answer) => {
        return answer.map((ans, index) => {
            return (
                <>
                    <FaqAnswer key={`${ans}_${index}`}>
                        {ans}
                    </FaqAnswer>
                </>
            )
        })
    }

    return(
        <div id="accordian-question">
            <FaqQuestionDiv className="question" onClick={() => setIsActive(!isActive)}>
                <FaqQuestionH3> {question} </FaqQuestionH3>
                <FaqQuestionH3> {isActive ? '-' : '+'} </FaqQuestionH3>
            </FaqQuestionDiv>
            {isActive && <FaqAnswer className="answer"> {checkParagraphs(answer)} </FaqAnswer>}
        </div>
    )
}

