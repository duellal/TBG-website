import styled from "styled-components";

export const BannerDiv = styled.div`
    max-width: 100%;
    overflow: hidden;
`

export const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`

export const BannerSlider = styled.div`
    transition: ease 1000ms;
    white-space: nowrap;
    height: 500px;
    // z-index: 0;
    // position: relative;
`

export const BannerDots = styled.div`
    text-align: center;
    // z-index: 2;
    // position: relative;
`

export const BannerIdvDot = styled.div`
    display: inline-block;
    color: grey;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    // z-index: 3;
    // position: relative;
`