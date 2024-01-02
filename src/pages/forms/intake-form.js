import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'
import SignatureCanvas from "react-signature-canvas"

//Intake Form Styles:
import { Bold, CanvasDiv, IntakeButton, IntakeCard, IntakeCol, IntakeDivider, IntakeForm, IntakeH3, IntakeH4, IntakeH5, IntakeHDiv, IntakeHeader, IntakeHealthInput, IntakeHealthLabel, IntakeLabel, IntakeLabelRow, IntakeLink, IntakeMessageInput, IntakeP, IntakePDF, IntakeRow, IntakeSection, IntakeWaiverDiv, IntakeWaiverP, SignatureClear, SignatureDiv } from '../../styles/intake-form'
import { Input, FlexColDiv, SubmitInput, Rotate, ErrorLink, ErrorText } from "../../styles/contact";

//Import Form PDF:
import intakeForm from './TBG-Intake-Form-2024.pdf'
import { waiverAcknowledgeHeader, waiverAcknowledgeStatement, waiverHeader, waiverP1, waiverP2 } from './waiver-text.js'
import waiverPDF from './TBG-Liability-Waiver-2024.pdf'

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

    //References:
    const sigCanvas = useRef()

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
                    <IntakeHDiv>
                        <IntakeH3>
                            Liability Waiver
                        </IntakeH3>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeWaiverDiv>
                                    <IntakeH3>
                                        {waiverHeader}
                                    </IntakeH3>
                                    <IntakeWaiverP>
                                        {waiverP1}
                                    </IntakeWaiverP>
                                    <IntakeWaiverP>
                                        {waiverP2}
                                    </IntakeWaiverP>
                                </IntakeWaiverDiv>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeH3>
                                    {waiverAcknowledgeHeader}
                                </IntakeH3>
                                <IntakeWaiverP>
                                    {waiverAcknowledgeStatement}
                                </IntakeWaiverP>
                            </FlexColDiv>
                        </IntakeRow>

                        {/* Owner Signature */}
                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor="waiver-owner-signature">
                                    *Owner's Signature
                                </IntakeLabel>
                                <SignatureDiv>
                                    <CanvasDiv>
                                        <SignatureCanvas 
                                            canvasProps={{width: '500px', height: '200px', borderBottom: '1px solid black'}}
                                            ref={sigCanvas}
                                        />
                                    </CanvasDiv>        
                                <SignatureClear onClick={() => sigCanvas.current.clear()}>
                                    Clear
                                </SignatureClear>
                                </SignatureDiv>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`owner_printed_name`}>
                                    *Owner's Printed Name
                                </IntakeLabel>
                                <Input type="text" name="owner_printed_name"/>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                                <IntakeLabel htmlFor={`pets_name`}>
                                    *Pet(s) Name(s)
                                </IntakeLabel>
                                <Input type="text" name="pets_name"/>
                            </FlexColDiv>
                        </IntakeRow>

                        <IntakeRow>
                            <FlexColDiv>
                            <p>
                                You can download the Liability Waiver below.
                            </p>
                            </FlexColDiv>
                        </IntakeRow>
                        <IntakeRow>
                            <IntakeButton onClick={() => window.open(waiverPDF)}>
                                Download Waiver
                            </IntakeButton>
                        </IntakeRow>
                    </IntakeHDiv>

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
                <Bold>
                    <IntakeH4>
                        Emergency Contact {emergencyKey}
                    </IntakeH4>
                </Bold>
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