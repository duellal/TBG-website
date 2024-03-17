import { Font, StyleSheet } from '@react-pdf/renderer'

//Fonts:
import RegRoboto from './Roboto/Roboto-Regular.ttf'
import BoldRoboto from './Roboto/Roboto-Bold.ttf'

//Variables:
import { bright_red } from '../../../../styles/constants/colors'

//Register Fonts:
Font.register({family: "Roboto", fonts: [
    {src: RegRoboto},
    {src: BoldRoboto, fontWeight: 'bold'}
]})

// Styles:
export const styles = StyleSheet.create({
    page: {
        display: 'flex',
        paddingTop: '40px',
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontFamily: 'Roboto',
    },
    header: {
        textAlign: 'center',
        margin: '10px 0 0',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    header_logo: {
        margin: '-20px 0 20px',
        justifyContent: 'center',
    },
    header_view: {
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        width: "15%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section: {
        marginBottom: '5px'
    },
    section_title: {
        fontWeight: 'bold',
        fontSize: '14px',
        marginTop: '10px',
    },
    view_row: {
        flexDirection: "row",
        width: '100%',
        margin: '5px 0',
    },
    view_col: {
        flexDirection: "column", 
        flex: 1, 
        margin: '0 2.5px'
    },
    initials_col: {
        flexDirection: 'column',
        flex: 0.65,
        alignContent: 'center',
    },
    terms_col: {
        flexDirection: "column", 
        flex: 1.25, 
        margin: '0 2.5px'
    },
    bold: {
        fontWeight: 'bold',
    },
    numbered_title: {
        fontSize: '12px',
        marginTop: '10px',
        fontWeight: 'bold'
    },
    num_section: {
        margin: '0 10px'
    },
    off_color: {
        backgroundColor: '#F0F0F0'
    },
    section_info: {
        fontSize: '12px', 
    },
    explain_text: {
        margin: '5px 0 0 10px'
    },
    sub_section: {
        fontSize: '13px',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    pet_ans: {
        marginLeft: '25px'
    },
    page_number: {
        position: 'absolute',
        fontSize: '12',
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    download: {
        fontSize: '1.8rem',
        margin: '40px 15px',
        padding: '5px 10px',
        alignItems: 'center',
        backgroundColor: bright_red,
        cursor: `pointer`,
        border: `1px solid ${bright_red}`,
        boxShadow: '0 0 8px 1px black',
        color: `white`,
    }
})