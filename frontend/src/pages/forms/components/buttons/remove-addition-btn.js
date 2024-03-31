
// AFTER MVP
import React from "react";

//Functions:
import capitalizeWord from "../../../general-components/capitalize-word"

//Styles:
import { FormBtn } from "../../../../styles/owner-form";
import removeSection from "../sections/components/remove-section";


/**
 * @component Button for removing additional section, and it asks if the user wants to delete it
 * @param {*} props
 */
export default function RemoveAddSection(props){
    const { formData, key, setKey, sectionId, count, setCount } = props

    //
    const sectionTitle = (id) => {
        let title = id.split('_')[0]
        return capitalizeWord(title)
    }

    let title = sectionTitle(sectionId)


    // AFTER MVP
        // Needs to remove an ambiguous sectione
    function remove(event) {
        event.preventDefault();
        setKey(key - 1);

        if (typeof count === 'number') {
            setCount(count - 1);
        }
        else {
            count.pop();
            setCount(...count);
        }

        return removeSection({ formData, section: `${title}`, btn: true });
    }


    return (
        <>
            <FormBtn 
                key={`remove_${title}_${key}`}
                onClick={event => remove(event)} 
                name='remove_section_btn'
            >
                Remove {title} {key}
            </FormBtn>
        </>
    )
}
