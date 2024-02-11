import React from "react";

//Componenets:
import RadioQuestion from "../../radio-questions";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH4, IntakeHealthInput, IntakeHealthLabel, IntakeLabel, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";


/**
 * @component Pet health section labels + inputs
 * @param {*} props petKey, formData
 */
export default function PetHealth(props){
    const { petKey, formData } = props
    return(
        <div key={`pet${petKey}Health`} id={`pet${petKey}Health`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey} - {formData[`pet${petKey}_name`]}
                </IntakeH4>

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
                                    value={formData[`{pet${petKey}_vet`]}
                                />
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeHealthLabel htmlFor={`pet${petKey}_vet_phone`}>
                                    <FormAsterisk>*</FormAsterisk>      
                                     Vet Phone Number 
                                    
                                    <FormExample>
                                        ex: (xxx) xxx-xxxx
                                    </FormExample>
                                    
                                    <IntakeHealthInput 
                                    type="tel" 
                                    name={`pet${petKey}_vet_phone`} 
                                    placeholder="(___) ___-____"
                                    format="(###) ###-####" 
                                    mask="_"  
                                    required
                                    value={formData[`{pet${petKey}_vet_phone`]}
                                />
                                </IntakeHealthLabel>
                            </FlexColDiv>
                        </IntakeRow>

                        <RadioQuestion
                            htmlFor={`pet${petKey}_food_allergy`}
                            question={`Does your pet have any food allergies?`}
                            options={['yes', 'no']}
                            formData={formData}
                        />

                        <RadioQuestion
                            htmlFor={`pet${petKey}_medical_condition`}
                            question={`Does your pet have any medical conditions or disabilities that we should know about?`}
                            example={`(ex: seizures, tumors, hot spots, etc)`}
                            options={['yes', 'no']}
                            formData={formData}
                        />

                        <RadioQuestion
                            htmlFor={`pet${petKey}_past_injury`}
                            question={`Does your pet have any past injuries that we should know about? `}
                            options={['yes', 'no']}
                            formData={formData}
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