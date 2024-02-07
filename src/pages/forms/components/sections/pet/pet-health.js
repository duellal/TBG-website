import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH4, IntakeH5, IntakeHealthInput, IntakeHealthLabel, IntakeLabel, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk, FormExample } from "../../../../../styles/forms";


export default function PetHealth(props){
    const { petKey } = props
    return(
        <div key={`pet${petKey}Health`} id={`pet${petKey}Health`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey}
                </IntakeH4>

                {/* Vet History Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_vet`}>
                                    <FormAsterisk>*</FormAsterisk> Vetinary Hospital
                                </IntakeLabel>
                                <Input type="text" name={`{pet${petKey}_vet`} required />
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeHealthLabel htmlFor={`pet${petKey}_vet_phone`}>
                                    <FormAsterisk>*</FormAsterisk>      
                                     Vet Phone Number 
                                    <br/>
                                    <FormExample>
                                        ex: (xxx) xxx-xxxx
                                    </FormExample>
                                </IntakeHealthLabel>

                                <IntakeHealthInput 
                                    type="tel" 
                                    name={`{pet${petKey}_vet_phone`} 
                                    placeholder="(___) ___-____"
                                    format="(###) ###-####" 
                                    mask="_"  
                                    required
                                />
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_food_allergy`}>
                                    Does your pet have any food allergies?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type="radio" id={`pet${petKey}_food_allergy_yes`} name={`pet${petKey}_food_allergy`} />
                                    <IntakeLabel htmlFor={`pet${petKey}_food_allergy_yes`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type="radio" id={`pet${petKey}_food_allergy_no`} name={`pet${petKey}_food_allergy`} />
                                    <IntakeLabel htmlFor={`pet${petKey}_food_allergy_no`}>
                                        No
                                    </IntakeLabel>
                                </IntakeRow>

                                <IntakeRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_food_allergy_list`}>
                                            If yes, please list them
                                        </IntakeLabel>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_food_allergy_list`}/>
                                    </FlexColDiv>
                                </IntakeRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_medical_condition`}>
                                    Does your pet have any medical conditions or disabilities that we should know about? 
                                </IntakeLabel>
                                <IntakeLabel htmlFor={`pet${petKey}_medical_condition_examples`}>
                                    (ex: seizures, tumors, hot spots, etc)
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type="radio" id={`pet${petKey}_medical_condition_yes`} name={`pet${petKey}_medical_condition`}/>
                                    <IntakeLabel htmlFor={`pet${petKey}_medical_condition_yes`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type="radio" id={`pet${petKey}_medical_condition_no`} name={`pet${petKey}_medical_condition`}/>
                                    <IntakeLabel htmlFor={`pet${petKey}_medical_condition_no`}>
                                        No
                                    </IntakeLabel>
                                </IntakeRow>

                                <IntakeRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_medical_condition_list`}>
                                            If yes, please list them
                                        </IntakeLabel>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_medical_condition_list`}/>
                                    </FlexColDiv>
                                </IntakeRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_past_injury`}>
                                    Does your pet have any past injuries that we should know about? 
                                </IntakeLabel>

                                <IntakeRow>
                                    <Input type="radio" id={`pet${petKey}_medical_injury_yes`} namename={`pet${petKey}_medical_injury`}/>
                                    <IntakeLabel htmlFor={`pet${petKey}_past_injury_yes`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type="radio" id={`pet${petKey}_medical_injury_no`}/>
                                    <IntakeLabel htmlFor={`pet${petKey}_past_injury_no`}>
                                        No
                                    </IntakeLabel>
                                </IntakeRow>

                                <IntakeRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_past_injury_list`}>
                                            If yes, please list them
                                        </IntakeLabel>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_past_injury_list`}/>
                                    </FlexColDiv>
                                </IntakeRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_medical`}>
                                    Is there anything else we should know about your pet's health or medical history?
                                </IntakeLabel>
                                
                                <IntakeRow>
                                    <FlexColDiv>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_extra_medical`}/>
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