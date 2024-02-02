import React from "react";

//styles
import { Item } from '../../styles/nav-item'

export default function NavItem({ url, navigateToUrl, title }) {
    if(title === "About"){
        return (
            <Item onClick={() => navigateToUrl(url)}>
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