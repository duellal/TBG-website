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
import OwnerSection from './components/owner-section.js'
import OwnerInfo from '../forms/components/owner-info.js'
import LiabilityWaiver from './components/liability-waiver.js'
import EmergencyInfo from "./components/emergency-info.js";
import EmergencySection from "./components/emergency-section.js";
import AuthorizedPickup from "./components/auth-pickup-info.js";
import PetInfo from "./components/pet-info.js";
import { formTemplate } from "./form-template.js";
import AuthPickupSection from "./components/auth-pickup-section.js";
import PetSection from "./components/pet-section.js";

export default function DigitalIntake() {
    //State:
    const [form, editForm] = useState(formTemplate)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [ownerKey, setOwnerKey] = useState(2)
    const [ownerBtn, setOwnerBtn] = useState(true)
    const [petKey, setPetKey] = useState(2)
    const [petBtn, setPetBtn] = useState(true)
    const [petNum, setPetNum] = useState(1)
    const [emergencyKey, setEmergencyKey] = useState(2)
    const [emergencyBtn, setEmergencyBtn] = useState(true)
    const [emergencyNum, setEmergencyNum] = useState(1)
    const [authorizedKey, setAuthorizedKey] = useState(2)
    const [authBtn, setAuthBtn] = useState(true)
    const [authNum, setAuthNum] = useState(1)
 
    function changeInput(event){
        let { name, value } = event.target
        // console.log(`changeInput Name:`, name)
        // console.log(`changeInput Value:`, value)
        editForm({ ...form, [name]: value })
        // console.log(`Form changed?`, form)
     }

    //State based changeInput:
       //Owner State:
       const [storedOwners, setStoredOwners] = useState([<OwnerInfo changeInput={changeInput} ownerKey={1} ownerInfo={form}/>])

       //Authorized Pickup: 
       const [storedAuthorized, setStoredAuthorized] = useState([<AuthorizedPickup authorizedKey={1}/>])
       //Emergency Contacts:
        const [storedEmergencyContacts, setStoredEmergencyContacts] = useState([<EmergencyInfo emergencyKey={1}/>])
        // Pets:
        const [storedPets, setStoredPets] = useState([<PetInfo petKey={1}/>])


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

                <IntakeForm onSubmit={submitHandler} onChange={changeInput}>
                    {/* Owners */}
                    <OwnerSection 
                        ownerBtn={ownerBtn}
                        setOwnerBtn={setOwnerBtn}
                        ownerKey={ownerKey}
                        setOwnerKey={setOwnerKey}
                        storedOwners={storedOwners}
                        setStoredOwners={setStoredOwners}
                    />

                    {/* Emergency Contact */}
                    <EmergencySection
                        emergencyBtn={emergencyBtn}
                        setEmergencyBtn={setEmergencyBtn}
                        emergencyKey={emergencyKey}
                        setEmergencyKey={setEmergencyKey}
                        storedEmergencyContacts={storedEmergencyContacts}
                        setStoredEmergencyContacts={setStoredEmergencyContacts}
                        emergencyNum={emergencyNum}
                        setEmergencyNum={setEmergencyNum}
                    />

                    {/* Authorized Pick Up */}
                    <AuthPickupSection 
                        authBtn={authBtn}
                        setAuthBtn={setAuthBtn}
                        authorizedKey={authorizedKey}
                        setAuthorizedKey={setAuthorizedKey}
                        storedAuthorized={storedAuthorized}
                        setStoredAuthorized={setStoredAuthorized}
                        authNum={authNum}
                        setAuthNum={setAuthNum}
                    />

                    {/* Pet Info */}
                    <PetSection
                        petBtn={petBtn} 
                        setPetBtn={setPetBtn} 
                        petKey={petKey}
                        setPetKey={setPetKey} 
                        storedPets={storedPets}
                        setStoredPets={setStoredPets}
                        petNum={petNum}
                        setPetNum={setPetNum}
                    />
                    
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