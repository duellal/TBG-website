import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { AuthPickupH5, IntakeButton, IntakeCard, IntakeCol, IntakeDivider, IntakeForm, IntakeHeader, IntakeH3, IntakeH5, IntakeHDiv, IntakeLink, IntakeP, IntakePDF, IntakeRow, IntakeSection, IntakeSubmitInput } from '../../styles/intake-form'
import { FlexColDiv, Rotate, ErrorLink, ErrorText } from "../../styles/contact";

//Form PDF:
import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

//Children Components/Functions:
import OwnerInfo from './components/owner-info.js'
import LiabilityWaiver from './components/liability-waiver.js'
import EmergencyInfo from "./components/emergency-info.js";
import AuthorizedPickup from "./components/auth-pickup.js";
import PetInfo from "./components/pet-info.js";

export default function DigitalIntake() {
    //State:
    const [form, editForm] = useState({})
    const [error, setError] = useState(null)
    // const emailForm = useRef();
    const [loading, setLoading] = useState(false)
    const [ownerKey, setOwnerKey] = useState(2)
    const [storedOwners, setStoredOwners] = useState([OwnerInfo(1)])
    const [ownerBtn, setOwnerBtn] = useState(true)
    const [petKey, setPetKey] = useState(2)
    const [petBtn, setPetBtn] = useState(true)
    const [petNum, setPetNum] = useState(1)
    const [storedPets, setStoredPets] = useState([PetInfo(1)])
    const [emergencyKey, setEmergencyKey] = useState(2)
    const [storedEmergencyContacts, setStoredEmergencyContacts] = useState([EmergencyInfo(1)])
    const [emergencyBtn, setEmergencyBtn] = useState(true)
    const [emergencyNum, setEmergencyNum] = useState(1)
    const [authorizedKey, setAuthorizedKey] = useState(2)
    const [storedAuthorized, setStoredAuthorized] = useState([AuthorizedPickup(1)])
    const [authBtn, setAuthBtn] = useState(true)
    const [authNum, setAuthNum] = useState(1)

    //Functions to allow a user to add more sections with a button:
    const ownerOnClick = async (event, ownerKey, storedOwners) => {
        event.preventDefault()

        let toggleOwnerBtn = () => {
            setOwnerBtn(!ownerBtn)
        }
        
        toggleOwnerBtn();
        await setOwnerKey(ownerKey + 1)
        await setStoredOwners([...storedOwners, OwnerInfo(ownerKey)])
    }

    const emergencyOnClick = async (event, emergencyKey, storedEmergencyContacts) => {
        event.preventDefault()

        let toggleEmergencyBtn = () => {
            setEmergencyBtn(!emergencyBtn)
        }

        setEmergencyNum(emergencyNum + 1)

        if(emergencyNum === 2){
            toggleEmergencyBtn()
        }

        await setEmergencyKey(emergencyKey + 1)
        await setStoredEmergencyContacts([...storedEmergencyContacts, EmergencyInfo(emergencyKey)])
    }

    const authorizedOnClick = async (event, authorizedKey, storedAuthorized) => {
        event.preventDefault()

        let toggleAuthBtn = () => {
            setAuthBtn(!authBtn)
        }

        setAuthNum(authNum + 1)

        if(authNum === 4){
            toggleAuthBtn()
        }
        await setAuthorizedKey(authorizedKey + 1)
        await setStoredAuthorized([...storedAuthorized, AuthorizedPickup(authorizedKey)])
    }

    const petOnClick = async (event, petKey, storedPets) => {
        event.preventDefault()

        let togglePetBtn = () => {
            setPetBtn(!petBtn)
        }

        setPetNum(petNum + 1)

        if(petNum === 4){
            togglePetBtn()
        }
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

                <IntakeForm onSubmit={submitHandler}>
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
                            {emergencyBtn &&
                                <IntakeButton onClick={(event) => emergencyOnClick(event, emergencyKey, storedEmergencyContacts)}> 
                                Add Emergency Contact 
                                </IntakeButton>
                            }
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
                            <FlexColDiv>
                                <AuthPickupH5>
                                    Phone Number <br/> ex: (###) ### - ####
                                </AuthPickupH5>
                            </FlexColDiv>
                        </IntakeRow>
                        
                        {storedAuthorized}
                    

                        <IntakeRow>
                            {authBtn &&
                                <IntakeButton onClick={(event) => authorizedOnClick(event, authorizedKey, storedAuthorized)}> 
                                Add Authorized Person
                                </IntakeButton>
                            }   
                        </IntakeRow>
                    </IntakeHDiv>    

                    {/* Pet Info */}
                    <IntakeHDiv>
                        <IntakeH3> 
                            Pet Information
                        </IntakeH3>


                        <IntakeCol>
                            {storedPets}
                        </IntakeCol>

                        <IntakeRow>
                            {petBtn && 
                                <IntakeButton onClick={event => petOnClick(event, petKey, storedPets)}>
                                Add Pet
                                </IntakeButton>
                            }
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