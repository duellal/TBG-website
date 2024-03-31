import React from "react";
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

//Functions for the iterable PDF sections:
import authSect from "./section-func/auth-func";
import emergencySect from './section-func/emergency-func'
import ownerSect from './section-func/owner-func'
import petSect from "./section-func/pet-func";

//Logo:
import logo from '../../../../images/logo/TBG-logo.png'

//Styles:
import { styles } from "./new-owner-styles";


//PDF Doc
export default function PdfDoc(props){
    const { formData, ownerCount, emergencyCount, authCount, countPets, pdfName } = props

    let today = new Date()

    return (
        <Document title={pdfName}>
            <Page size='A4' style={styles.page}>
                {/* Header - Logo + Title of Form */}
                <View style={styles.header_logo}>
                    <Image src={logo} style={styles.logo}/>
                    <View style={styles.header_view}>
                        <Text style={styles.header}>
                            New Owner Form
                        </Text>
                    </View>
                </View>

                {/* Referral */}
                <View style={[styles.view_row, styles.section]}>
                    <View style={styles.view_col}>
                        <Text style={[styles.section_info, styles.bold]}>
                            How did you hear about us?
                        </Text>
                        <Text style={styles.section_info}>
                            {formData['referred_by']}
                        </Text>
                    </View>
                </View>
                
                {/* Owner(s) */}
                <View>
                    <Text style={styles.section_title}>
                        Owner(s) Information 
                    </Text>

                    {
                        ownerCount.length > 0 ? ownerSect(formData, ownerCount) : null
                    }
                </View>

                 {/* Emergency Contact(s) */}
                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Emergency Contact(s)
                    </Text>

                    {
                        emergencyCount.length > 0 ? emergencySect(formData, emergencyCount) : null
                    }
                </View>

                {/* Authorized Pickup */}
                    {/* Only shows if there is at least 1 */}
                {  
                    formData['auth1_name'] ?
                    <View style={styles.section}>
                        <Text style={styles.section_title}>
                            People Authorized to Pickup
                        </Text>
                    
                        {
                            authCount  ?
                            authSect(formData, authCount) : null
                        }
                    </View>
                    : null
                }

                {/* Pet(s) */}
                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Pet(s) Information 
                    </Text>

                    {
                        countPets.length > 0 ? petSect(formData, countPets) : null
                    }
                </View>

                {/* Liability Waiver */}
                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Waivers
                    </Text>

                    {/* <View style={styles.view_row}> */}
                        <View style={[styles.section]}>
                            <Text style={styles.sub_section}>
                                Liability Waiver
                            </Text>

                            <View style={styles.view_row}>
                                <View style={styles.view_col}>
                                    <Text style={[styles.section_info, styles.bold]}>
                                        Agreed to terms?
                                    </Text>
                                    <Text style={[styles.section_info]}>
                                        {
                                            formData[`liability_owner_acknowledgement`] === 'true'
                                            ? 'Yes' : 'No'
                                        }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    {/* </View> */}

                        {/* Cancellation Policy */}
                        {/* <View style={styles.view_row}> */}
                            <View style={[styles.section]}>
                                <Text style={styles.sub_section}>
                                    Cancellation Policy
                                </Text>

                                <View style={styles.view_row}>
                                    <View style={styles.terms_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                            Agreed to terms?
                                        </Text>
                                        <Text style={[styles.section_info]}>
                                            {
                                                formData[`cancel_owner_acknowledgement`] === 'true'
                                                ? 'Yes' : 'No'
                                            }
                                        </Text>
                                    </View>

                                    <View style={styles.initials_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                                Initials:
                                        </Text>
                                    </View>

                                    <View style={styles.view_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                            Grooming
                                        </Text>
                                        <Text style={styles.section_info}>
                                            {formData['grooming_policy_initials'] 
                                            ? formData['grooming_policy_initials'] 
                                            : 'N/A'}
                                        </Text>
                                    </View>

                                    <View style={styles.view_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                            Daycare
                                        </Text>
                                        <Text style={styles.section_info}>
                                            {formData['daycare_policy_initials'] ? formData['daycare_policy_initials'] : 'N/A'}
                                        </Text>
                                    </View>

                                    <View style={styles.view_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                            Boarding
                                        </Text>
                                        <Text style={styles.section_info}>
                                            {
                                                formData['boarding_policy_initials']
                                                ? formData['boarding_policy_initials'] 
                                                : 'N/A'
                                            }
                                        </Text>
                                    </View>

                                    <View style={styles.view_col}>
                                        <Text style={[styles.section_info, styles.bold]}>
                                            Modification
                                        </Text>
                                        <Text style={styles.section_info}>
                                            {
                                                formData['change_reservation_policy_initials'] 
                                                ? formData['change_reservation_policy_initials'] 
                                                : 'N/A'}
                                        </Text>
                                    </View>
                                                    
                                </View>
                            </View>
                        </View>
                    {/* </View> */}
                    

                    <View style={styles.view_row}>
                        <View style={styles.view_col}>
                            <Text style={[styles.section_info, styles.bold]}>
                                Owner Digital Signature
                            </Text>
                            <Text style={[styles.section_info]}>
                                {formData[`waiver_owner_name`]}
                            </Text>
                        </View>
                        <View style={[styles.view_col]}>
                            <Text style={[styles.section_info, styles.bold]}>
                                Date
                            </Text>
                            <Text style={[styles.section_info]}>
                            {
                                `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
                            }
                        </Text>
                        </View>
                    </View>
                {/* </View> */}
                
                    
                {/* <Text 
                    style={styles.pageNumber} 
                    render={({pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} 
                    fixed
                /> */}
            </Page>
        </Document>
    )
}
