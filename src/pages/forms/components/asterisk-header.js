import React from "react";
import { FormAsterisk, FormAsteriskH4 } from "../../../styles/forms";


export default function AsteriskHeader(){
    return (
        <FormAsteriskH4> 
            Required information will be starred in red (
                <FormAsterisk> * </FormAsterisk>
                )
        </FormAsteriskH4>
    )
}