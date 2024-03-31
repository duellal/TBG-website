/* eslint-disable react/prop-types */
import React from "react";

//Credits Styles:
import '../styles/credits.css'

//Logos
import phoneIcon from '../images/icons/phone-call.png'
import emailIcon from '../images/icons/email.png'
import fbIcon from '../images/icons/facebook.png'
import instaIcon from '../images/icons/instagram.png'
import tiktokIcon from '../images/icons/tik-tok.png'

export default function Credits(){
    return(
        <div id="credits">
            <h1> Credits </h1>

            <div className="website">
                <h2> Website Design + Developer </h2>
                <p>
                    <a href="https://alexandriaduellswe.netlify.app/" target="_blank" rel="noreferrer">
                        Alexandria Duell
                    </a>
                </p>
            </div>

            <div className="images">
                <h2> Our Images </h2>
                <p> 
                    All of our images come from our photos from {' '}
                        <a className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    {' '} and {' '}
                        <a className="instagram" href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer"> 
                            Instagram
                        </a>
                    . 
                </p>
                <br/>
                <p>
                    You can find many more candid photos of the animals (and humans) at our facility on our {' '}
                         <a className="facebook" href="https://www.facebook.com/Apex2112EWilliamsSt" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    {' '} and {' '}
                        <a className="instagram" href="https://www.instagram.com/thebiscuitgarden/" target="_blank" rel="noreferrer"> 
                            Instagram
                        </a>
                    {' '} pages. 
                </p>
            </div>

            <div className="icons">
                <h4> Icons </h4>
                <p> We sourced the following icons from Flaticon:</p>

                <a href="https://www.flaticon.com/free-icon/phone-call_2936151?term=phone+call&page=1&position=62&origin=search&related_id=2936151" title="phone call icon" target="_blank" rel="noreferrer"> 
                    <img loading="lazy" src={phoneIcon} width='30' height='30' alt="Mobile phone with flat screen showing a landline phone with signals" />
                </a>

                <a href="https://www.flaticon.com/free-icon/email_555012?term=email&page=1&position=93&origin=search&related_id=555012" title="email icon" target="_blank" rel="noreferrer"> 
                    <img loading="lazy" src={emailIcon} width='30' height='30' alt="paper with an at symbol inside an unsealed envelope" /> 
                </a>

                <a href="https://www.flaticon.com/free-icon/facebook_5968764?term=facebook&page=1&position=9&origin=search&related_id=5968764" title="facebook icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={fbIcon} width='30' height='30' alt='an f encircled in blue' />
                </a>

                <a href="https://www.flaticon.com/free-icon/instagram_2111463?term=instagram&related_id=2111463" title="instagram logo icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={instaIcon} width='30' height='30' alt='a camera in a yellow to pink gradient' />
                </a>

                <a href="https://www.flaticon.com/free-icon/tik-tok_3046121?term=tiktok&page=1&position=2&origin=search&related_id=3046121" title="tiktok icon" target="_blank" rel="noreferrer">
                    <img loading="lazy" src={tiktokIcon} width='30' height='30' alt='a t that looks like a quarter note in black with blue and red shadows' />
                </a>
            </div>
        </div>
    )
}
