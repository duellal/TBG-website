    //Removes the key/value from the formData object:
    let removeSection = (props) => {
        const { formData, section, btn } = props

        if(btn){
            for (const key of Object.keys(formData)){
                if(key.includes(section)){
                    delete formData[key]
                }
            }

            return
        }

        return delete formData[section]
    }

    export default removeSection