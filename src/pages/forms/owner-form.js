/* Title: New Owner Form 
Blurb: Intake forms and medication forms will be filled out at time of checkin

Buttons on intake form: make them stand out
    - red or blue button
    - on hover change gradient of color
    - add shadow behind it

Intake Form: 
Title and blurb outside of the form box (own div)
Make it like the Green beagle lodge with a sections + next -> submit
Intake Form 
    - take out pets on liability waiver
    -Emergency Contact: Take out initials
    - Required info: (Required) in red italics

*/

import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import jsPDF from "jspdf";

//Components:
import AuthorizedPickup from "./components/sections/auth/auth-pickup-info.js";
import AuthPickupSection from "./components/sections/auth/auth-pickup-section.js";
import EmergencyInfo from "./components/sections/emergency/emergency-info.js";
import EmergencySection from "./components/sections/emergency/emergency-section.js";
import LiabilityWaiver from './components/sections/waiver/liability-waiver.js'
import OwnerFormTabs from "./components/section-tabs/form-tabs.js";
import OwnerInfo from './components/sections/owner/owner-info.js'
import OwnerSection from './components/sections/owner/owner-section.js'
import PetBehavior from "./components/sections/pet/pet-behavior.js";
import PetBehaviorsSection from "./components/sections/pet/pet-section-behavior.js";
import PetInfo from "./components/sections/pet/pet-info.js";
import PetInfoSection from "./components/sections/pet/pet-section-info.js";
import PetHealth from "./components/sections/pet/pet-health.js";
import PetHealthSection from "./components/sections/pet/pet-section-health.js";

//Form PDF:
import intakeForm from './waiver/TBG-Intake-Form-2024.pdf'

//Form Template:
import { formTemplate } from "./form-template.js";

//Styles:
import { FormBtn, IntakeCard, IntakeDivider, IntakeForm, IntakeHeader, IntakeP, IntakePDF, IntakeSection } from '../../styles/owner-form.js'
import { ErrorLink, ErrorText } from "../../styles/contact.js";
import { CommonP, UnderlineLink } from "../../styles/common-styles.js";
import { darkGrey } from "../../styles/constants/colors.js";


export default function DigitalOwnerForm() {
    const form = useRef();

    //Form States:
    const [formData, editFormData] = useState(formTemplate)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    // console.log(`form data:`, formData)

    //onChange function changeInput:
    function changeInput(event){
        let { name, value } = event.target
        console.log(`HERE target name: value:`, `${name}: ${value}`)
        editFormData({ ...formData, [name]: value})
        // sessionStorage.setItem(name, value)
     }

    //Authorized Pickup States:
    const [authBtn, setAuthBtn] = useState(true)
    const [authNum, setAuthNum] = useState(1)
    const [authorizedKey, setAuthorizedKey] = useState(2)
    const [storedAuthorized, setStoredAuthorized] = useState([<AuthorizedPickup authorizedKey={authNum} formData={formData} changeInput={changeInput} />])

    //Next + Previous Buttons + Tab Index State:
    const [btnIndex, setBtnIndex] = useState(0)

    //Emergency Contact States:
    const [emergencyKey, setEmergencyKey] = useState(2)
    const [emergencyBtn, setEmergencyBtn] = useState(true)
    const [emergencyNum, setEmergencyNum] = useState(1)
    const [storedEmergencyContacts, setStoredEmergencyContacts] = useState([<EmergencyInfo emergencyKey={emergencyNum} formData={formData} changeInput={changeInput}/>])

    //Owner Info States:
    const [ownerKey, setOwnerKey] = useState(2)
    const [ownerBtn, setOwnerBtn] = useState(true)
    const [storedOwners, setStoredOwners] = useState([<OwnerInfo ownerKey={1} formData={formData} changeInput={changeInput} />])

    //Pet Info States:
    const [petBtn, setPetBtn] = useState(true)
    const [petNum, setPetNum] = useState(2)
    const [storedPetInfo, setStoredPetInfo] = useState([<PetInfo petKey={petNum - 1} formData={formData} changeInput={changeInput} />])
    const [storedPetBehavior, setStoredPetBehavior] = useState([<PetBehavior petKey={petNum - 1} formData={formData} changeInput={changeInput} />])
    const [storedPetHealth, setStoredPetHealth] = useState([<PetHealth petKey={petNum - 1} formData={formData} changeInput={changeInput} />])

    
    //Render Components Array:
    let renderComponents = [
        <OwnerSection 
            ownerBtn={ownerBtn}
            setOwnerBtn={setOwnerBtn}
            ownerKey={ownerKey}
            setOwnerKey={setOwnerKey}
            storedOwners={storedOwners}
            setStoredOwners={setStoredOwners}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            formData={formData} 
            changeInput={changeInput}
        />,
        <EmergencySection
            emergencyBtn={emergencyBtn}
            setEmergencyBtn={setEmergencyBtn}
            emergencyKey={emergencyKey}
            setEmergencyKey={setEmergencyKey}
            storedEmergencyContacts={storedEmergencyContacts}
            setStoredEmergencyContacts={setStoredEmergencyContacts}
            emergencyNum={emergencyNum}
            setEmergencyNum={setEmergencyNum}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            formData={formData} 
            changeInput={changeInput}
        />,
        <AuthPickupSection 
            authBtn={authBtn}
            setAuthBtn={setAuthBtn}
            authorizedKey={authorizedKey}
            setAuthorizedKey={setAuthorizedKey}
            storedAuthorized={storedAuthorized}
            setStoredAuthorized={setStoredAuthorized}
            authNum={authNum}
            setAuthNum={setAuthNum}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            formData={formData} 
            changeInput={changeInput}
        />,
        <PetInfoSection
            petBtn={petBtn} 
            setPetBtn={setPetBtn} 
            storedPetInfo={storedPetInfo}
            setStoredPetInfo={setStoredPetInfo}
            storedPetBehavior={storedPetBehavior}
            setStoredPetBehavior={setStoredPetBehavior}
            storedPetHealth={storedPetHealth}
            setStoredPetHealth={setStoredPetHealth}
            petNum={petNum}
            setPetNum={setPetNum}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}     
            formData={formData} 
            changeInput={changeInput}        
        />,
        <PetBehaviorsSection
            storedPetBehavior={storedPetBehavior}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            storedPetInfo={storedPetInfo}
            formData={formData} 
            changeInput={changeInput}            
        />,
        <PetHealthSection
            storedPetHealth={storedPetHealth}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            storedPetInfo={storedPetInfo}    
            formData={formData} 
            changeInput={changeInput}        
        />,
        <LiabilityWaiver 
            loading={loading}
            setLoading={setLoading}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}   
            formData={formData} 
            changeInput={changeInput}          
        />
    ]

    //Form Submit:
    const submitHandler = async event => {
        event.preventDefault();
        setLoading(false)
        //clears errors if there were any previously
        setError(null)

        // let buttonTag = form.current.getElementsByTagName('button')
        // Array.from(buttonTag).forEach(element => {
        //     if(element.parentNode){
        //         element.parentNode.removeChild(element)
        //     }
        // });

        // let pdf = new jsPDF({
        //     orientation: 'p',
        //     unit: 'px',
        //     format: 'letter',
        //     hotfixes: ["px_scaling"],
        //    })
        
        // let margin = [20, 50]

        // const pdfName = `${formData.owner1_first_name}_${formData.owner1_last_name}'s_intake_form`

        // pdf.setDocumentProperties({
        //     title: pdfName
        // })

        // return pdf.html(form.current, {
        //     margin,
        //     autoPaging: "text",
        //     filename: pdfName,
        //     callback: (doc) => {
        //         const pdfUrl = doc.output('bloburl')

        //         window.open(pdfUrl)
        //         // console.log(form.current.removeChild('button'))
        //         let params = {
        //             intake_form: `${pdfUrl}`,
        //             owner1_first_name: formData.owner1_first_name,
        //             owner1_last_name: formData.owner1_last_name,
        //             owner1_email: formData.owner1_email,
        //             intake_html: form.current
        //         }
        
                // const data = {
                //     service_id: process.env.REACT_APP_SERVICE_ID_INTAKE,
                //     template_id: process.env.REACT_APP_TEMPLATE_ID_INTAKE,
                //     user_id: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
                //     template_params: formData
                // };
            
                // emailjs.send(process.env.REACT_APP_SERVICE_ID_INTAKE,
                //     process.env.REACT_APP_TEMPLATE_ID_INTAKE,
                //     params,
                //     process.env.REACT_APP_EMAIL_PUBLIC_KEY)
                // await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json',
                //     },
                //     body: JSON.stringify(data)
                // })
                //     .then((res) => {
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
            <IntakeHeader id='intake-header'>
                <h2>
                    New Client Form
                </h2>

                <IntakeDivider>
                    <FontAwesomeIcon icon={faPaw} size="3x" color={darkGrey}/>
                </IntakeDivider>

                <IntakeP>
                    Before you schedule your first visit or appointment, please fill out the form below. 
                </IntakeP>
            </IntakeHeader>

            <IntakeCard>
                <OwnerFormTabs 
                    btnIndex={btnIndex}
                    setBtnIndex={setBtnIndex}
                />
                <IntakeForm 
                    ref={form}
                    autoComplete="on"
                    onSubmit={submitHandler} 
                    // onChange={changeInput} 
                    name="intake_form"
                    id="intake_form"
                >
                    {
                        renderComponents[btnIndex]
                    }
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

            {/* New Client Form PDF Section */}
            <IntakePDF>
                <CommonP style={{margin: '30px 0 0'}}>
                    If you cannot fill out the digitial form, feel free to download and complete the pdf version below.
                </CommonP>
                
                <FormBtn className="intake" onClick={() => window.open(intakeForm)}> 
                    New Client Form PDF
                </FormBtn>

                <CommonP style={{margin: '0 0 50px'}}>
                    Once completed, you can either email it to us at <UnderlineLink href="thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</UnderlineLink> or you can bring it in.
                </CommonP>
            </IntakePDF>
        </IntakeSection>
    )
}