import React from "react"

//Intake Form - Owner Styles:
import { IntakeDivider, IntakeH4, IntakeHDiv, IntakeLabel, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { FlexColDiv, Input } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";

/**
 * @component owner info section labels + inputs
 * @param {*} props - ownerKey, formData
 */
export default function OwnerInfo(props){
    const { ownerKey, formData, editFormData} = props

    //onChange function changeInput:
    function changeInput(event){
        let { name, value } = event.target
        // console.log(`HERE target name: value:`, `${name}: ${value}`)
        editFormData({...formData, [name]: value})
        // sessionStorage.setItem(name, value)
        // localStorage.setItem(name, value)
        // let key = `owner1_first_name`
        console.log(`HERE?`, formData.owner1_first_name)
        console.log(`Form Data in owners:`, formData)
     }

    return(
        <IntakeHDiv key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
            <IntakeDivider>
                    <IntakeH4>
                        {ownerKey === 1 ? 'Primary' : 'Secondary'} Owner
                        <br/>
                        Owner {ownerKey}
                    </IntakeH4>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            <FormAsterisk>*</FormAsterisk> First Name
                        </IntakeLabel>
                        <Input 
                            type="text" 
                            name={`owner${ownerKey}_first_name`}
                            required 
                            // value={formData[`owner${ownerKey}_first_name`]}
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                            <FormAsterisk>*</FormAsterisk> Last Name
                            </IntakeLabel>
                            <Input 
                                type="text" 
                                name={`owner${ownerKey}_last_name`} 
                                required
                                value={formData[`owner${ownerKey}_last_name`]}    
                                onChange={changeInput}
                            />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            <FormAsterisk>*</FormAsterisk> 
                            Email 
                            <FormExample>
                                ex: someemail@server.com
                            </FormExample>
                        </IntakeLabel>
                        <Input 
                            type="email" 
                            name={`owner${ownerKey}_email`} 
                            required 
                            value={formData[`owner${ownerKey}_email`]}
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            <FormAsterisk>*</FormAsterisk> 
                            Phone 
                            <FormExample>
                                ex: (xxx) xxx-xxxx
                            </FormExample>
                        </IntakeLabel>
                        <PhoneInput
                            type="tel" 
                            name={`owner${ownerKey}_phone`} 
                            placeholder="(___) ___-____"
                            format="(###) ###-####" 
                            mask="_" 
                            required
                            value={formData[`owner${ownerKey}_phone`]}        
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Address
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address1`} 
                            required 
                            value={formData[`owner${ownerKey}_address1`]}
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input 
                            type='address' 
                            name={`owner${ownerKey}_address2`}
                            value={formData[`owner${ownerKey}_address2`]}
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> City
                        </IntakeLabel>
                        <Input 
                            type="city" 
                            name={`owner${ownerKey}_city`} 
                            required 
                            value={formData[`owner${ownerKey}_city`]}
                            onChange={changeInput}
                       />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> State
                        </IntakeLabel>
                        <Input 
                            type="state" 
                            name={`owner${ownerKey}_state`} 
                            required 
                            value={formData[`owner${ownerKey}_state`]}  
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                        <FormAsterisk>*</FormAsterisk> Zip Code
                        </IntakeLabel>
                        <Input 
                            type="zipcode" 
                            name={`owner${ownerKey}_zipcode`} 
                            required 
                            value={formData[`owner${ownerKey}_zipcode`]}    
                            onChange={changeInput}
                        />
                    </FlexColDiv>
                </IntakeRow>
        </IntakeHDiv>
    )
}