import styled from "styled-components";

export const DropDownContent = styled.div`
    display:none;
    position:absolute;
    marin: 0 auto;
    z-index: 1;  
`

export const Item = styled.li`
    display: inline-block;

    &:hover ${DropDownContent} {
        transform: translateX(-12px);
        display: block;
    }
`

export const DropDownLink = styled.a`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: #06aed5;
    
    &:hover {
        background-color: #f1f1f1;
        color: black;
    }
`