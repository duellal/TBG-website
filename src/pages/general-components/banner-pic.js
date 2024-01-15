/* eslint-disable react/prop-types */
import React from "react";
import { BannerDiv, BannerImg } from "../../styles/banner";

export default function Banner(props){
    let { src, alt } = props

    return (
        <BannerDiv>
            <BannerImg src={src} alt={alt} />
        </BannerDiv>
    )
}
