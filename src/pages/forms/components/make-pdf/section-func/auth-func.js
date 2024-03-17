import React from "react";
import { Text, View } from '@react-pdf/renderer';

//Styles:
import { styles } from "../new-owner-styles";


export default function authSect(formData, authCount){
    return authCount.map((__, index) =>
        <View 
            key={`emergency${index + 1}`}
            style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
        >
            <Text style={styles.numbered_title}>
                Person {index + 1}
            </Text>
            <View style={styles.view_row}>
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Name 
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`auth${index + 1}_name`]}
                    </Text>
                </View>

                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Relation
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`auth${index + 1}_relation`]}
                    </Text>
                </View>
                            
                <View style={styles.view_col}>
                    <Text style={[styles.section_info, styles.bold]}>
                        Phone Number
                    </Text>
                    <Text style={styles.section_info}>
                        {formData[`auth${index + 1}_phone`]}                    
                    </Text>
                </View>
            </View>
        </View>
    )
} 

