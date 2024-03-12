import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeLabelRow, IntakeMessageInput, IntakeRow, SpeciesRow, SpeciesTextInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv, SelectInput, OptionInput } from "../../../../../styles/contact";
import { FormAsterisk } from "../../../../../styles/forms";
import { speciesOptions } from "./species-options";


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
                                    Name
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
                                    Species
                                </IntakeLabel>
                                {/* <IntakeRow key={`${htmlFor}_explain`}>
                                        <FlexColDiv>
                                            <IntakeLabel htmlFor={`${htmlFor}_explain`}>
                                                Please explain
                                                <IntakeMessageInput 
                                                    type="text" 
                                                    name={`${htmlFor}_explain`}
                                                    value={formData[`${htmlFor}_explain`]}
                                                    onChange={changeInput}
                                                    required
                                                />
                                            </IntakeLabel>
                                        </FlexColDiv>
                                    </IntakeRow> */}
                                    <SelectInput
                                        type="text" 
                                        name={`pet${petKey}_species`} 
                                        required 
                                        value={formData[`pet${petKey}_species`]}
                                        onChange={changeInput}
                                    >
                                        <OptionInput
                                                value=''
                                            >
                                                Select an option
                                            </OptionInput>
                                            {
                                                speciesOptions.map((item, index) =>
                                                    <OptionInput 
                                                        key={`referral_${index}`} 
                                                        value={item}
                                                    >
                                                        {item}
                                                    </OptionInput> 
                                                )
                                            }
                                    </SelectInput>
                                    {
                                        formData[`pet${petKey}_species`].toLowerCase().includes('other') ?
                                        <SpeciesRow>
                                        {/* <IntakeRow> */}
                                            <FlexColDiv>
                                                <IntakeLabel>
                                                    Please Type Species
                                                    <SpeciesTextInput
                                                        type="text" 
                                                        name={`pet${petKey}_species_explain`}
                                                        value={formData[`pet${petKey}_species_explain`]}
                                                        onChange={changeInput}
                                                        required
                                                    />
                                                </IntakeLabel>
                                            </FlexColDiv>
                                        {/* // </IntakeRow> */}
                                        </SpeciesRow>
                                        :
                                        null
                                    }   
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_breed`}>
                                    Breed
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
                                    required
                                />
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_sex`}>
                                    Sex
                                </IntakeLabel>
                                <IntakeLabelRow>
                                    <Input 
                                        type='radio' 
                                        name={`pet${petKey}_sex`} 
                                        value='Female' 
                                        checked={formData[`pet${petKey}_sex`] === 'Female'}
                                        onChange={changeInput}
                                    />
                                    <IntakeLabel>
                                        Female
                                    </IntakeLabel>
                            
                                    <Input 
                                        type="radio" 
                                        name={`pet${petKey}_sex`}
                                        value='Male'
                                        checked={formData[`pet${petKey}_sex`] === 'Male'}
                                        onChange={changeInput}
                                    />
                                    <IntakeLabel>
                                        Male
                                    </IntakeLabel>
                                </IntakeLabelRow>
                            </FlexColDiv>

                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_altered`}>
                                    Spayed or Neutered
                                </IntakeLabel>
                                <IntakeLabelRow>
                                    <Input 
                                        type='radio' 
                                        id={`pet${petKey}_altered`} 
                                        name={`pet${petKey}_altered`}
                                        value='Yes' 
                                        checked={formData[`pet${petKey}_altered`] === 'Yes'}
                                        onChange={changeInput}
                                    />
                                    <IntakeLabel>
                                        Yes
                                    </IntakeLabel>
                            
                                    <Input
                                        type="radio" 
                                        id={`pet${petKey}_altered`} 
                                        name={`pet${petKey}_altered`} 
                                        value='No' 
                                        checked={formData[`pet${petKey}_altered`] === 'No'}
                                        onChange={changeInput}
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
                                    Weight (lbs)
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