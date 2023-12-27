/* eslint-disable react/prop-types */
import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser'

//About Styles:
import {ContactHeader, ContactForm, ContactSection} from '../../styles/contact'

export default function Contact(){
    const [error, setError] = useState(null)
    const form = useRef();
    
    const submitHandler = event => {
        event.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then(() => {
            
        }, (error) => {
            setError(error.text)
        }).finally(()=> {
            //resets the form after the email is sent 
            form.current.reset()
        })
    }
    
    return(
        <ContactSection id='contact'>
            <ContactHeader id='contact-header'>
                <h1> 
                    Contact Us!
                </h1>
            </ContactHeader>
            {error && <p>There was a problem submitting the form. Please try submitting the form again. If the problem perissts, kindly reach out to use directly at (919) 355 - 2820 or <a className="e-address" href="mailto:thebiscuitgarden@gmail.com">thebiscuitgarden@gmail.com</a>
            .</p>}
            <ContactForm ref={form} onSubmit={submitHandler}>
                <label> 
                    Name: <input type="text" name="user_name" />  
                </label>
                <label>
                    Email: <input type="email" name="user_email" />
                </label>
                <label>
                    Phone: <input type="phone" name="user_phone" />
                </label>
                <label>
                    Pet's Name: <input type="text" name="pet_name" />
                </label>
                <label>
                    Message: <textarea name="message" />
                </label>
                <input type="submit" value="Send" />
            </ContactForm>
        </ContactSection>
    )
}