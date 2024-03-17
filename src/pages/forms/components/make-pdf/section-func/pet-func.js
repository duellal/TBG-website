import React from "react";
import { Text, View } from '@react-pdf/renderer';

//Styles:
import { styles } from "../new-owner-styles";

//Variables:
import { behaviorQs } from "../../sections/pet/pet-questions";
import { healthQs } from "../../sections/pet/pet-questions";


export default function petSect(formData, countPets){ 
    return countPets.map((__, index) => 
        <View 
            key={`pet${index + 1}`}
            style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
        >
            <Text style={styles.numbered_title}>
                Pet {index + 1}
            </Text>
            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Name 
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_name`]}
                    </Text>
                </View>
                            
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Species
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_species`]}                    
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Breed
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_breed`]}                    
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Color
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_color`]}                    
                    </Text>
                </View>
            </View>
                        
            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Sex
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_sex`]}
                    </Text>
                </View>
                
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Altered
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`pet${index + 1}_altered`]}
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Weight
                    </Text>
                    <Text style={styles.section_info}>
                        {`${formData[`pet${index + 1}_weight`]} lbs`}
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Date of Birth
                    </Text>
                    <Text style={styles.section_info}>
                        {
                            formData[`pet${index + 1}_dob`] !== ''
                            ? 
                            formData[`pet${index + 1}_dob`]
                            :
                            'N/A'
                        }
                    </Text>
                </View>
            </View>

            {/* Behavior Section */}
            <View style={[styles.view_row, styles.sub_section]}>
                <Text>
                    Behavioral Information
                </Text>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`1) ${behaviorQs[0]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_destructive`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_destructive`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_destructive_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`2) ${behaviorQs[1]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_fence`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_fence`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_fence_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`3) ${behaviorQs[2]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_guard`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_guard`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_guard_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`4) ${behaviorQs[3]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_social`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_social`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_social_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`5) ${behaviorQs[4]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_kennel`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_kennel`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_kennel_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`6) ${behaviorQs[5]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {
                            formData[`pet${index + 1}_extra_behavior`] ?
                            formData[`pet${index + 1}_extra_behavior`]
                            : 'N/A'
                        }
                    </Text>
                </View>
            </View>

            {/* Health Section */}
            <View style={[styles.view_row, styles.sub_section]}>
                <Text>
                    Health Information
                </Text>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Vetinary Hospital
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_vet`]}
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Vet Phone Number
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_vet_phone`]}
                    </Text>
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`1) ${healthQs[0]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_food_allergy`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_food_allergy`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_food_allergy_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`2) ${healthQs[1]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_medical_condition`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_medical_condition`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_medical_condition_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`3) ${healthQs[3]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_past_injury`]}
                    </Text>

                    {
                        formData[`pet${index + 1}_past_injury`] === 'Yes' ?
                        <>
                        <Text style={[styles.section_info, styles.explain_text]}>
                            Please Explain
                        </Text>
                        <Text style={[styles.section_info, styles.pet_ans]}>
                            {formData[`pet${index + 1}_past_injury_explain`]}
                        </Text>
                        </>
                        : null
                    }
                </View>
            </View>

            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info]}>
                        {`4) ${healthQs[4]}`}
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {
                            formData[`pet${index + 1}_extra_medical`] ?
                            formData[`pet${index + 1}_extra_medical`] 
                            : 'N/A'
                        }
                    </Text>
                </View>
            </View>
        </View>
    )
}