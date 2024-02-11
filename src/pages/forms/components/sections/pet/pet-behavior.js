import React from "react";

//Components:
import RadioQuestion from "../../radio-questions";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { FlexColDiv } from "../../../../../styles/contact";


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
                            question={`Does your pet have any destructive habits when left alone?`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <RadioQuestion
                            key={`pet${petKey}_fence`}
                            htmlFor={`pet${petKey}_fence`}
                            question={'Has your pet ever jumped, climbed, or dug out of a fence?'}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        /> 

                        <RadioQuestion
                            key={`pet${petKey}_guard`}
                            htmlFor={`pet${petKey}_guard`}
                            question={`Does your pet ever guard toys, food, water, or people?`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />
                    
                        <RadioQuestion
                            key={`pet${petKey}_socialized`}
                            htmlFor={`pet${petKey}_socialized`}
                            question={`Has your pet ever socialized in a group of 6 or more pets?`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />
                    
                        <RadioQuestion
                            key={`pet${petKey}_kennel`}
                            htmlFor={`pet${petKey}_kennel`}
                            question={`Does your pet have experience in a kennel environment?`}
                            options={['yes', 'no']}
                            formData={formData}
                            changeInput={changeInput}
                        />

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_extra_info`}>
                                    Is there anything else we should know about your pet's behavior?
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