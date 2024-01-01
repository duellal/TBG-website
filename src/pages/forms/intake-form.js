import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { ContactHeader, ContactCard, ContactForm, ContactSection, ContactDivider, ErrorLink, ErrorText, Input, Label, MessageInput, FlexColDiv, Row, Rotate, SubmitInput } from '../../styles/contact'

export default function Contact() {
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
        <div id="digital-intake">

        </div>
    )
}