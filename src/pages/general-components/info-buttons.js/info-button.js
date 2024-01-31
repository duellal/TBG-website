import React from "react";

//Component:
import IndvButton from "./indv-button";

//Styling:
import { InfoBtnDiv } from "../../../styles/info-button";

//Variables:
import { home_btns } from "../../../constants/home-page-btns";


export default function InfoButton(){
    return (
        <InfoBtnDiv>
            {
                home_btns.map((elem, index) => {
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