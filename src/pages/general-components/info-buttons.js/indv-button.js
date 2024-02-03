import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// Styling: 
import { IndvInfoBtn, InsideBtnDiv, BtnIcon, BtnInfo, BtnTitle, ValuesIndvInfoBtn } from "../../../styles/info-button";


export default function IndvButton(props){
    const { title, icon, info } = props
    let [hover, setHover] = useState(false);
    let navigate = useNavigate();

    let hoverHandler = () => {
        setHover(!hover)
    }

    if(icon.props.icon.iconName === 'paw'){
        return (
            <>
                <ValuesIndvInfoBtn 
                    id={title} 
                    onMouseEnter={hoverHandler}
                    onMouseLeave={hoverHandler}
                >
                    <InsideBtnDiv 
                        key={title} 
                        id={title}
                        hover={hover}
                    >
                        <BtnTitle style={{fontSize: '2.4rem'}}>{title}</BtnTitle>
                        <BtnIcon>{icon}</BtnIcon>
                        <BtnInfo hover={hover}>
                            {info}
                        </BtnInfo>
                    </InsideBtnDiv>
                </ValuesIndvInfoBtn>
            </>
        )
    }

    return (
        <>
            <IndvInfoBtn 
                id={title} 
                onClick={() => navigate(`/${title}`)}
                onMouseEnter={hoverHandler}
                onMouseLeave={hoverHandler}
            >
                <InsideBtnDiv 
                    key={title} 
                    id={title}
                    hover={hover}
                >
                    <BtnTitle>{title}</BtnTitle>
                    <BtnIcon>{icon}</BtnIcon>
                    <BtnInfo hover={hover}>
                        {info}
                    </BtnInfo>
                </InsideBtnDiv>
            </IndvInfoBtn>
        </>
    )
}