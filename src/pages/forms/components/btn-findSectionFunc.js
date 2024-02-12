export default function findSection(sectionHTML, formHTML, setFormHTML, btnIndex, sectionId){
    if(sectionHTML === null){
        return 
    }

    if(formHTML.length > 0 && formHTML[btnIndex]){
        let editFormHTML = formHTML.map((section, index) => {
            if(formHTML[index].includes(sectionId)){
                section = sectionHTML
                return section
            }
            return section
        })

        return setFormHTML(editFormHTML)
    }
    
    return setFormHTML([...formHTML, sectionHTML])
}