import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//styles
import { DropDownContent, DropDownLink, Item, ItemButton, MobileArrow } from '../../styles/nav-item'

export default function NavItem({ options, url, title, isMobile = false }) {

    return (
        <Item>
            <ItemButton className="dropbtn" onClick={() => url(`${url}`)}>
                {title} {isMobile && options.length > 0 && <MobileArrow><FontAwesomeIcon icon={faAngleDown} /></MobileArrow>}
            </ItemButton>
            <DropDownContent>
                {options.map((option, i) => {
                    return (
                        <DropDownLink href={option.url} onClick={() => url(option.url)} key={i}> {option.title} </DropDownLink>
                    )
                })}
            </DropDownContent>
        </Item>
    )
}