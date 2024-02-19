import { useEffect, useState } from "react";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
import PdfDoc from "./new-owner-pdf";

//To try to name the PDF if downloaded
export default function PDFViewer2(props){
    const { formData, formHTML, filename } = props

    const [pdfInstance, updatePdfInstance] = usePDF({document: <PdfDoc formData={formData} formHTML={formHTML}/>})
    const [url, editUrl] = useState()

    useEffect(() => {
        if(pdfInstance.blob){
            updatePdfInstance(<PdfDoc formData={formData} formHTML={formHTML}/>)

            editUrl(
                URL.createObjectURL(
                    new File([pdfInstance.url], filename, {
                        type: pdfInstance.blob.type
                    })
                )
            )
        }
    }, [pdfInstance, filename, formData, formHTML, updatePdfInstance])

    return url
}