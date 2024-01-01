import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { IntakeCard, IntakeDivider, IntakeHeader, IntakeSection } from '../../styles/intake-form'
import { Row, Label, Input, MessageInput, 
    FlexColDiv, SubmitInput, Rotate, 
    ErrorLink, ErrorText } from "../../styles/contact";

export default function DigitalIntake() {
    const [error, setError] = useState(null)
    const form = useRef();
    const [loading, setLoading] = useState(false)

    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true)
        //clears errors if there were any previously
        setError(null)

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then(() => {
                //resets the form after the email is sent 
                form.current.reset()
                setLoading(false)
            }).catch((error) => {
                setError(error.text)
            }).finally(() => {
                //resets the form after the email is sent 
                form.current.reset()
                setLoading(false)
            })
    }

    return (
        <IntakeSection id="digital-intake">
            <IntakeCard>
                <IntakeHeader id='intake-header'>
                    <h2>
                        Intake Form
                    </h2>

                    <IntakeDivider>
                        
                    </IntakeDivider>
                </IntakeHeader>
            </IntakeCard>
        </IntakeSection>
    )
}