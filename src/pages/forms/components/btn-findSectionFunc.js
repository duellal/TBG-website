import GetImg from "./make-pdf/get-component-img"

export default async function findSection(sectionHTML, formHTML, setFormHTML, btnIndex, sectionId){
    //Fail safe in case there is no html:
    // if(sectionHTML === null){
    //     return 
    // }

    // let id = document.getElementById(sectionId)

    // //Checking if the form html has changed and if so, replacing the current state with the new state:
    // if(formHTML.length > 0 && formHTML[btnIndex]){
    //     //Setting a new array to contain the new addition(s):
    //     let editFormHTML = formHTML.map(async (section, index) => {
    //         if(formHTML[index] && formHTML[index].sectionId.includes(sectionId)){
    //             section = { 
    //                 sectionId: sectionId,
    //                 html: sectionHTML,
    //                 imgData: await GetImg(id)
    //             }
    //             return section
    //         }
    //         return section
    //     })

    //     //Setting the state of the formHTML to the editted version:
    //     return setFormHTML(editFormHTML)
    // }
    
    // //Setting the state of the formHTML:
    // setFormHTML([...formHTML, { 
    //     sectionId: sectionId, 
    //     html: sectionHTML,
    //     imgData: await GetImg(id)
    // }])

    return
}