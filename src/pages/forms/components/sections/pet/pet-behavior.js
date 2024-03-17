import React from "react";

//Components:
import RadioQuestion from "../radio-explainations";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { FlexColDiv } from "../../../../../styles/contact";

//Varaibles:
import { behaviorQs } from "./pet-questions";


/**
 * @component Pet Behavior section labels + inputs
 * @param {*} props changeInput, petKey, formData
 */
export default function PetBehavior(props){
    const { changeInput, petKey, formData } = props
    
    return(
        <div key={`pet${petKey}_behavior`}>
            <IntakeDivider>
                <IntakeH5>
                    Pet {petKey} - {formData[`pet${petKey}_name`]}
                </IntakeH5>
                
                {/* Behavior Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <RadioQuestion
                            key={`pet${petKey}_destructive`}
                            htmlFor={`pet${petKey}_destructive`}
                            question={behaviorQs[0]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_fence`}
                            htmlFor={`pet${petKey}_fence`}
                            question={behaviorQs[1]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        /> 

                        <RadioQuestion
                            key={`pet${petKey}_guard`}
                            htmlFor={`pet${petKey}_guard`}
                            question={behaviorQs[2]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />
                    
                        <RadioQuestion
                            key={`pet${petKey}_social`}
                            htmlFor={`pet${petKey}_social`}
                            question={behaviorQs[3]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />
                    
                        <RadioQuestion
                            key={`pet${petKey}_kennel`}
                            htmlFor={`pet${petKey}_kennel`}
                            question={behaviorQs[4]}
                            options={['Yes', 'No']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_info`}>
                                    Is there anything else we should know about your pet's behavior? - Not Required
                                </IntakeLabel>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeMessageInput 
                                            type="text" 
                                            name={`pet${petKey}_extra_behavior`}
                                            value={formData[`pet${petKey}_extra_behavior`]}
                                            onChange={changeInput}
                                        />
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>
                    </IntakeCol>
                </IntakeDivider>
            </IntakeDivider>
        </div>
    )
}