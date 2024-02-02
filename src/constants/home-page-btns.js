//Font Awesome: 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBaseball,
    // faBowlFood, faCarSide, faDog, faBone, faPaw, faSchoolFlag,
    //  faScissors, faShieldDog, faShop, 
    faHouse,
     faShower} from '@fortawesome/free-solid-svg-icons'

export let home_btns = [
    {
        title: 'boarding',
        icon: <FontAwesomeIcon icon={faHouse} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    },
    {
        title: 'daycare',
        icon: <FontAwesomeIcon icon={faBaseball} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    },
    {
        title: 'grooming',
        icon: <FontAwesomeIcon icon={faShower} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    }
]