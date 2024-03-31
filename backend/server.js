const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios');
const multer  = require('multer')

dotenv.config()

//Variables
const endpoint = process.env.EMAIL_DOMAIN
const port = process.env.EMAIL_PORT || 4800
const recipient = process.env.EMAIL_RECIPIENT
const sender = process.env.EMAIL_SENDER
const template = process.env.EMAIL_TEMPLATE
const token = process.env.EMAIL_TOKEN

//Setting up to recieve files from FE
const storage = multer.memoryStorage()
const upload = multer({ storage })


const app = express()

app.use('/', express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get(`/api`, (__, res) => {
    res.status(200).json({
        message: `API is running on port ${port}!`
    })
})

app.get(`/api/email-form`, (__, res) => {
    res.status(200).json({
        message: `/api/email-form is running`
    })
})
app.post(`/api/email-form`, upload.single('file'), async (req, res) => {
    let { pdfName, formData } = req.body
    //To get formData information
    formData = JSON.parse(formData)

    let base64pdf = req.file.buffer.toString('base64')

    //For email service:
    const data = {
        from: {
            email: sender,
            name: 'Mailtrap Tests'
        },
        to: [{
            email: recipient
        }],
        template_uuid: template,
        template_variables: {
            'owner': {
                'first_name': `${formData.owner1_first_name}`,
                'last_name': `${formData.owner1_last_name}`    
            },
            'pdf': req.file
        },
        attachments: [
            {
                content: base64pdf, 
                filename: pdfName,
                type: req.file.mimetype
            }]
    }

    //Call for email api to send form:
    return await axios.post(`${endpoint}/api/send`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Api-Token': token
        }
    })
        .then(() => {
            return res.status(200).json({
                message: `Owner form emailed successfully`
            })
        })
        .catch(err =>{
            return res.status(500).json({
                message: `API - error in sending owner form through email`,
                error: err.response.data
            })
        })
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})