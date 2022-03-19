import "./toggle.css";
import Outrun from '../../images/outrun.png'
import Vapourwave from '../../images/vapourwave.png'
import { useContext } from "react";
import { ThemeContext } from "../../context";
export default function Toggle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };
    return (
        <div className="tg">
            <img src={Vapourwave} alt="" className="tg-icon" />
            <img src={Outrun} alt="" className="tg-icon" />
            <div
                className="tg-button"
                onClick={handleClick}
                style={{ left: theme.state.outrun ? 32 : 0 }}
            ></div>
        </div>
    )
}
