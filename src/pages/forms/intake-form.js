import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { IntakeButton, IntakeCard, IntakeCol, IntakeDivider, IntakeForm, IntakeH3, IntakeH4, IntakeH5, IntakeHDiv, IntakeHeader, IntakeLabel, IntakeLabelRow, IntakeLink, IntakeP, IntakePDF, IntakeRow, IntakeSection } from '../../styles/intake-form'
import { Input, FlexColDiv, SubmitInput, 
    Rotate, ErrorLink, ErrorText } from "../../styles/contact";

//Import Form PDF:
import intakeForm from './TBG-Intake-Form-2024.pdf'

export default function DigitalIntake() {
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

                <IntakeForm ref={form} onSubmit={submitHandler}>
                    <IntakeHDiv>
                        <IntakeH3> 
                            Owner Information 
                        </IntakeH3>

                        <IntakeH5> 
                            Required information will be starred (*)
                        </IntakeH5>
                    </IntakeHDiv>
                    
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

                    <IntakeHDiv>
                        <IntakeH3> 
                            Emergency Contact Information
                        </IntakeH3>
                        <IntakeH5>
                            In case we can't reach you
                        </IntakeH5>
                    </IntakeHDiv> 

                    {/* Change to storedEmergencyContacts when done */}
                    <IntakeCol>
                        {EmergencyInfo(1)}
                    </IntakeCol>

                    <IntakeRow>
                        <IntakeButton onClick={(event) => emergencyOnClick(event, emergencyKey, storedEmergencyContacts)}> 
                            Add Emergency Contact 
                        </IntakeButton>
                    </IntakeRow>   

                    <IntakeHDiv>
                        <IntakeH3> 
                            Authorized People to Pickup Your Pets
                        </IntakeH3>
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeH5>
                                    First + Last Name
                                </IntakeH5>
                            </FlexColDiv>
                            <FlexColDiv>
                                <IntakeH5>
                                    Relationship
                                </IntakeH5>
                            </FlexColDiv>
                        </IntakeRow>
                        {/* Change to storedAuthorized when done */}
                        {storedAuthorized}
                    </IntakeHDiv> 

                    <IntakeRow>
                        <IntakeButton onClick={(event) => authorizedOnClick(event, authorizedKey, storedAuthorized)}> 
                            Add Authorized Person
                        </IntakeButton>
                    </IntakeRow>   

                    <IntakeHDiv>
                        <IntakeH3> 
                            Pet Information
                        </IntakeH3>

                        {/* Change to storedPets when done */}
                        <IntakeCol>
                            {PetInfo(1)}
                        </IntakeCol>

                        <IntakeRow>
                            <IntakeButton onClick={event => petOnClick(event, petKey, storedPets)}>
                                Add Pet
                            </IntakeButton>
                        </IntakeRow>
                    </IntakeHDiv> 

                    <IntakeH3>
                        Liability Waiver
                    </IntakeH3>

                    <IntakeRow>
                        <SubmitInput type="submit" value="Send" />
                            {loading && <Rotate>
                                <FontAwesomeIcon icon={faSpinner} size="2xl" />
                            </Rotate>}
                    </IntakeRow>
                </IntakeForm>
            </IntakeCard>

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

function OwnerInfo(ownerKey){
    return(
        <div key={`owner${ownerKey}`} id={`owner${ownerKey}`}>
            <IntakeDivider>
                <IntakeH4>
                    Owner {ownerKey}
                </IntakeH4>
            </IntakeDivider>
            
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_first_name`}>
                            *First Name
                        </IntakeLabel>
                        <Input type="text" name={`owner${ownerKey}_first_name`} />
                
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor={`owner${ownerKey}_last_name`}>
                                *Last Name
                            </IntakeLabel>
                            <Input type="text" name={`owner${ownerKey}_last_name`} />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_email`}>
                            *Email
                        </IntakeLabel>
                        <Input type="email" name={`owner${ownerKey}_email`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`owner${ownerKey}_phone`}>
                            *Phone
                        </IntakeLabel>
                        <Input type="phone" name={`owner${ownerKey}_phone`} />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Address
                        </IntakeLabel>
                        <Input type='address' name={`owner${ownerKey}_address1`}/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input type='address' name={`owner${ownerKey}_address2`}/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *City
                        </IntakeLabel>
                        <Input type="city" name={`owner${ownerKey}_city`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *State
                        </IntakeLabel>
                        <Input type="state" name={`owner${ownerKey}_state`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Zip Code
                        </IntakeLabel>
                        <Input type="zipcode" name={`owner${ownerKey}_zipcode`} />
                    </FlexColDiv>
                </IntakeRow>
        </div>
    )
}

function EmergencyInfo(emergencyKey){
    return(
        <div key={`emergency${emergencyKey}`} id={`emergency${emergencyKey}`}>
            <IntakeDivider>
                <IntakeH4>
                    Emergency Contact {emergencyKey}
                </IntakeH4>
            </IntakeDivider>
            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Emergenceny Contact First + Last Name
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_name`}/>
                </FlexColDiv>
            </IntakeRow>
            <IntakeRow>
            <FlexColDiv>
                    <IntakeLabel>
                        *Emergenceny Contact Phone Number
                    </IntakeLabel>
                    <Input type="phone" name={`emergency${emergencyKey}_phone`}/>
                </FlexColDiv>

                <FlexColDiv>
                    <IntakeLabel>
                        *Relationship
                    </IntakeLabel>
                    <Input type="text" name={`emergency${emergencyKey}_relation`} />
                </FlexColDiv>
            </IntakeRow>

            <IntakeRow>
                <FlexColDiv>
                    <IntakeLabel>
                        *Does this person have permission to make decisions regarding your pet(s)?
                    </IntakeLabel>
                    
                    <IntakeLabelRow>
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_yes`}/>
                            <IntakeLabel>
                                Yes
                            </IntakeLabel>
  
                        <Input type="checkbox" name={`emergency${emergencyKey}_permission_no`}/>
                            <IntakeLabel>
                                No
                            </IntakeLabel>
                    </IntakeLabelRow>

                    <IntakeLabel>
                        If yes, type your intials
                        <Input type="text" name={`emergency${emergencyKey}_initials`} />
                    </IntakeLabel>
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}

function AuthorizedPickup(authorizedKey){
    return (
        <div key={`auth${authorizedKey}`} id={`auth${authorizedKey}`}>
            <IntakeRow>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_name`} />
                </FlexColDiv>
                <FlexColDiv>
                    <Input type="text" name={`auth${authorizedKey}_relation`} />
                </FlexColDiv>
            </IntakeRow>
        </div>
    )
}

// Not complete yet:
function PetInfo(petKey){
    return(
        <div key={`pet${petKey}`} id={`pet${petKey}`}>
            <IntakeDivider>
                <IntakeH4>
                    Pet {petKey}
                </IntakeH4>

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
                        <Input type="number" name={`pet${petKey}`} />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`pet${petKey}_dob`}>
                            Approx. Date of Birth (mm/dd/yy)
                        </IntakeLabel>
                        <Input type="date" name={`pet${petKey}_dob`} />
                    </FlexColDiv>
                </IntakeRow>

                <IntakeH5>
                    Behavioral Information - if yes, please explain
                </IntakeH5>

                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor={`pet${petKey}_weight`}>
                            Weight (lbs)
                        </IntakeLabel>
                        <Input type="number" name={`pet${petKey}`} />
                    </FlexColDiv>
                </IntakeRow>

                <IntakeH5>
                    Health Information
                </IntakeH5>
            </IntakeDivider>
        </div>
    )
}