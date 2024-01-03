import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { AuthPickupH5, Bold, IntakeButton, IntakeCard, IntakeCol, IntakeDivider, IntakeForm, IntakeH3, IntakeH4, IntakeH5, IntakeHDiv, IntakeHeader, IntakeHealthInput, IntakeHealthLabel, IntakeLabel, IntakeLabelRow, IntakeLink, IntakeMessageInput, IntakeP, IntakePDF, IntakeRow, IntakeSection, IntakeSubmitInput } from '../../styles/intake-form'
import { Input, FlexColDiv, SubmitInput, Rotate, ErrorLink, ErrorText } from "../../styles/contact";

//Form PDF:
import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

//Children Components/Functions:
import OwnerInfo from './components/owner-info.js'
import LiabilityWaiver from './components/liability-waiver.js'
import EmergencyInfo from "./components/emergency-info.js";
import AuthorizedPickup from "./components/auth-pickup.js";

export default function DigitalIntake() {
    //State:
    const [error, setError] = useState(null)
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [ownerKey, setOwnerKey] = useState(2)
    const [storedOwners, setStoredOwners] = useState([OwnerInfo(1)])
    const [ownerBtn, setOwnerBtn] = useState(true)
    const [petKey, setPetKey] = useState(2)
    const [storedPets, setStoredPets] = useState([PetInfo(1)])
    const [emergencyKey, setEmergencyKey] = useState(2)
    const [storedEmergencyContacts, setStoredEmergencyContacts] = useState([EmergencyInfo(1)])
    const [authorizedKey, setAuthorizedKey] = useState(2)
    const [storedAuthorized, setStoredAuthorized] = useState([AuthorizedPickup(1)])

    //Functions to allow a user to add more sections with a button:
    const ownerOnClick = async (event, ownerKey, storedOwners) => {
        let toggleOwnerBtn = () => {
            setOwnerBtn(!ownerBtn)
        }
        
        event.preventDefault()
        toggleOwnerBtn();
        await setOwnerKey(ownerKey + 1)
        await setStoredOwners([...storedOwners, OwnerInfo(ownerKey)])
    }

    const emergencyOnClick = async (event, emergencyKey, storedEmergencyContacts) => {
        event.preventDefault()
        await setEmergencyKey(emergencyKey + 1)
        await setStoredEmergencyContacts([...storedEmergencyContacts, EmergencyInfo(emergencyKey)])
    }

    const authorizedOnClick = async (event, authorizedKey, storedAuthorized) => {
        event.preventDefault()
        await setAuthorizedKey(authorizedKey + 1)
        await setStoredAuthorized([...storedAuthorized, AuthorizedPickup(authorizedKey)])
    }

    const petOnClick = async (event, petKey, storedPets) => {
        event.preventDefault()
        await setPetKey(petKey + 1)
        await setStoredPets([...storedPets, PetInfo(petKey)])
    }

    //Form Submit:
    const submitHandler = async event => {
        event.preventDefault();
        // setLoading(true)
        // //clears errors if there were any previously
        // setError(null)

        // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        //     .then(() => {
        //         //resets the form after the email is sent 
        //         form.current.reset()
        //         setLoading(false)
        //     }).catch((error) => {
        //         setError(error.text)
        //     }).finally(() => {
        //         //resets the form after the email is sent 
        //         form.current.reset()
        //         setLoading(false)
        //     })
    }

    return (
        <IntakeSection id="digital-intake">
            <IntakeCard>
                <IntakeHeader id='intake-header'>
                    <h2>
                        Intake Form
                    </h2>

                    <IntakeDivider>
                        <FontAwesomeIcon icon={faPaw} size="2xl" />
                    </IntakeDivider>


                    <IntakeP>
                         Before you schedule your first visit or appointment, please fill out the intake form below. 
                    </IntakeP>

                </IntakeHeader>

                <IntakeForm ref={form} onSubmit={submitHandler}>
                    {/* Owners */}
                    <IntakeHDiv>
                        <IntakeH3> 
                            Owner Information 
                        </IntakeH3>

                        <IntakeH5> 
                            Required information will be starred (*)
                        </IntakeH5>
                    
                        <IntakeCol>
                            {storedOwners}
                        </IntakeCol>

                        <IntakeRow>
                            {ownerBtn && 
                                <IntakeButton onClick={(event) => ownerOnClick(event, ownerKey, storedOwners)}> 
                                    Add Owner 
                                </IntakeButton>
                            }
                        </IntakeRow>  
                    </IntakeHDiv> 

                    {/* Emergency Contact */}
                    <IntakeHDiv>
                        <IntakeH3> 
                            Emergency Contact Information
                        </IntakeH3>
                        <IntakeH5>
                            In case we can't reach you
                        </IntakeH5>
                    
                        <IntakeCol>
                            {storedEmergencyContacts}
                        </IntakeCol>

                        <IntakeRow>
                            <IntakeButton onClick={(event) => emergencyOnClick(event, emergencyKey, storedEmergencyContacts)}> 
                                Add Emergency Contact 
                            </IntakeButton>
                        </IntakeRow>
                    </IntakeHDiv>    

                    {/* Authorized Pick Up */}
                    <IntakeHDiv>
                        <IntakeH3> 
                            Authorized People to Pickup Your Pets
                        </IntakeH3>
                        <IntakeRow>
                            <FlexColDiv>
                                <AuthPickupH5>
                                    First + Last Name
                                </AuthPickupH5>
                            </FlexColDiv>
                            <FlexColDiv>
                                <AuthPickupH5>
                                    Relationship
                                </AuthPickupH5>
                            </FlexColDiv>
                        </IntakeRow>
                        
                        {storedAuthorized}
                    

                        <IntakeRow>
                            <IntakeButton onClick={(event) => authorizedOnClick(event, authorizedKey, storedAuthorized)}> 
                                Add Authorized Person
                            </IntakeButton>
                        </IntakeRow>
                    </IntakeHDiv>    

                    {/* Pet Info */}
                    <IntakeHDiv>
                        <IntakeH3> 
                            Pet Information
                        </IntakeH3>

                        {/* Change to storedPets when done */}
                        <IntakeCol>
                            {storedPets}
                        </IntakeCol>

                        <IntakeRow>
                            <IntakeButton onClick={event => petOnClick(event, petKey, storedPets)}>
                                Add Pet
                            </IntakeButton>
                        </IntakeRow>
                    </IntakeHDiv> 
                    
                    {/* Liability Waiver */}
                    <LiabilityWaiver />

                    {/* Form Submit Button */}
                    <IntakeRow>
                        <IntakeSubmitInput type="submit" value="Send" />
                            {loading && <Rotate>
                                <FontAwesomeIcon icon={faSpinner} size="2xl" />
                            </Rotate>}
                    </IntakeRow>
                </IntakeForm>

                {/* Form Error on Submit */}
                {error && (
                    <div>
                        <ErrorText>
                            There was a problem submitting the form.
                            </ErrorText> 
                            <ErrorText>
                                Please try submitting the form again.
                                </ErrorText>
                        <ErrorText> 
                            If the problem perissts, kindly reach out to us directly at (919) 355 - 2820 or 
                            <ErrorLink className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</ErrorLink>.
                        </ErrorText>
                    </div>
                )}
            </IntakeCard>

            {/* Intake Form PDF Section */}
            <IntakePDF>
                <p>
                    If you cannot fill out the digitial intake form, feel free to download and complete the pdf version.
                </p>
                <p>
                    Once completed, you can either email it to us at <IntakeLink href="thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</IntakeLink> or you can bring it in.
                </p>
                <IntakeButton className="intake" onClick={() => window.open(intakeForm)}> 
                    Intake Form 
                </IntakeButton>
            </IntakePDF>
        </IntakeSection>
    )
}

function PetInfo(petKey){
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
                                *First Name
                            </IntakeLabel>
                            <Input type="text" name={`pet${petKey}_name`} />
                    
                        </FlexColDiv>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pet${petKey}_species`}>
                                    *Species
                                </IntakeLabel>
                                <Input type="text" name={`pet${petKey}_species`} />
                            </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_breed`}>
                                *Breed
                            </IntakeLabel>
                            <Input type="text" name={`pet${petKey}_breed`} />
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
                                Weight (lbs)
                            </IntakeLabel>
                            <Input type="number" name={`pet${petKey}_weight`} />
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
                                    <IntakeMessageInput type="text" name={`pet${petKey}_destructive_explaination`}/>
                                </FlexColDiv>
                            </IntakeLabelRow>
                        </FlexColDiv>
                    </IntakeRow>

                    <IntakeRow>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`pet${petKey}_fence`}>
                                Had your pet ever jumped, climbed, or dug out of a fence?
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
                                    <IntakeLabel htmlFor={`{pet${petKey}_socialized_yes}`}>
                                        Yes
                                    </IntakeLabel>

                                    <Input type='checkbox' name={`{pet${petKey}_socialized_no}`} />
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
                                    <IntakeMessageInput type="text" name={`pet${petKey}_extra_info_explaination`}/>
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
                                Vetinary Hospital
                            </IntakeLabel>
                            <Input type="text" name={`{pet${petKey}_vet`}/>
                        </FlexColDiv>

                        <FlexColDiv>
                            <IntakeHealthLabel htmlFor={`pet${petKey}_vet_phone`}>
                                Vet Phone Number
                            </IntakeHealthLabel>
                            <IntakeHealthInput type="number" name={`{pet${petKey}_vet_phone`}/>
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
                            <IntakeLabel htmlFor={`pet${petKey}_medical_injury`}>
                                Does your pet have any past injuries that we should know about? 
                            </IntakeLabel>

                            <IntakeRow>
                                <Input type="checkbox" name={`pet${petKey}_medical_injury_yes`}/>
                                <IntakeLabel htmlFor={`pet${petKey}_medical_injury_yes`}>
                                    Yes
                                </IntakeLabel>

                                <Input type="checkbox" name={`pet${petKey}_medical_injury_no`}/>
                                <IntakeLabel htmlFor={`pet${petKey}_medical_injury_no`}>
                                    No
                                </IntakeLabel>
                            </IntakeRow>

                            <IntakeRow>
                                <FlexColDiv>
                                    <IntakeLabel htmlFor={`pet${petKey}_medical_injury_list`}>
                                        If yes, please list them
                                    </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_medical_injury_list`}/>
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
                                    <IntakeLabel htmlFor={`pet${petKey}_extra_medical_list`}>
                                        If yes, please list them
                                    </IntakeLabel>
                                    <IntakeMessageInput type="text" name={`pet${petKey}_extra_medical_list`}/>
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