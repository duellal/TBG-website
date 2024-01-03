/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Contact Form Styles:
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
        <ContactSection id='contact'>
            <ContactCard>
                <ContactHeader id='contact-header'>
                    <h2>
                        Contact Us!
                    </h2>

                    <ContactDivider>
                        <FontAwesomeIcon icon={faPaw} size="2xl" />
                    </ContactDivider>
                    <p>We would love to hear from you!</p>
                    <p>Please complete the form below and our team will be in touch via email shortly!</p>
                </ContactHeader>
                {error && (
                    <div>
                        <ErrorText>There was a problem submitting the form.</ErrorText> <ErrorText>Please try submitting the form again.</ErrorText>
                        <ErrorText> If the problem perissts, kindly reach out to us directly at (919) 355 - 2820 or <ErrorLink className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</ErrorLink>.</ErrorText>
                    </div>
                )}
                <ContactForm ref={form} onSubmit={submitHandler}>
                    <Row>
                        <FlexColDiv>
                            <Label htmlFor="user_first_name">
                                First Name
                            </Label>
                            <Input type="text" name="user_first_name" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label htmlFor="user_last_name">
                                Last Name
                            </Label>
                            <Input type="text" name="user_last_name" />
                        </FlexColDiv>
                    </Row>
                    <Row>
                        <FlexColDiv>
                            <Label htmlFor="user_email">
                                Email
                            </Label>
                            <Input type="email" name="user_email" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label htmlFor="user_phone">
                                Phone
                            </Label>
                            <Input type="tel" name="user_phone" pattern="^\(\d{3}\)\s\d{3}-\d{4}" required />
                        </FlexColDiv>
                    </Row>
                    <Row>
                        <FlexColDiv>
                            <Label>
                                Message
                            </Label>
                            <MessageInput name="message" />
                        </FlexColDiv>
                    </Row>
                    <Row>
                        <SubmitInput type="submit" value="Send" />
                        {loading && <Rotate>
                            <FontAwesomeIcon icon={faSpinner} size="2xl" />
                        </Rotate>}
                    </Row>
                </ContactForm>
            </ContactCard>
        </ContactSection>
    )
}