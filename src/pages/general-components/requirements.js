/* 
    Move to bottom of boarding/daycare/grooming pages
*/

/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

//Requirements Styles:
// import '../../styles/requirements.css';
import { RequireChecklistDivs, RequirementBtn, RequirementChecklistSection, RequirementH2, RequirementH3, RequirementSection, RequirementsList } from "../../styles/commonBDG";

export default function Requirements(){
    let navigate = useNavigate();

    return(
        <RequirementSection>
            <h1> Our Facility Requirements </h1>

            <RequirementH2> Make sure you have done everything on the Checklist Below </RequirementH2>

            <RequirementChecklistSection>
                <RequirementH3> Vaccinations for Your Dog </RequirementH3>
                <RequireChecklistDivs>
                    <p>
                        Before we can invite your pet into our facility, we do require all pets to be safe and vaccinated. We do need a copy on file of all up to date vaccinations. Make sure to email us or bring in a copy with you. Make sure that your pet is up to date on:
                            <RequireChecklistDivs>
                                <RequirementsList>
                                    Bordetella
                                </RequirementsList>
                                <RequirementsList>
                                    Distemper (DAPP)
                                </RequirementsList>
                                <RequirementsList>
                                    Rabies
                                </RequirementsList>
                            </RequireChecklistDivs>
                    </p>
                </RequireChecklistDivs>

                <RequirementH3> Intake Form </RequirementH3>
                    <RequireChecklistDivs>
                        <p> 
                            Before your first visit, we do require all pet owners to have an Intake Form on file. 
                        </p>
                        <br/>
                        <p>
                            Please click the button below to fill out the form or head over to the Forms page. 
                        </p>
                        <RequirementBtn onClick={() => navigate('/forms')}> Intake Form </RequirementBtn>
                    </RequireChecklistDivs>

                <RequirementH3> Food </RequirementH3>
                <RequireChecklistDivs>
                    <p>
                        We do have complimentary Chicken and Rice Grain Blend from Pet Pantry that your pet can have for their stay.
                    </p>
                    <br/>
                    <p>
                        You can also bring your pet's own food if you'd prefer them to stay on their food, they have a sensitive stomach, or they are allergic to chicken. If you do bring your own food, we do prefer to have it seperated it individual bags per meal or day. This insures that your dog will have enough food for their entire stay. If the stay is longer than 3-4 days, feel free to bring a container with more than enough food for their stay if you don't want to individually package their food. 
                    </p>
                </RequireChecklistDivs>

                <RequirementH3> Medication </RequirementH3>
                <RequireChecklistDivs>
                    <p> 
                        If your pet has medication, you will need to fill out a medication form at drop off.
                    </p>
                </RequireChecklistDivs>

                <RequirementH3> Other Belongings </RequirementH3>
                <div className="belongings">
                    <p>
                        We have bedding, bowls, and toys for all the pets that stay with us. All your pets belongings can stay at home!
                    </p>
                    <br/>
                    <p> 
                        If you still want to bring any belongings for your pet, please call us at (919) 355 - 2820. 
                    </p>
                </div>
            </RequirementChecklistSection>
        </RequirementSection>
    )
}