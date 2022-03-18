import './navbar.css'

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"nb " + (menuOpen && "active-nb")}>
            <div className="wrapper">
                <div className="left">
                    {/* <a href="#intro" className="logo">
                        genius.
                    </a> */}
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
