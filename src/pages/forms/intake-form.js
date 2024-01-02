import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'

//Intake Form Styles:
import { IntakeButton, IntakeCard, IntakeCol, IntakeDivider, IntakeForm, IntakeH3, IntakeH4, IntakeHDiv, IntakeHeader, IntakeLabel, IntakeLink, IntakeP, IntakePDF, IntakeRow, IntakeSection } from '../../styles/intake-form'
import { Input, FlexColDiv, SubmitInput, 
    Rotate, ErrorLink, ErrorText } from "../../styles/contact";

//Import Form PDF:
import intakeForm from './TBG-Intake-Form-2024.pdf'

export default function DigitalIntake() {
    const [error, setError] = useState(null)
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [key, setKey] = useState(2)
    const [storedElems, setStoredElems] = useState([OwnerInfo(1)])
    const [ownerBtn, setOwnerBtn] = useState(true)

    let ownerOnClick = async (event, key, storedElems) => {
        let toggleOwnerBtn = () => {
            setOwnerBtn(!ownerBtn)
        }
        
        event.preventDefault()
        toggleOwnerBtn();
        await setKey(key + 1)
        await setStoredElems([...storedElems, OwnerInfo(key)])
    }

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


                    <IntakeP>
                         Before you schedule your first visit or appointment, you will need to fill out the intake form below. 
                    </IntakeP>

                </IntakeHeader>

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
                <IntakeForm ref={form} onSubmit={submitHandler}>
                    <IntakeHDiv>
                        <IntakeH3> 
                            Owner Information 
                        </IntakeH3>

                        <IntakeH4> 
                            Primary Owner Info - Required information will be starred (*)
                        </IntakeH4>
                    </IntakeHDiv>
                    
                    <IntakeCol>
                        {storedElems}
                    </IntakeCol>

                    <IntakeRow>
                        {ownerBtn && 
                            <IntakeButton onClick={(event) => ownerOnClick(event, key, storedElems)}> 
                                Add Owner 
                            </IntakeButton>
                        }
                        {loading && <Rotate>
                            <FontAwesomeIcon icon={faSpinner} size="2xl" />
                        </Rotate>}
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

function OwnerInfo(key){
    return(
        <div key={key} id={key}>
            <IntakeDivider>
                <IntakeH4>
                    Owner {key}
                </IntakeH4>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor="owner1_first_name">
                            *First Name
                        </IntakeLabel>
                        <Input type="text" name="owner1_first_name" />
                
                    </FlexColDiv>
                        <FlexColDiv>
                            <IntakeLabel htmlFor="owner1_last_name">
                                *Last Name
                            </IntakeLabel>
                            <Input type="text" name="owner1_last_name" />
                        </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel htmlFor="owner1_email">
                            *Email
                        </IntakeLabel>
                        <Input type="email" name="owner1_email" />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel htmlFor="owner1_phone">
                            *Phone
                        </IntakeLabel>
                        <Input type="phone" name="owner1-phone" />
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Address
                        </IntakeLabel>
                        <Input type='address1' name='owner1-address1'/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            Apartment/Suite #
                        </IntakeLabel>
                        <Input type='address2' name='owner1-address2'/>
                    </FlexColDiv>
                </IntakeRow>
                <IntakeRow>
                    <FlexColDiv>
                        <IntakeLabel>
                            *City
                        </IntakeLabel>
                        <Input type="city" name="owner1-city" />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *State
                        </IntakeLabel>
                        <Input type="state" name="owner1-state" />
                    </FlexColDiv>
                    <FlexColDiv>
                        <IntakeLabel>
                            *Zip Code
                        </IntakeLabel>
                        <Input type="zipcode" name="owner1-zipcode" />
                    </FlexColDiv>
                </IntakeRow>
            </IntakeDivider>
        </div>
    )
}