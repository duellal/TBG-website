import React from "react";

//Componenets:
import RadioQuestion from "../../radio-questions";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeMessageInput, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";


/**
 * @component Pet health section labels + inputs
 * @param {*} props changeInput, petKey, formData
 */
export default function PetHealth(props){
    const { changeInput, petKey, formData } = props
    
    return(
        <div key={`pet${petKey}_health`}>
            <IntakeDivider>
                <IntakeH5>
                    Pet {petKey} - {formData[`pet${petKey}_name`]}
                </IntakeH5>

                {/* Vet History Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_vet`}>
                                    <FormAsterisk>*</FormAsterisk> Vetinary Hospital
                                </IntakeLabel>
                                <Input 
                                    type="text" 
                                    name={`pet${petKey}_vet`} 
                                    required 
                                    value={formData[`pet${petKey}_vet`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_vet_phone`}>
                                    <FormAsterisk>*</FormAsterisk>      
                                     Vet Phone Number 
                                    
                                    <FormExample>
                                        ex: (xxx) xxx-xxxx
                                    </FormExample>
                                </IntakeLabel>
                                    
                                <PhoneInput 
                                    type="tel" 
                                    name={`pet${petKey}_vet_phone`} 
                                    placeholder="(___) ___-____"
                                    format="(###) ###-####" 
                                    mask="_"  
                                    required
                                    value={formData[`pet${petKey}_vet_phone`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>
                        </IntakeRow>

                        <RadioQuestion
                            key={`pet${petKey}_food_allergy`}
                            htmlFor={`pet${petKey}_food_allergy`}
                            question={`Does your pet have any food allergies?`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_medical_condition`}
                            htmlFor={`pet${petKey}_medical_condition`}
                            question={`Does your pet have any medical conditions or disabilities that we should know about?`}
                            example={`(ex: seizures, tumors, hot spots, etc)`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_past_injury`}
                            htmlFor={`pet${petKey}_past_injury`}
                            question={`Does your pet have any past injuries that we should know about? `}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_medical`}>
                                    Is there anything else we should know about your pet's health or medical history?
                                </IntakeLabel>
                                
                                <IntakeRow>
                                    <FlexColDiv>
                                        <IntakeMessageInput 
                                            type="text" 
                                            name={`pet${petKey}_extra_medical`}
                                            value={formData[`pet${petKey}_extra_medical`]}
                                            onChange={changeInput}
                                        />
                                    </FlexColDiv>
                                </IntakeRow>
                            </FlexColDiv>
                        </IntakeRow>
                    </IntakeCol>
                </IntakeDivider>
            </IntakeDivider>
        </div>
    )
}