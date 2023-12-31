/* eslint-disable react/prop-types */
import React from "react";

//Error 404 Styles:
import '../styles/error404.js';

//import Components:
import Header from './header-footer/header';
import Footer from './header-footer/footer';

export default function Error404(){
    
    return(
        <>
        <Header />
        <div id="err404">
            <h1> Error: Not Found </h1>
        </div>
        <Footer />
        </>
    )
}