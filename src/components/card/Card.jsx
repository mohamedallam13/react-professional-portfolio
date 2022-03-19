import './card.css'

export default function Card({ title, img, link }) {
    console.log(img=="")

    return (
        <div className="c">
            <div className="c-browser">
                <div className="c-circles">
                    <div className="c-circle" style={{ backgroundColor: "#FF605C" }}></div>
                    <div className="c-circle" style={{ backgroundColor: "#FFBD44" }}></div>
                    <div className="c-circle" style={{ backgroundColor: "#00CA4E" }}></div>
                </div>
                <div className="c-title">
                    <p>{title}</p>
                </div>
            </div>

            <a href={link} target="_blank">
                <img src={require("../../images/" + img)} alt="" className="c-img" />
            </a>
        </div>
    );
};
