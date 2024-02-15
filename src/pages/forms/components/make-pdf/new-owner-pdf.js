import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Styles:
const styles = StyleSheet.create({
    page: {
        
    },
    section: {

    },
    viewer: {
        width: window.innerWidth /2, 
        height: window.innerHeight
    }

})

export default function PdfDoc(){
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text break>

                </Text>
                <Text break>

                </Text>
                <Text break>

                </Text>
                <Text break>

                </Text>
                <Text break>

                </Text>
            </Page>
        </Document>
    )
}
