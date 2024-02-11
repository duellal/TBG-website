import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH4, IntakeLabel, IntakeLabelRow, IntakeRow } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms";


/**
 * @component Initial pet information section labels + inputs
 * @param {*} props changeInput, petKey, formData
 */
export default function PetInfo(props){
    const { changeInput, petKey, formData } = props
    
    return(
        <div key={`pet${petKey}Info`} id={`pet${petKey}Info`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey}
                </IntakeH4>
                
                {/* Priliminary Pet Info Section */}
                <IntakeDivider>
                    <IntakeCol>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_name`}>
                                    <FormAsterisk>*</FormAsterisk> Name
                                </IntakeLabel>
                                <Input 
                                    type="text" 
                                    name={`pet${petKey}_name`} 
                                    required
                                    value={formData[`pet${petKey}_name`]}
                                    onChange={changeInput}
                                />
                        
                            </FlexColDiv>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_species`}>
                                        <FormAsterisk>*</FormAsterisk> Species
                                    </IntakeLabel>
                                    <Input 
                                        type="text" 
                                        name={`pet${petKey}_species`} 
                                        required 
                                        value={formData[`pet${petKey}_species`]}
                                        onChange={changeInput}
                                    />
                                </FlexColDiv>
                        </IntakeRow>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_breed`}>
                                    <FormAsterisk>*</FormAsterisk> Breed
                                </IntakeLabel>
                                <Input 
                                    type="text" 
                                    name={`pet${petKey}_breed`} 
                                    required       
                                    value={formData[`pet${petKey}_breed`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_color`}>
                                    Color
                                </IntakeLabel>
                                <Input 
                                    type="text" 
                                    name={`pet${petKey}_color`} 
                                    value={formData[`pet${petKey}_color`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_sex`}>
                                    <FormAsterisk>*</FormAsterisk> Sex
                                </IntakeLabel>
                                <IntakeLabelRow>
                                    <Input 
                                        type='radio' 
                                        name={`pet${petKey}_sex`} 
                                    />
                                    <IntakeLabel>
                                        Female
                                    </IntakeLabel>
                            
                                    <Input 
                                        type="radio" 
                                        name={`pet${petKey}_sex`}
                                    />
                                    <IntakeLabel>
                                        Male
                                    </IntakeLabel>
                                </IntakeLabelRow>
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_sterile`}>
                                    <FormAsterisk>*</FormAsterisk> Spayed or Neutered
                                </IntakeLabel>
                                <IntakeLabelRow>
                                    <Input 
                                        type='radio' 
                                        id={`pet${petKey}_sterile`} 
                                        name={`pet${petKey}_sterile`}
                                    />
                                    <IntakeLabel>
                                        Yes
                                    </IntakeLabel>
                            
                                    <Input
                                        type="radio" 
                                        id={`pet${petKey}_sterile`} 
                                        name={`pet${petKey}_sterile`} 
                                    />
                                    <IntakeLabel>
                                        No
                                    </IntakeLabel>
                                </IntakeLabelRow>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_weight`}>
                                    <FormAsterisk>*</FormAsterisk> Weight (lbs)
                                </IntakeLabel>
                                <Input 
                                    type="float" 
                                    name={`pet${petKey}_weight`} 
                                    required 
                                    value={formData[`pet${petKey}_weight`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_dob`}>
                                    Approx. Date of Birth (mm/dd/yy)
                                </IntakeLabel>
                                <Input 
                                    type="date" 
                                    name={`pet${petKey}_dob`}
                                    value={formData[`pet${petKey}_dob`]}
                                    onChange={changeInput}
                                />
                            </FlexColDiv>
                        </IntakeRow>
                    </IntakeCol>
                </IntakeDivider>
            </IntakeDivider>
        </div>
    )
}