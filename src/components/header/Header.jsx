import React from 'react';
import HeaderItem from '../header-item/HeaderItem';
import './Header.scss'

const Header = () => {

    return (
        <>
            <header className="header">
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <HeaderItem href="#about" text="About" />
                        <HeaderItem href="#skills" text="Skills" />
                        <HeaderItem href="#portfolio" text="Portfolio" />
                        <HeaderItem href="#education" text="Education" />
                        <HeaderItem href="#contact" text="Contact" />
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header