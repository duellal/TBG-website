import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// Styling: 
import { IndvInfoBtn, InsideBtnDiv, BtnIcon, BtnInfo, BtnTitle } from "../../../styles/info-button";


export default function IndvButton(props){
    const { title, icon, info } = props
    let [hover, setHover] = useState(false);
    let navigate = useNavigate();

    let hoverHandler = () => {
        setHover(!hover)
    }

    return (
        <>
            <IndvInfoBtn 
                id={title} 
                onClick={() => navigate(`/${title}`)}
                onMouseEnter={hoverHandler}
                onMouseLeave={hoverHandler}
            >
                <InsideBtnDiv key={title} id={title}>
                    <BtnTitle>{title}</BtnTitle>
                    <BtnIcon>{icon}</BtnIcon>
                        {
                            hover ? <BtnInfo>{info}</BtnInfo> : null
                        }
                </InsideBtnDiv>
            </IndvInfoBtn>
        </>
    )
}