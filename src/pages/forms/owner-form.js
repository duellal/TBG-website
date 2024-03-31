import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';

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
import ReviewForm from "./components/sections/review/review-form.js";

//Form Template:
import { formTemplate } from "./form-template.js";

//Functions: 
import emailForm from "./send-form-email-func.js";

//Styles:
import { ButtonRow, FormBtn, IntakeCard, IntakeDivider, IntakeForm, IntakeHeader, IntakeP, IntakePDF, IntakeSection, SendBtn } from '../../styles/owner-form.js'
import { ErrorLink, ErrorText } from "../../styles/contact.js";
import { CommonP, UnderlineLink } from "../../styles/common-styles.js";
import { darkGrey } from "../../styles/constants/colors.js";
import { Rotate } from "hamburger-react";
import { styles } from "./components/make-pdf/new-owner-styles.js";


export default function DigitalOwnerForm() {
    const form = useRef();

    //Form States:
    const [formData, editFormData] = useState(formTemplate)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //Component States:
    const [countPets, setCountPets] = useState([{}])
    const [ownerCountArr, setOwnerCountArr] = useState([{}])
    const [countEmergencyContacts, setCountEmergencyContacts] = useState([{}])
    const [countAuth, setCountAuth] = useState([{}])

    //Next + Previous Buttons + Tab Index State:
    const [btnIndex, setBtnIndex] = useState(0)

    //PDF States + Variables:
    const pdfName = `${formData[`owner1_first_name`]?.toLowerCase()}-${formData[`owner1_last_name`]?.toLowerCase()}'s-new-owner-form`
    const pdfDoc = useState(
        <PdfDoc 
            formData={formData} 
            ownerCount={ownerCountArr}
            emergencyCount={countEmergencyContacts}
            authCount={countAuth}
            countPets={countPets}
            pdfName={pdfName}
        />
    )

    //onChange function changeInput:
    async function changeInput(event){
        let { type, name, value } = event.target

        //To have true/false on the formData from the checkbox
        if(type === 'checkbox'){
            if(value === "false"){
                return editFormData({...formData, [name]: "true"})
            }
            
            return editFormData({ ...formData, [name]: 'false'})
        }

        if(name.includes('initials')){
            value = value.toUpperCase()
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
        />,
        <ReviewForm 
            pdfDoc={pdfDoc}
            formData={formData} 
            ownerCount={ownerCountArr}
            emergencyCount={countEmergencyContacts}
            authCount={countAuth}
            countPets={countPets}
            pdfName={pdfName}
        />
    ]

    //Form Submit:
    const submitHandler = async event => {
        event.preventDefault();
        setLoading(false)
        //clears errors if there were any previously
        setError(null)
        //Makes sure that form PDF is updated

        let pdfBlob = await pdf(
            <PdfDoc 
                formData={formData} 
                ownerCount={ownerCountArr}
                emergencyCount={countEmergencyContacts}
                authCount={countAuth}
                countPets={countPets}
                pdfName={pdfName}
            />
        ).toBlob()
 
        return await emailForm({ pdfBlob, pdfName, formData })
    }

    return (
        <IntakeSection id="digital-intake">
            <IntakeHeader id='intake-header'>
                <h2>
                    New Owner Form
                </h2>

                <IntakeDivider>
                    <FontAwesomeIcon icon={faPaw} size="3x" color={darkGrey}/>
                </IntakeDivider>

                <IntakeP>
                    Before you schedule your first visit or appointment, please fill out the form below. 
                </IntakeP>
                
                <IntakeDivider/>
                
                <IntakeP>
                    Please note that you will need to use the buttons at the bottom of the page to go back or forward on the form. The back button on your web browser will go to previous page.
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
                            If the problem perissts, kindly reach out to us directly at (919) 355 - 2820 or {''}
                            <ErrorLink className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</ErrorLink>.
                        </ErrorText>
                    </div>
                )}
                {/* Only shows send (submit) + download buttons if on the last tab index */}
                    {
                        btnIndex === 7 ? 
                            <ButtonRow>
                                    <PDFDownloadLink 
                                            fileName={`${pdfName}.pdf`} 
                                            document={<PdfDoc 
                                                formData={formData} 
                                                ownerCount={ownerCountArr}
                                                emergencyCount={countEmergencyContacts}
                                                authCount={countAuth}
                                                countPets={countPets}
                                                pdfName={pdfName}
                                        />}
                                        style={styles.download}
                                    >
                                        {({ blob, url, loading, error }) => {
                                            return loading ? 'Loading PDF' : 'Download Form'
                                            }
                                        }
                                    </PDFDownloadLink>
                                <SendBtn 
                                    type="submit" 
                                    value="Send"
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

            {/* New Client Form PDF Section - Can download PDF version of the digital new owner form */}
            <IntakePDF>
                <CommonP style={{margin: '30px 0 0'}}>
                    If you cannot fill out the digitial form, feel free to download and complete the pdf version below.
                </CommonP>
                
                <FormBtn className="intake" onClick={() => window.open(intakeForm)}> 
                    New Client Form PDF
                </FormBtn>

                <CommonP style={{margin: '0 0 50px'}}>
                    Once completed, you can either email it to us at {''}
                        <UnderlineLink href="thebiscuitgarden@gmail.com">
                            thebiscuitgarden@gmail.com
                        </UnderlineLink> 
                    {''} or you can bring it in.
                </CommonP>
            </IntakePDF>
        </IntakeSection>
    )
}