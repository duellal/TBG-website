import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bright_red, darkGrey } from "./constants/colors"


export const FormTabSection = styled.section`
width: 100%;
display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 30px 30px;
row-gap: 10px;
justify-content: space-around;
padding: 15px 10px 0;

// border: 2px solid pink;
`

export const FormTabDiv = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: auto;

${props => {
    let { col, row } = props;

    return {
        'grid-column-start': col,
        'grid-column-end': col,
        'grid-row-start': row,
        'grid-row-end': row,
        // 'border': `${col}px solid black`,
    }
    
}}

// border: 1px solid blue;
`

export const FormTabIcon = styled(FontAwesomeIcon)`
${props => {
    return props.colorState ? {
        color: bright_red
    } : {
        color: darkGrey
    }
 }}
`

export const FormTabP = styled.p`
font-size: 16px;
text-align: left;
margin: 6px;
`