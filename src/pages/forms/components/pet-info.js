import React from "react";

//Intake Form Styles:
import { Bold, IntakeCol, IntakeDivider, IntakeH4, IntakeH5, IntakeHealthInput, IntakeHealthLabel, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from '../../../styles/intake-form'
import { Input, FlexColDiv } from "../../../styles/contact";


export default function PetInfo(props){
    const { petKey } = props
    return(
        <div key={`pet${petKey}`} id={`pet${petKey}`}>
            <IntakeDivider>
                <Bold>
                    <IntakeH4>
                        Pet {petKey}
                    </IntakeH4>
                </Bold>

            {/* Pet Info Section */}
            <IntakeDivider>
                <IntakeCol>
                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_name`}>
                                *Name
                            </IntakeLabel>
                            <Input type="text" name={`pet${petKey}_name`} required />
                    
                        </FlexColDiv>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_species`}>
                                    *Species
                                </IntakeLabel>
                                <Input type="text" name={`pet${petKey}_species`} required />
                            </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_breed`}>
                                *Breed
                            </IntakeLabel>
                            <Input type="text" name={`pet${petKey}_breed`} required />
                        </FlexColDiv>

                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_color`}>
                                Color
                            </IntakeLabel>
                            <Input type="text" name={`pet${petKey}_color`} />
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_sex`}>
                                *Sex
                            </IntakeLabel>
                            <IntakeLabelRow>
                                <Input type='checkbox' name={`pet${petKey}_sex_female`} />
                                <IntakeLabel>
                                    Female
                                </IntakeLabel>
                        
                                <Input type="checkbox" name={`pet${petKey}_sex_male`} />
                                <IntakeLabel>
                                    Male
                                </IntakeLabel>
                            </IntakeLabelRow>
                        </FlexColDiv>

                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_sterile`}>
                                *Spayed or Neutered
                            </IntakeLabel>
                            <IntakeLabelRow>
                                <Input type='checkbox' name={`pet${petKey}_sterile_yes`} />
                                <IntakeLabel>
                                    Yes
                                </IntakeLabel>
                        
                                <Input type="checkbox" name={`pet${petKey}_sterile_no`} />
                                <IntakeLabel>
                                    No
                                </IntakeLabel>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_weight`}>
                                *Weight (lbs)
                            </IntakeLabel>
                            <Input type="number" name={`pet${petKey}_weight`} required />
                        </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_dob`}>
                                Approx. Date of Birth (mm/dd/yy)
                            </IntakeLabel>
                            <Input type="date" name={`pet${petKey}_dob`} />
                        </FlexColDiv>
                    </IntakeRow>
                </IntakeCol>
            </IntakeDivider>

            {/* Behavior Section */}
            <IntakeDivider>
                <IntakeCol>
                    <Bold>
                        <IntakeH5>
                            Behavioral Information - if yes, please explain
                        </IntakeH5>
                    </Bold>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_destructive`}>
                                Does your pet have any destructive habits when left alone?
                            </IntakeLabel>
                            <IntakeRow>
                                <Input type='checkbox' name={`{pet${petKey}_destructive_yes}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_desstructive_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_destructive_no}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_desstructive_no}`}>
                                        No
                                    </IntakeLabel>
                            </IntakeRow>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_explain_destructive`}>
                                    If yes, please explain
                                    </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_explain_destructive`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_fence`}>
                                Has your pet ever jumped, climbed, or dug out of a fence?
                            </IntakeLabel>
                            <IntakeRow>
                                <Input type='checkbox' name={`{pet${petKey}_fence_yes}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_fence_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_fence_no}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_fence_no}`}>
                                        No
                                    </IntakeLabel>
                            </IntakeRow>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_explain_fence`}>
                                        If yes, please explain
                                    </IntakeLabel>
                                <IntakeMessageInput type="text" name={`pet${petKey}_explain_fence`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_guard`}>
                                Does your pet ever guard toys, food, water, or people?
                            </IntakeLabel>
                            <IntakeRow>
                                <Input type='checkbox' name={`{pet${petKey}_guard_yes}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_guard_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_guard_no}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_guard_no}`}>
                                        No
                                    </IntakeLabel>
                            </IntakeRow>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_explain_guard`}>
                                        If yes, please explain
                                    </IntakeLabel>
                                <IntakeMessageInput type="text" name={`pet${petKey}_explain_guard`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_socialized`}>
                                Has your pet ever socialized in a group of 6 or more pets?
                            </IntakeLabel>
                            <IntakeRow>
                                <Input type='checkbox' name={`{pet${petKey}_socialized_yes}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_social_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_social_no}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_socialized_no}`}>
                                        No
                                    </IntakeLabel>
                            </IntakeRow>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_explain_social`}>
                                        If yes, please explain
                                    </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_explain_social`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_kennel`}>
                                Does your pet have experience in a kennel environment?
                            </IntakeLabel>
                            <IntakeRow>
                                <Input type='checkbox' name={`{pet${petKey}_kennel_yes}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_kennel_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_kennel_no}`} />
                                    <IntakeLabel htmlFor={`{pet${petKey}_kennel_no}`}>
                                        No
                                    </IntakeLabel>
                            </IntakeRow>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_explain_kennel`}>
                                        If yes, please explain
                                    </IntakeLabel>
                                <IntakeMessageInput type="text" name={`pet${petKey}_explain_kennel`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_extra_info`}>
                                Is there anything else we should know about their behavior?
                            </IntakeLabel>
                            
                            <IntakeLabelRow>
                                <FlexColDiv>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_extra_behavior`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>
                </IntakeCol>
            </IntakeDivider>

            {/* Vet History Section */}
            <IntakeDivider>
                <IntakeCol>
                    <Bold>
                        <IntakeH5>
                            Health Information
                        </IntakeH5>
                    </Bold>
                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_vet`}>
                                *Vetinary Hospital
                            </IntakeLabel>
                            <Input type="text" name={`{pet${petKey}_vet`} required />
                        </FlexColDiv>

                        <FlexColDiv>
                            <IntakeHealthLabel htmlFor={`pet${petKey}_vet_phone`}>
                                *Vet Phone Number <br/> ex: (xxx) xxx-xxxx
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
                                <Input type="checkbox" name={`pet${petKey}_food_allergy_yes`}/>
                                <IntakeLabel htmlFor={`pet${petKey}_food_allergy_yes`}>
                                    Yes
                                </IntakeLabel>

                                <Input type="checkbox" name={`pet${petKey}_food_allergy_no`}/>
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
                                <Input type="checkbox" name={`pet${petKey}_medical_condition_yes`}/>
                                <IntakeLabel htmlFor={`pet${petKey}_medical_condition_yes`}>
                                    Yes
                                </IntakeLabel>

                                <Input type="checkbox" name={`pet${petKey}_medical_condition_no`}/>
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
                                <Input type="checkbox" name={`pet${petKey}_medical_injury_yes`}/>
                                <IntakeLabel htmlFor={`pet${petKey}_past_injury_yes`}>
                                    Yes
                                </IntakeLabel>

                                <Input type="checkbox" name={`pet${petKey}_medical_injury_no`}/>
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