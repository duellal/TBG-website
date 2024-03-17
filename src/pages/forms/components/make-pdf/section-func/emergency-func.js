import React from "react";
import { Text, View } from '@react-pdf/renderer';

//Styles:
import { styles } from "../new-owner-styles";


export default function emergencySect(formData, emergencyCount){
    return emergencyCount.map((__, index) =>
        <View 
            key={`emergency${index + 1}`}
            style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
        >
            <Text style={styles.numbered_title}>
                Emergency Contact {index + 1}
            </Text>
            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Name 
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`emergency${index + 1}_name`]}
                    </Text>
                </View>
                            
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Phone Number
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`emergency${index + 1}_phone`]}                    
                    </Text>
                </View>
            </View>
                        
            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Relation
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`emergency${index + 1}_relation`]}
                    </Text>
                </View>
                
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Permission to Make Decisions
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`emergency${index + 1}_permission`]}
                    </Text>
                </View>
            </View>
        </View>
    )
}