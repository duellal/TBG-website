/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Styles
import { FaqAnswer, FaqQuestionDiv, FaqQuestionH3 } from "../../../styles/FAQs";
import { UnderlineLink } from "../../../styles/common-styles";


export default function AccordianQuestions(props){
    let { answer, question } = props
    const [isActive, setIsActive] = useState(false);

    let checkParagraphs = (answer) => {
        return answer.map((ans, index) => {
            //Inserting  a link into the answer:
            if(ans.includes('.com')){
                let link
                let linkIndex
                let splitAns = ans.split(' ')
                let part1 = []
                let part2 = []

                splitAns.map((word, wordIndex) => {
                    if(word.includes('.com')){
                        link = <UnderlineLink href={`mailto:${word}`}>{word}</UnderlineLink>
                        linkIndex = wordIndex
                        return (link, linkIndex)
                    }
                    else if(wordIndex > linkIndex){
                        return part1.push(word)
                    }
                    else{
                        return part2.push(word)
                    }

                })

                return (
                    <>
                        <FaqAnswer key={`${ans}_${index}`}>
                            {part2.join(' ')}
                            {' '}
                            {link}
                            {' '}
                            {part1.join(' ')}
                        </FaqAnswer>
                    </>
                )
            }

            //Returns answer without link:
            return (
                <>
                    <FaqAnswer key={`${ans}_${index}`}>
                        {ans}
                    </FaqAnswer>
                </>
            )
        })
    }
    

    let checkQuestion = (question, answer) => {
        if(!question){
            return (
                <FaqAnswer className="answer"> {checkParagraphs(answer)} </FaqAnswer>
            )
        }

        return( 
            <FaqQuestionDiv className="question" onClick={() => setIsActive(!isActive)}>
                <FaqQuestionH3> {question} </FaqQuestionH3>
                <FaqQuestionH3> {isActive ? '-' : '+'} </FaqQuestionH3>
            </FaqQuestionDiv>
            )
    }

    return(
        <div id="accordian-question">
            {checkQuestion(question, answer)}
            
            {isActive && <FaqAnswer> {checkParagraphs(answer)} </FaqAnswer>}
        </div>
    )
}

