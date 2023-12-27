/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

// //About Styles:
import '../styles/requirements.css';

export default function Requirements(){
    let navigate = useNavigate();

    return(
        <div id='requirements'>
            <h1> Our Facility Requirements </h1>

            <h2> Make sure you have done everything on the Checklist Below </h2>

            <div className="checklist">
                <h3> Vaccinations for Your Dog </h3>
                <p className="vaccinations">
                    Before we can invite your pet into our facility, we do require all pets to be safe and vaccinated. We do need a copy on file of all up to date vaccinations. Make sure to email us or bring in a copy with you. Make sure that your pet is up to date on:
                        <div className="list">
                            <li>
                                Bordetella
                            </li>
                            <li>
                                Distemper (DAPP)
                            </li>
                            <li>
                                Rabies
                            </li>
                        </div>
                </p>

                <h3> Intake Form </h3>
                    <div className="intake">
                        <p> 
                            Before your first visit, we do require all pet owners to have an Intake Form on file. 
                        </p>
                        <br/>
                        <p>
                            Please click the button below to fill out the form or head over to the Forms page. 
                        </p>
                        <button onClick={() => navigate('/forms')}> Intake Form </button>
                    </div>

                <h3> Food </h3>
                <div className="food">
                    <p>
                        We do have complimentary Chicken and Rice Grain Blend from Pet Pantry that your pet can have for their stay.
                    </p>
                    <br/>
                    <p>
                        You can also bring your pet's own food if you'd prefer them to stay on their food, they have a sensitive stomach, or they are allergic to chicken. If you do bring your own food, we do prefer to have it seperated it individual bags per meal or day. This ensures that your dog will have enough food for their entire stay. If the stay is longer than 3-4 days, feel free to bring a container with more than enough food for their stay if you don't want to individually package their food. 
                    </p>
                </div>

                <h3> Medication </h3>
                <div className="medication">
                    <p> 
                        If your pet has medication, you will need to fill out a medication form. You can either fill it out at our facility or you can fill it out online by clicking the button below.
                    </p>
                    <button onClick={() => navigate('/forms')}> Medication Form </button>
                </div>

                <h3> Other Belongings </h3>
                <div className="belongings">
                    <p>
                        We have bedding, bowls, and toys for all the pets that stay with us. All your pets belongings can stay at home!
                    </p>
                    <br/>
                    <p> 
                        If you still want to bring any belongings for your pet, please call us at (919) 355 - 2820. 
                    </p>
                </div>

            </div>

        </div>
    )
}