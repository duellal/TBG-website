/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

//Forms Styles:
import '../styles/forms.css'

export default function Forms(){
    let navigate = useNavigate();

    return (
        <div id="forms">
            <h1> Forms  </h1>

            <div id="digital">
                <div id="intake">
                    <h2> Intake Form </h2>

                    <p> 
                        We require all owners to fill out an intake form to insure we have your contact information and all of your pets information. 
                    </p>
                    <br/>
                    <p>
                        This form is required before you can schedule at our facility. 
                    </p>

                    <button className="intake" onClick={() => navigate('/')}> Digital Intake Form </button>
                </div>

                <div id="medication">
                    <h2> Medication Form </h2>

                    <p> 
                        We require all dogs who have medications to fill out a medication form.
                    </p>

                    <button className="med" onClick={() => navigate('/')}> Digital Medication Form </button>
                </div>
            </div>

            <div id="pdf">
                <h2> Having Trouble Completing the Form Digitally? </h2>
                <p>
                    If any of our forms do not work for you, please download a printable version by clicking the buttons below. You are more than welcome to complete them by hand and bring them in with you on your next visit, or you may email it to us at thebiscuitgarden.com.
                </p>

                <div className="btns">
                    <button className="intake"> Intake Form </button>
                    <button className="med"> Medication Form </button>
                </div>
            </div>
        </div>
    )
}