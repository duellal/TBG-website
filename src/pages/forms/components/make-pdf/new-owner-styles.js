import { Font, StyleSheet } from '@react-pdf/renderer'
//Fonts:
import RegRoboto from './Roboto/Roboto-Regular.ttf'
import BoldRoboto from './Roboto/Roboto-Bold.ttf'

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
        fontSize: '24px',
        fontWeight: 'bold',
    },
    header_logo: {
        margin: '-20px 0 20px',
        justifyContent: 'center',
        // border: '1px solid black'
    },
    header_view: {
        justifyContent: 'center',
        width: '100%',
        // border: '1px solid purple'
    },
    logo: {
        width: "15%",
        marginLeft: 'auto',
        marginRight: 'auto',
        // border: '1px solid orange',
    },
    section: {
        marginBottom: '10px'
    },
    section_title: {
        fontWeight: 'bold',
        fontSize: '18px',
    },
    view_row: {
        flexDirection: "row",
        width: '100%',
        margin: '5px 0'
        // border: '1px solid red',
    },
    view_col: {
        flexDirection: "column", 
        flex: 1, 
        margin: '0 2.5px'
    },
    info_title: {
        fontWeight: 'bold',
    },
    numbered_title: {
        fontSize: '16px',
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
        fontSize: '14px', 
    },
    behave_title: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
    pet_ans: {
        marginLeft: '25px'
    },
    page_number: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
})