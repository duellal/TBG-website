/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Styles
import { AccordianAnswer, AccordianTitleDiv, AccordianTitleH3 } from "../../../styles/FAQs";
import { UnderlineLink } from "../../../styles/common-styles";


export default function AccordianTitles({title, info}){
    const [isActive, setIsActive] = useState(false);

    let checkParagraphs = (info) => {
        return info.map((ans, index) => {
            //Inserting  a link into the info:
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
                        <AccordianAnswer key={`${ans}_${index}`}>
                            {part2.join(' ')}
                            {' '}
                            {link}
                            {' '}
                            {part1.join(' ')}
                        </AccordianAnswer>
                    </>
                )
            }

            //Returns answer without link:
            return (
                <>
                    <AccordianAnswer key={`${ans}_${index}`}>
                        {ans}
                    </AccordianAnswer>
                </>
            )
        })
    }
    

    let checkQuestion = (title, info) => {
        if(!title){
            return (
                <AccordianAnswer className="info"> 
                    {checkParagraphs(info)} 
                </AccordianAnswer>
            )
        }

        return( 
            <AccordianTitleDiv className="title" onClick={() => setIsActive(!isActive)}>
                <AccordianTitleH3> {title} </AccordianTitleH3>
                <AccordianTitleH3> {isActive ? '-' : '+'} </AccordianTitleH3>
            </AccordianTitleDiv>
            )
    }

    return(
        <div id="accordian-title">
            {checkQuestion(title, info)}
            
            {
                isActive && 
                <AccordianAnswer> 
                    {checkParagraphs(info)} 
                </AccordianAnswer>
            }
        </div>
    )
}

