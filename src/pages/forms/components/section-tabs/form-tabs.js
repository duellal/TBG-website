import React from "react";
import { faPaw } from '@fortawesome/free-solid-svg-icons'

//Array of tab/section names:
import { tabNamesArr } from "./tab-names"

//Styles:
import { FormTabDiv, FormTabIcon, FormTabP, FormTabSection } from "../../../../styles/forms";

/**
 * @component returns tabs for the top of the form page. They change color when on the section + are clickable to each section
 * @param {*} props btnIndex, setBtnIndex
 * @param {state} btnIndex the current state of the button/tab index as an integer
 * @param {setState} setBtnIndex sets the btnIndex
 * @returns the form tab section
 */
export default function OwnerFormTabs(props){
    let { btnIndex, setBtnIndex } = props

    let col = 1
    let row = 1

    let TabClick = (index) => {
        let valid = document.forms['new_owner_form'].reportValidity()

        if(index > btnIndex && !valid){
            return 
        }

        setBtnIndex(index)
    }

    let tabNamesDivs = tabNamesArr.map((title, index) => {
        let colorstate = (btnIndex === index).toString()

        if(index < 3){
            let row1Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                $col={col}
                $row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    $colorstate={colorstate}
                />
                <FormTabP
                    $colorstate={colorstate}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col += 2

            return (row1Div)
        }
        else if(index === 3){
            let row1Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                $col={col}
                $row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    $colorstate={colorstate}
                />
                <FormTabP
                    $colorstate={colorstate}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col = 1

            return (row1Div)
        }
        else{
            row = 3
            let row3Div = <FormTabDiv 
                key={`${title}${index}`} 
                id={`${title}${index}`} 
                $col={col}
                $row={row}
                onClick={() => TabClick(index)}
                tabIndex={0}
            >
                <FormTabIcon 
                    icon={faPaw} 
                    size="2xl" 
                    $colorstate={colorstate}
                />
                <FormTabP
                    $colorstate={colorstate}
                > 
                    { title } 
                </FormTabP>
            </FormTabDiv>

            col += 2

            return (row3Div)
        }
    })
    
    return (
        <>
            <FormTabSection>
                {
                    tabNamesDivs
                }
            </FormTabSection>
        </>
    )
}