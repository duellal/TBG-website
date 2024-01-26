import React, { useState } from "react";

//Styling:
import { BtnIcon, BtnInfo, BtnTitle, IndvInfoBtn, InfoBtnDiv, InsideBtnDiv } from "../../styles/info-button";

//Variables:
import { home_btns } from "../../constants/home-btns";
import { useNavigate } from "react-router-dom";


export default function InfoButton(){
    let [hover, setHover] = useState(false);
    let navigate = useNavigate();

    let Buttons = (props) => {
        return home_btns.map((elem) => {
            const { title, icon, info } = elem
            return (
                <IndvInfoBtn onClick={() => navigate(`/${title}`)}>
                    <InsideBtnDiv key={title} id={title}>
                        <BtnTitle>{title}</BtnTitle>
                        <BtnIcon>{icon}</BtnIcon>
                        {/* <BtnInfo>{info}</BtnInfo> */}
                    </InsideBtnDiv>
                </IndvInfoBtn>
            )
        })
    }

    return (
        <InfoBtnDiv>
            <Buttons onHover={hover}/>
        </InfoBtnDiv>
    )
}
