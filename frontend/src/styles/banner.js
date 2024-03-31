import styled from "styled-components";
import { bright_blue } from "./constants/colors";

export const BannerDiv = styled.div`
    max-width: 100%;
    overflow: hidden;
    height: 550px;
`

export const BannerImg = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: center;
`

export const BannerSlider = styled.div`
    transition: ease 1000ms;
    white-space: nowrap;
    height: 500px;
`

export const BannerDots = styled.div`
    padding-bottom: 10px;
    position: relative;
    width: 100%;
    text-align: center;
    bottom: 2%;
    z-index: 200;
`

export const BannerIdvDot = styled.div`
    display: inline-block;
    background-color: ${bright_blue};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
`