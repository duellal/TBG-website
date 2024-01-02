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
    const [petBtn, setPetBtn] = useState(true)

    const ownerOnClick = async (event, ownerKey, storedOwners) => {
        let toggleOwnerBtn = () => {
            setOwnerBtn(!ownerBtn)
        }
        
        event.preventDefault()
        toggleOwnerBtn();
        await setOwnerKey(ownerKey + 1)
        await setStoredOwners([...storedOwners, OwnerInfo(ownerKey)])
    }

    const petOnClick = async (event, petKey, storedPets) => {
        let togglePetBtn = () => {
            setPetBtn(!petBtn)
        }
        
        event.preventDefault()
        togglePetBtn();
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

                        <IntakeH4> 
                            Primary Owner Info - Required information will be starred (*)
                        </IntakeH4>
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

                        <IntakeButton onClick={() => document.getElementById(1)} />
                    </IntakeHDiv> 

                    <IntakeHDiv>
                        <IntakeH3> 
                            Pet Information
                        </IntakeH3>

                        {/* Change to storedPets when done */}
                        {PetInfo(1)}

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
                        <Input type='address1' name={`owner${ownerKey}_address1`}/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input type='address2' name={`owner${ownerKey}_address2`}/>
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
            </IntakeDivider>
        </div>
    )
}

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