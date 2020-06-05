import React from "react";

import "./header.css";

const Header = () => {
    return (
        <header className={"header"}>
            <div className="header-logo">
                <a href=""><img src="src/assets/logo.svg" alt="ProjectX logo" className="header-logo__image"/></a>
            </div>
            <nav className="header-navigation">
                <ul className="header-navigation-list">
                    <li className="header-navigation-list__item">
                        <a href="" className="header-navigation-list__item--link">home</a>
                    </li>
                    <li className="header-navigation-list__item">
                        <a href=""className="header-navigation-list__item--link">projects</a>
                    </li>
                    <li className="header-navigation-list__item">
                        <a href="" className="header-navigation-list__item--link">about us</a>
                    </li>
                    <li className="header-navigation-list__item">
                        <a href="" className="header-navigation-list__item--link">past years</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
