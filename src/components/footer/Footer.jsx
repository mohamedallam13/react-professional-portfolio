import './footer.css'
import asth from '../../images/asth.png'
import outrunPic from '../../images/retro.jpeg'
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function Footer() {
    const theme = useContext(ThemeContext);
    const outrun = theme.state.outrun;
    return (
        <div className="f">
            <img src={outrun ? outrunPic : asth} alt="" />
        </div>
    )
}
