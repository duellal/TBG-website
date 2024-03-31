import React from "react";

//Styles:
import { IntakeCol, IntakeDivider, IntakeH5, IntakeLabel, IntakeRow, SpeciesRow, SpeciesTextInput } from '../../../../../styles/owner-form'
import { Input, FlexColDiv, SelectInput, OptionInput } from "../../../../../styles/contact";
import { speciesOptions } from "./species-options";
import RadioQuestion from "../components/radio-explainations";
import { petInfoQs } from "./pet-questions";


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
                                        formData[`pet${petKey}_species`]?.includes('Other') ?
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
                                <RadioQuestion 
                                    key={`pet${petKey}_sex`}
                                    htmlFor={`pet${petKey}_sex`}
                                    question={petInfoQs[0]}
                                    options={['female', 'male']}
                                    formData={formData}
                                    changeInput={changeInput}
                                />
                            </FlexColDiv>

                            <FlexColDiv>
                                <RadioQuestion 
                                    key={`pet${petKey}_altered`}
                                    htmlFor={`pet${petKey}_altered`}
                                    question={petInfoQs[1]}
                                    options={['yes', 'no']}
                                    formData={formData}
                                    changeInput={changeInput}
                                />
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