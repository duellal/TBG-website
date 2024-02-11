/* 
Intake Form: 

Make it like the Green beagle lodge with a sections + next -> submit
Intake Form 
*/

import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import jsPDF from "jspdf";

//Components:
import AuthPickupSection from "./components/sections/auth/auth-pickup-section.js";
import EmergencySection from "./components/sections/emergency/emergency-section.js";
import LiabilityWaiver from './components/sections/waiver/liability-waiver.js'
import OwnerFormTabs from "./components/section-tabs/form-tabs.js";
import OwnerSection from './components/sections/owner/owner-section.js'
import PetBehaviorsSection from "./components/sections/pet/pet-section-behavior.js";
import PetInfoSection from "./components/sections/pet/pet-section-info.js";
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

    //Next + Previous Buttons + Tab Index State:
    const [btnIndex, setBtnIndex] = useState(0)

    //onChange function changeInput:
    function changeInput(event){
        let { name, value } = event.target
        editFormData({ ...formData, [name]: value})
     }

    //Pet Info States:
    const [countPets, setCountPets] = useState([{}])

    
    //Render Components Array:
    let renderComponents = [
        <OwnerSection 
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
        />,
        <EmergencySection
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
        />,
        <AuthPickupSection 
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
        />,
        <PetInfoSection
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
            countPets={countPets}
            setCountPets={setCountPets}
        />,
        <PetBehaviorsSection
            changeInput={changeInput}
            countPets={countPets}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}
            formData={formData} 
        />,
        <PetHealthSection
            changeInput={changeInput}
            countPets={countPets}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}  
            formData={formData}     
        />,
        <LiabilityWaiver 
            changeInput={changeInput}
            loading={loading}
            setLoading={setLoading}
            btnIndex={btnIndex}
            setBtnIndex={setBtnIndex}   
            formData={formData}       
        />
    ]

    //Form Submit:
    const submitHandler = async event => {
        event.preventDefault();
        setLoading(false)
        //clears errors if there were any previously
        setError(null)
        console.log(`Form Data at End of Form:`, formData)

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

            <IntakeCard id="new-owner-form">
                <OwnerFormTabs 
                    btnIndex={btnIndex}
                    setBtnIndex={setBtnIndex}
                />
                <IntakeForm 
                    ref={form}
                    autoComplete="on"
                    onSubmit={submitHandler} 
                    // onChange={changeInput} 
                    name="new_owner_form"
                    id="new_owner_form"
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