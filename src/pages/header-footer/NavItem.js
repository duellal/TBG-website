import React from "react";

//styles
import { Item } from '../../styles/nav-item'

export default function NavItem({ url, navigateToUrl, title }) {
    if(title === "Home"){
        <Item id="drop-menu" onClick={() => navigateToUrl(url)}>
            {title}
        </Item>
    }
    else if(title === "About"){
        return (
            <Item id="dropdown-content" onClick={() => navigateToUrl(url)}>
                About Us
            </Item>
        )
    }
    return (
        <Item onClick={() => navigateToUrl(url)}>
            {title}
        </Item>
    )
}