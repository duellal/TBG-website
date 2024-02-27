import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeLabelRow, IntakeRow } from '../../../../../styles/owner-form'
import { Input, FlexColDiv } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms";


/**
 * @component Initial pet information section labels + inputs
 * @param {*} props changeInput, petKey, formData
 */
export default function PetInfo(props){
    const { changeInput, petKey, formData } = props
    
    return(
        <div key={`pet${petKey}_info`}>
            <IntakeDivider>
                <IntakeH5>
                    Pet {petKey}
                </IntakeH5>
                
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
                                    <IntakeLabel>
                                        <Input 
                                            type='radio' 
                                            name={`pet${petKey}_sex`} 
                                            value='Female' 
                                            checked={formData[`pet${petKey}_sex`] === 'Female'}
                                            onChange={changeInput}
                                        />
                                    
                                        Female
                                    </IntakeLabel>
                            
                                    <IntakeLabel>
                                        <Input 
                                            type="radio" 
                                            name={`pet${petKey}_sex`}
                                            value='Male'
                                            checked={formData[`pet${petKey}_sex`] === 'Male'}
                                            onChange={changeInput}
                                        />
                                        
                                        Male
                                    </IntakeLabel>
                                </IntakeLabelRow>
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_altered`}>
                                    <FormAsterisk>*</FormAsterisk> Spayed or Neutered
                                </IntakeLabel>
                                <IntakeLabelRow>
                                    <IntakeLabel>
                                        <Input 
                                            type='radio' 
                                            id={`pet${petKey}_altered`} 
                                            name={`pet${petKey}_altered`}
                                            value='Yes' 
                                            checked={formData[`pet${petKey}_altered`] === 'Yes'}
                                            onChange={changeInput}
                                        />
                                    
                                        Yes
                                    </IntakeLabel>
                            
                                    <IntakeLabel>
                                        <Input
                                            type="radio" 
                                            id={`pet${petKey}_altered`} 
                                            name={`pet${petKey}_altered`} 
                                            value='No' 
                                            checked={formData[`pet${petKey}_altered`] === 'No'}
                                            onChange={changeInput}
                                        />
                                    
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
                                    pattern="\d{2}-\d{2}-\d{4}"
                                />
                            </FlexColDiv>
                        </IntakeRow>
                    </IntakeCol>
                </IntakeDivider>
            </IntakeDivider>
        </div>
    )
}