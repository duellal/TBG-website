/* 
ALL pages have an expanded different photo - same like header below the nav bar
    Make long text boxes shorter (less width)
*/

/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

//Error 404 Styles:
import { 
    Err404H1, Err404Section,
    Err404Belly, Err404p,
    Err404TextDiv, Err404Button
 } from "../styles/err404.js";

//import Components:
import Header from './header-footer/header.js';
import Footer from './header-footer/footer.js';

//Images:
import bellyScratch from '../images/error-page/err404-belly-scratch.jpeg'


export default function Err404(){
    let navigate = useNavigate()
    
    return(
        <>
        <Header />
        <Err404Section id="err404">
            <Err404TextDiv> 
                <Err404H1> 
                    Oh no! We tried fetching what you threw at us, but we lost it... 
                </Err404H1>
                <Err404p> 
                    There is a possibility that a dog took it and isn't giving it back. 
                </Err404p>
                <Err404p> 
                    Please enjoy some belly scritches while you're here!
                </Err404p>
            </Err404TextDiv>

            <Err404Belly src={bellyScratch} alt='' />

            <Err404TextDiv>
                <Err404p>
                    When you're done, click the button below to go back.
                </Err404p>
                <Err404Button onClick={() => navigate(-1)}> 
                    Retrieve Previous Page
                </Err404Button>
            </Err404TextDiv>
        </Err404Section>
        <Footer />
        </>
    )
}