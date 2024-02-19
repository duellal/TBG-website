import React, { useEffect, useRef, useState } from "react";
// import emailjs, { sendForm } from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'
// import jsPDF from "jspdf";
import { PDFViewer, usePDF } from '@react-pdf/renderer';

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
import intakeForm from './TBG-Intake-Form-2024.pdf'
import PdfDoc from "./components/make-pdf/new-owner-pdf.js";

//Form Template:
import { formTemplate } from "./form-template.js";

//Styles:
import { ButtonRow, FormBtn, IntakeCard, IntakeDivider, IntakeForm, IntakeHeader, IntakeP, IntakePDF, IntakeSection, SendBtn } from '../../styles/owner-form.js'
import { ErrorLink, ErrorText } from "../../styles/contact.js";
import { CommonP, UnderlineLink } from "../../styles/common-styles.js";
import { darkGrey } from "../../styles/constants/colors.js";
import { Rotate } from "hamburger-react";


export default function DigitalOwnerForm() {
    const form = useRef();

    //Form States:
    const [formData, editFormData] = useState(formTemplate)
    const [url, editUrl] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [viewer, updateViewer] = useState(false)

    //Component States:
    const [countPets, setCountPets] = useState([{}])
    const [ownerCountArr, setOwnerCountArr] = useState([{}])
    const [countEmergencyContacts, setCountEmergencyContacts] = useState([{}])
    const [countAuth, setCountAuth] = useState([{}])

    //Next + Previous Buttons + Tab Index State:
    const [btnIndex, setBtnIndex] = useState(0)

    //PDF States:
    const [pdfInstance, updatePdfInstance] = usePDF({document: 
        <PdfDoc 
            formData={formData} 
            ownerCount={ownerCountArr}
            emergencyCount={countEmergencyContacts}
            authCount={countAuth}
            countPets={countPets}
        />})

    useEffect(() => {
        if(pdfInstance.blob){
            updatePdfInstance(
                <PdfDoc 
                    formData={formData} 
                    ownerCount={ownerCountArr}
                    emergencyCount={countEmergencyContacts}
                    authCount={countAuth}
                    countPets={countPets}
                />)

            editUrl(
                URL.createObjectURL(
                    new File([pdfInstance.blob], 'filename', {
                        type: pdfInstance.blob.type
                    })
                )
            )
        }
    }, [pdfInstance, updatePdfInstance, formData, ownerCountArr, countEmergencyContacts, countAuth, countPets])

    //onChange function changeInput:
    async function changeInput(event){
        let { type, name, value } = event.target
        // console.log(`${name}: ${value}`)

        //To have true/false on the formData from the checkbox
        if(type === 'checkbox'){
            if(value === "false"){
                return editFormData({...formData, [name]: "true"})
            }
            
            return editFormData({ ...formData, [name]: 'false'})
        }

        editFormData({ ...formData, [name]: value})
     }

    //Components Array for Rendering on a particular btnIndex:
    let renderComponents = [
        <OwnerSection 
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
            ownerCountArr={ownerCountArr}
            setOwnerCountArr={setOwnerCountArr}
        />,
        <EmergencySection
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
            countEmergencyContacts={countEmergencyContacts}
            setCountEmergencyContacts={setCountEmergencyContacts}
        />,
        <AuthPickupSection 
            btnIndex={btnIndex}
            changeInput={changeInput}
            formData={formData} 
            setBtnIndex={setBtnIndex}
            form={form}
            countAuth={countAuth}
            setCountAuth={setCountAuth}
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

        updatePdfInstance(
                <PdfDoc 
                    formData={formData} 
                    ownerCount={ownerCountArr}
                    emergencyCount={countEmergencyContacts}
                    authCount={countAuth}
                    countPets={countPets}
                />
            )

        // console.log(`SubmitHandler FormHTML?`, formHTML)
        // console.log(`HTML size in KB:`, sendFormHTML.length/1024)
        // console.log(`Send Form HTML?`, sendFormHTML)

        // let pdf = new jsPDF({
        //         orientation: 'p',
        //         unit: 'px',
        //         format: 'letter',
        //         hotfixes: ["px_scaling"],
        //        })
            
        // let margin = [20, 50]
    
        const pdfName = `${formData.owner1_first_name}_${formData.owner1_last_name}'s New Owner Form`
    
        // pdf.setDocumentProperties({
        //     title: pdfName
        // })
        
       
        // formHTML.map((elem, index) => {
        //     if(index > 0){
        //         pdf.insertPage({insetPage: index - 1})
        //     }
            
        //     pdf.addImage({
        //         imageData: elem.imgData, 
        //         format: 'JPEG', 
        //         x: 0, 
        //         y: 0, 
        //         alias: `${elem.sectionId}_${index}`,
        //     })

        //     return elem
        // })

        // updatePdfInstance({
        //     document: PdfDoc,
        //     // title: pdfName
        // })

        updateViewer(!viewer)
        return (
            window.open(url)
        )
        // console.log(pdf)

        // pdf.html(sendFormHTML, {
        //     margin,
        //     autoPaging: "text",
        //     filename: pdfName,
        //     callback: (doc) => {
        //         let pdfUrl = doc.output('bloburl')

        //         console.log(pdfUrl)

        //         return window.open(pdfUrl)

        //         // let params = {
        //         //     form_pdf: pdfUrl,
        //         //     owner1_first_name: formData.owner1_first_name,
        //         //     owner1_last_name: formData.owner1_last_name,
        //         //     owner1_email: formData.owner1_email,
        //         //     html: sendFormHTML,
        //         //     // formData: formData
        //         // }
        
        //         // const data = {
        //         //     serviceID: process.env.REACT_APP_SERVICE_ID_INTAKE,
        //         //     templateID: process.env.REACT_APP_TEMPLATE_ID_INTAKE,
        //         //     templateParams: params,
        //         //     // publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        //         // };
            
        //         // return emailjs.send(
        //         //     process.env.REACT_APP_SERVICE_ID_INTAKE,
        //         //     process.env.REACT_APP_TEMPLATE_ID_INTAKE,
        //         //     params, 
        //         //     process.env.REACT_APP_EMAIL_PUBLIC_KEY
        //         //     )
        //         //     .then((res) => {
        //         //         //resets the form after the email is sent 
        //         //         form.current.reset()
        //         //         setLoading(false)
        //         //     }).catch((error) => {
        //         //         setError(error.text)
        //         //     }).finally(() => {
        //         //         //resets the form after the email is sent 
        //         //         form.current.reset()
        //         //         setLoading(false)
        //         //     })
        //     }
        // })
    }

    let sendBtnHandleClick = () => {
        // return findSection(document.getElementById('waiver_section'), formHTML, setFormHTML, btnIndex, 'waiver_section')
        //Converts array to string
            //Make the formHTML a string instead of an array after pdf works
        // formHTML.map((section, i) => {

        //     if(typeof section !== 'string'){
        //         return setSendFormHTML(html => {return html + section.html})
        //     }
                
        //     return setSendFormHTML(html => {return html + section.html})
        // })

        // return await findSection(document.getElementById('waiver_section').concat('</div>'), formHTML, setFormHTML, btnIndex, 'waiver_section')
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
                    name="new_owner_form"
                    id="new_owner_form"
                    spellCheck={true}
                >
                    {
                        renderComponents[btnIndex]
                    }
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
                    {
                        btnIndex === 6 ? 
                            <ButtonRow>
                                <SendBtn 
                                    type="submit" 
                                    value="Send"
                                    onClick={async () => await sendBtnHandleClick()}
                                >
                                    Send
                                </SendBtn>
                                    {
                                        loading && <Rotate>
                                        <FontAwesomeIcon icon={faSpinner} size="2xl" />
                                        </Rotate>
                                    }

                            </ButtonRow>
                            : null
                    }
                </IntakeForm>
            </IntakeCard>

            {
                viewer ? 
                <PDFViewer style={{width: '100%', height: '800px'}} title={'someName'}>
                    <PdfDoc 
                        formData={formData} 
                        ownerCount={ownerCountArr}
                        emergencyCount={countEmergencyContacts}
                        authCount={countAuth}
                        countPets={countPets}
                    />
                </PDFViewer>
                    : null 
            }

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