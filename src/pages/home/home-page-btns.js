//Font Awesome: 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBaseball, faHouse, faShower} from '@fortawesome/free-solid-svg-icons'

export let home_btns = [
    {
        title: 'boarding',
        icon: <FontAwesomeIcon icon={faHouse} size="2xl" />,
        info: 'All inclusive overnight care for your pet'
    },
    {
        title: 'daycare',
        icon: <FontAwesomeIcon icon={faBaseball} size="2xl" />,
        info: 'Fun and exercise for your pet during the day'
    },
    {
        title: 'grooming',
        icon: <FontAwesomeIcon icon={faShower} size="2xl" />,
        info: 'Keeping your pet clean and fresh'
    }
]