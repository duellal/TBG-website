import React from "react";
import { Text, View } from '@react-pdf/renderer';

//Styles:
import { styles } from "../new-owner-styles";


export default function ownerSect(formData, ownerCount){
    return ownerCount.map((__, index) => 
    <View 
        key={`owner${index + 1}`}
        style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
    >
        <Text style={styles.numbered_title}>
            Owner {index + 1}
        </Text>
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.bold]}>
                    Name 
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_first_name`]} {formData[`owner${index + 1}_last_name`]} 
                </Text>
            </View>
                        
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.bold]}>
                    Phone Number
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_phone`]}                    
                </Text>
            </View>
        </View>
                    
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.bold]}>
                    Email
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_email`]}
                </Text>
            </View>
            
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.bold]}>
                    Address
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_address1`]}
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_address2`]}
                </Text>
                <Text style={styles.section_info}>
                    {`${formData[`owner${index + 1}_city`]}, ${formData[`owner${index + 1}_state`]} ${formData[`owner${index + 1}_zipcode`]}`}
                </Text>
            </View>
        </View>
    </View>
)
}