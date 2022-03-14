import './about.css'
import pp2 from '../../images/pp2.JPG'

export default function About({ education, aboutCatch, aboutParagraph }) {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={pp2}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    {aboutCatch}
                </p>
                <p className="a-desc">
                    {aboutParagraph}
                </p>
                <div className="a-education">
                    {education.map((instit) => (
                        <div className="a-education-wrapper">
                            <img src={require("../../images/" + instit.img)} alt="" className="a-education-img" />
                            <div className="a-education-texts">
                                <h4 className="a-education-title">{instit.institution}</h4>
                                <p className="a-education-desc">
                                    {instit.degree}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
