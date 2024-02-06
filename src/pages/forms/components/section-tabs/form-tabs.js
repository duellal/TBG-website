import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import { tabNamesArr } from "./tab-names"
import { bright_red, darkGrey } from "../../../../styles/constants/colors";

export default function OwnerFormTabs(){
    //Form Tab Index State:
    const [tabIndex, setTabIndex] = useState(0)
    
    return (
        <>
            {
                tabNamesArr.map((title, index) => {
                    return (
                        <>
                            <div>
                                <FontAwesomeIcon icon={faPaw} size="2xl" color={tabIndex === index ? bright_red : darkGrey}/>
                                <p> { title } </p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}