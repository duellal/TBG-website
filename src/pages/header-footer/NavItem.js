import React from "react";

//styles
import { Item } from '../../styles/nav-item'

export default function NavItem({ url, navigateToUrl, title, }) {
    return (
        <Item onClick={() => navigateToUrl(url)}>
            {title}
        </Item>
    )
}