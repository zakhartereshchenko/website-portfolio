import React from 'react'
import './HeaderItem.scss'

const HeaderItem = ({ href, text }) => {
    return (
        <li className="header__menu-item">
            <a href={href} className="header__menu-link">{text}</a>
        </li>
    )
}

export default HeaderItem