//Font Awesome: 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, 
    // faCarSide, faDog, faBone, faPaw, 
    faSchoolFlag,
    //  faScissors, faShieldDog, faShop, 
     faShower} from '@fortawesome/free-solid-svg-icons'

export let home_btns = [
    {
        title: 'boarding',
        icon: <FontAwesomeIcon icon={faBowlFood} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    },
    {
        title: 'daycare',
        icon: <FontAwesomeIcon icon={faSchoolFlag} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    },
    {
        title: 'grooming',
        icon: <FontAwesomeIcon icon={faShower} size="2xl" />,
        info: 'Some description here. Some description here. Some description here.'
    }
]