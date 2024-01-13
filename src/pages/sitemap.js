/* 
ALL pages have an expanded different photo - same like header below the nav bar
    Make long text boxes shorter (less width)
*/

/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

//Sitemap Styles:
import '../styles/sitemap.css';

//Variables:
import {
    aboutOptions,
    boardingOptions,
    daycareOptions,
    groomingOptions,
    faqOptions
} from './header-footer/menuOptions'

export default function Sitemap(){
    let navigate = useNavigate();

    const scrollToElem = (section) => {
        let elem = document.getElementById(section)
        elem.scrollIntoView()
    }

    let url = async (urlOption) => {
        if(urlOption.includes(`#`)){
            let id = urlOption.split(`#`)[1];
            await navigate(urlOption)
            return scrollToElem(id)
        }
        else{
            navigate(urlOption)
        } 
    }

    return(
        <div id='sitemap'>
            <h1> Sitemap </h1>
            <div id="pages">
                <div className="left">
                    <div className="home">
                        <h2 onClick={() => navigate('/')}>
                            Home
                        </h2>
                    </div>

                    <div className="about">
                        <h2 onClick={() => navigate(`/about`)}>
                            About
                        </h2>  
                        <div className="indent">
                            {aboutOptions.map((option, i) => {
                                return (
                                    <h3 onClick={() => url(option.url)} key={i}> {option.title} </h3>
                                )
                            })} 
                        </div>
                    </div>


                    <div className="forms">
                        <h2 onClick={() => navigate('/forms')}>
                            Forms
                        </h2>
                        <div className="indent">
                            {/* Need to navigate to intake form page */}
                            <h3>
                                Intake Form
                            </h3>
                        </div>
                    </div>

                    <div className="faqs">
                        <h2 onClick={() => navigate(`/faqs`)}>
                            FAQs
                        </h2>  
                        <div className="indent">
                            {faqOptions.map((option, i) => {
                                return (
                                    <h3 onClick={() => url(option.url)} key={i}> {option.title} </h3>
                                )
                            })} 
                        </div>
                    </div>
                </div>

                <div className="services right">
                    <div className="boarding">
                    <h2 onClick={() => navigate(`/boarding`)}>
                            Boarding
                        </h2>  
                        <div className="indent">
                            {boardingOptions.map((option, i) => {
                                return (
                                    <h3 onClick={() => url(option.url)} key={i}> {option.title} </h3>
                                )
                            })} 
                        </div>
                    </div>

                    <div className="daycare">
                    <h2 onClick={() => navigate(`/daycare`)}>
                            Daycare
                        </h2>  
                        <div className="indent">
                            {daycareOptions.map((option, i) => {
                                return (
                                    <h3 onClick={() => url(option.url)} key={i}> {option.title} </h3>
                                )
                            })}
                        </div>
                    </div>

                    <div className="grooming">
                        <h2 onClick={() => navigate(`/grooming`)}>
                            Grooming
                        </h2>  
                        <div className="indent">
                            {groomingOptions.map((option, i) => {
                                return (
                                    <h3 onClick={() => url(option.url)} key={i}> {option.title} </h3>
                                )
                            })} 
                        </div>
                    </div>
                </div>

                <div className="credits">
                    <h2 onClick={() => navigate('/credits')}>
                        Credits
                    </h2>
                </div>
            </div>
        </div>
    )
}