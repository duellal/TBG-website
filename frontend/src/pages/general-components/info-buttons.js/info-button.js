import React from "react";

//Component:
import IndvButton from "./indv-button";

//Styling:
import { InfoBtnDiv } from "../../../styles/info-button";


export default function InfoButton(props){
    let { array } = props
    return (
        <InfoBtnDiv>
            {
                array.map((elem, index) => {
                    let { title, icon, info } = elem
                    return <IndvButton 
                            key={`${title}${index}`} 
                            icon={icon}
                            title={title}
                            info={info}
                        />
                })
            }
        </InfoBtnDiv>
    )
}