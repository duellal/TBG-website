import html2canvas from "html2canvas"

//To get image of the form section for when creating the pdf:
export default function GetImg(html){
    return html2canvas(html)
        .then(canvas => {
            const formImg = canvas.toDataURL('image/png')
            return formImg
        })
    }