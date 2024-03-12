import React from "react";

//Componenets:
import RadioQuestion from "../../radio-questions";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeMessageInput, IntakeRow, PhoneInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormExample } from "../../../../../styles/forms";

//Variables:
import { healthQs } from "./pet-questions";


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
                                    Vetinary Hospital
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
                            question={healthQs[0]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_medical_condition`}
                            htmlFor={`pet${petKey}_medical_condition`}
                            question={healthQs[1]}
                            example={healthQs[2]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_past_injury`}
                            htmlFor={`pet${petKey}_past_injury`}
                            question={healthQs[3]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_medical`}>
                                    Is there anything else we should know about your pet's health or medical history? - Not Required
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