import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "menu-active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#i">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#a">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#p">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#t">Technologies</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#ct">Contact</a>
                </li>
            </ul>
        </div>
    );
}