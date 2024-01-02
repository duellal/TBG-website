import React from "react";

//styles
import { DropDownContent, DropDownLink, Item } from '../../styles/nav-item'

export default function NavItem({ options, url, title }) {
    return (
        <Item>
            <button className="dropbtn" onClick={() => url(`/about`)}>
                {title}
            </button>
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