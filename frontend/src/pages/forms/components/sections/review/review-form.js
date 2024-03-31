import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

//Components: 
import PdfDoc from "../../make-pdf/new-owner-pdf";


export default function ReviewForm(props){
    const { formData, ownerCount, emergencyCount, authCount, countPets, pdfName } = props

    //PDF States:
    let pdfDoc = useState(
        <PdfDoc 
            formData={formData} 
            ownerCount={ownerCount}
            emergencyCount={emergencyCount}
            authCount={authCount}
            countPets={countPets}
        />
    )

    return (
        <>
            <PDFViewer style={{width: '100%', height: '800px'}} title={pdfName} showToolbar={false}>
                {pdfDoc}
            </PDFViewer>
       </>
    )
}