import './navbar.css'
import { useState } from 'react';

export default function Navbar({ menuOpen, setMenuOpen }) {
    const [navBarNameVisible, setNavBarNameVisible] = useState(false);

    const changeNavbarNameVisibility = () => {
        console.log(window.scrollY )
        if (window.scrollY >= 80) {
            setNavBarNameVisible(true);
        } else {
            setNavBarNameVisible(false);
        }
    }

    window.addEventListener('scroll', changeNavbarNameVisibility)

    return (
        <div className={"nb " + (menuOpen && "active-nb")}>
            <div className="wrapper">
                <div className="left">
                    <a style={{ display: navBarNameVisible ? "block" : "none" }} href="#intro" className="logo">
                        Mohamed Allam
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
