import './intro.css'
import pp1 from '../../images/pp1.png'

import MouseSVG from '../mouseSVG/MouseSVG';

import { ThemeContext } from "../../context";
import { useContext } from "react";

import {
    allInfo
} from "../../allInfo";

const { name, professions, intro } = allInfo;

export default function Intro() {
    const theme = useContext(ThemeContext);
    const outrun = theme.state.outrun;

    return (
        <div className="i" id="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">{name}</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            {professions.map((profession) => (
                                <div className="i-title-item">{profession}</div>
                            ))}
                        </div>
                    </div>
                    <p className="-desc">
                        {intro}
                    </p>
                </div>
                {/* SVG Start */}
                <MouseSVG />
                {/* SVG End */}
            </div>
            <div className="i-right">
                <div className={"i-bg" + (outrun ? " outrun-sun" : " vapour-sun")} ></div>
                <img src={pp1} alt="" className="i-img" />
            </div>
        </div>
    )
}
