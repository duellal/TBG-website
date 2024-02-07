import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH4, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms";


export default function PetBehavior(props){
    const { petKey } = props

    return(
        <div key={`pet${petKey}Behavior`} id={`pet${petKey}Behavior`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey}
                </IntakeH4>
                
                {/* Behavior Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_destructive`}>
                                <FormAsterisk>*</FormAsterisk> Does your pet have any destructive habits when left alone?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type='radio' id={`{pet${petKey}_destructive_yes}`} name={`{pet${petKey}_destructive`} />
                                        <IntakeLabel htmlFor={`{pet${petKey}_desstructive_yes}`}>
                                            Yes
                                        </IntakeLabel>

                                        <Input type='radio' id={`{pet${petKey}_destructive_no}`} name={`{pet${petKey}_destructive`} />
                                        <IntakeLabel htmlFor={`{pet${petKey}_desstructive_no}`}>
                                            No
                                        </IntakeLabel>
                                </IntakeRow>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_explain_destructive`}>
                                        <FormAsterisk>*</FormAsterisk> If yes, please explain
                                        </IntakeLabel>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_explain_destructive`}/>
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_fence`}>
                                <FormAsterisk>*</FormAsterisk> Has your pet ever jumped, climbed, or dug out of a fence?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type='radio' id={`{pet${petKey}_fence_yes}`} name={`{pet${petKey}_fence`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_fence_yes}`}>
                                            Yes
                                        </IntakeLabel>

                                        <Input type='radio' id={`{pet${petKey}_fence_no}`} name={`{pet${petKey}_fence`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_fence_no}`}>
                                            No
                                        </IntakeLabel>
                                </IntakeRow>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_explain_fence`}>
                                        <FormAsterisk>*</FormAsterisk> If yes, please explain
                                        </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_explain_fence`}/>
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_guard`}>
                                <FormAsterisk>*</FormAsterisk> Does your pet ever guard toys, food, water, or people?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type='radio' id={`{pet${petKey}_guard_yes}`} name={`{pet${petKey}_guard`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_guard_yes}`}>
                                            Yes
                                        </IntakeLabel>

                                        <Input type='radio' id={`{pet${petKey}_guard_no}`} name={`{pet${petKey}_guard`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_guard_no}`}>
                                            No
                                        </IntakeLabel>
                                </IntakeRow>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_explain_guard`}>
                                        <FormAsterisk>*</FormAsterisk> If yes, please explain
                                        </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_explain_guard`}/>
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_socialized`}>
                                <FormAsterisk>*</FormAsterisk> Has your pet ever socialized in a group of 6 or more pets?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type='radio' id={`{pet${petKey}_socialized_yes}`} name={`{pet${petKey}_socialized`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_social_yes}`}>
                                            Yes
                                        </IntakeLabel>

                                        <Input type='radio' id={`{pet${petKey}_social_no}`} name={`{pet${petKey}_socialized`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_socialized_no}`}>
                                            No
                                        </IntakeLabel>
                                </IntakeRow>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_explain_social`}>
                                        <FormAsterisk>*</FormAsterisk> If yes, please explain
                                        </IntakeLabel>
                                        <IntakeMessageInput type="text" name={`pet${petKey}_explain_social`}/>
                                    </FlexColDiv>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_kennel`}>
                                <FormAsterisk>*</FormAsterisk> Does your pet have experience in a kennel environment?
                                </IntakeLabel>
                                <IntakeRow>
                                    <Input type='radio' id={`{pet${petKey}_kennel_yes}`} name={`{pet${petKey}_kennel`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_kennel_yes}`}>
                                            Yes
                                        </IntakeLabel>

                                        <Input type='radio' id={`{pet${petKey}_kennel_no}`} name={`{pet${petKey}_kennel`}/>
                                        <IntakeLabel htmlFor={`{pet${petKey}_kennel_no}`}>
                                            No
                                        </IntakeLabel>
                                </IntakeRow>
                                
                                <IntakeLabelRow>
                                    <FlexColDiv>
                                        <IntakeLabel htmlFor={`pet${petKey}_explain_kennel`}>
                                        <FormAsterisk>*</FormAsterisk> If yes, please explain
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
            </IntakeDivider>
        </div>
    )
}