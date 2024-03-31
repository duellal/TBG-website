import axios from "axios"


export default async function emailForm(props){
    const { pdfBlob, pdfName, formData } = props

    let emailData = {
        formData,
        pdfName,
    }

    const sendForm = new FormData()
    const pdfFile =  new File(
            [pdfBlob], 
            pdfName, 
            {
                type: pdfBlob.type
            }
        )
    
    sendForm.append('file', pdfFile)

    Object.keys(emailData).forEach(key => {
        sendForm.append(key, JSON.stringify(emailData[key]))
    })
    
    
    try{
        //Sending form data to BE to send to email service:
        await axios.post(
            `${process.env.REACT_APP_API}/api/email-form`, 
            sendForm,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        .then(response => {
            console.log(`Axios Response:`, response)
        })
        .catch(err => {
            console.log(`Axios Error:`, err)
        })
    }
    catch(err){
        console.log(`Axios - There was an error:`, err)
    }
    
}