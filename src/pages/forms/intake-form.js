import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { IntakeButton, IntakeCard, IntakeDivider, IntakeForm, IntakeH3, IntakeH4, IntakeHDiv, IntakeHeader, IntakeLink, IntakePDF, IntakeRow, IntakeSection } from '../../styles/intake-form'
import { Label, Input, MessageInput, 
    FlexColDiv, SubmitInput, Rotate, 
    ErrorLink, ErrorText } from "../../styles/contact";

//Import Form PDF:
import intakeForm from './TBG-Intake-Form-2024.pdf'

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
                        <FontAwesomeIcon icon={faPaw} size="2xl" />
                    </IntakeDivider>

                    <p>
                        Before you schedule your first visit or appointment, you will need to fill out the intake form below. 
                    </p>
                </IntakeHeader>

                {error && (
                    <div>
                        <ErrorText>There was a problem submitting the form.</ErrorText> <ErrorText>Please try submitting the form again.</ErrorText>
                        <ErrorText> If the problem perissts, kindly reach out to us directly at (919) 355 - 2820 or <ErrorLink className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</ErrorLink>.</ErrorText>
                    </div>
                )}
                <IntakeForm ref={form} onSubmit={submitHandler}>
                    <IntakeHDiv>
                        <IntakeH3> Owner Information </IntakeH3>

                        <IntakeH4> Primary Owner Info - Required information will be starred (*) </IntakeH4>
                    </IntakeHDiv>
                    <IntakeRow>
                        <FlexColDiv>
                            <Label htmlFor="owner1_first_name">
                                *First Name
                            </Label>
                            <Input type="text" name="owner1_first_name" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label htmlFor="owner1_last_name">
                                *Last Name
                            </Label>
                            <Input type="text" name="owner1_last_name" />
                        </FlexColDiv>
                    </IntakeRow>
                    <IntakeRow>
                        <FlexColDiv>
                            <Label htmlFor="owner1_email">
                                *Email
                            </Label>
                            <Input type="email" name="owner1_email" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label htmlFor="owner1_phone">
                                *Phone
                            </Label>
                            <Input type="phone" name="owner1-phone" />
                        </FlexColDiv>
                    </IntakeRow>
                    <IntakeRow>
                        <FlexColDiv>
                            <Label>
                                *Address
                            </Label>
                            <Input type='address1' name='owner1-address1'/>
                        </FlexColDiv>
                    </IntakeRow>
                    <IntakeRow>
                        <FlexColDiv>
                            <Label>
                                Apartment/Suite #
                            </Label>
                            <Input type='address2' name='owner1-address2'/>
                        </FlexColDiv>
                    </IntakeRow>
                    <IntakeRow>
                        <FlexColDiv>
                            <Label>
                                *City
                            </Label>
                            <Input type="city" name="owner1-city" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label>
                                *State
                            </Label>
                            <Input type="state" name="owner1-state" />
                        </FlexColDiv>
                        <FlexColDiv>
                            <Label>
                                *Zip Code
                            </Label>
                            <Input type="zipcode" name="owner1-zipcode" />
                        </FlexColDiv>
                    </IntakeRow>
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