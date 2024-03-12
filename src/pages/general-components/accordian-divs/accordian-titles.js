/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AccordianTitles from "./accordian-questions";
import { FaqExpand, FaqTitleH2 } from "../../../styles/FAQs";

export default function AccordianTitle({title, content}){
    const [isActive, setIsActive] = useState(false);

    return(
        <div>
            <FaqExpand className="title" onClick={() => setIsActive(!isActive)}>
                <FaqTitleH2> {title} </FaqTitleH2>
                <FaqTitleH2> {isActive ? '-' : '+'} </FaqTitleH2>
            </FaqExpand>
            {isActive && 
                <div className="title-content"> 
                    {
                        content.map(({title, info}) => {
                            return <AccordianTitles 
                                    title={title} 
                                    info={info}
                                />
                            }
                        )
                    }
                </div>
            }
        </div>
    )
}