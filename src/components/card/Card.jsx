import './card.css'

export default function Card({ link, img }) {
    return (
        <div className="c">
            <div className="c-browser">
                <div className="c-circle"></div>
                <div className="c-circle"></div>
                <div className="c-circle"></div>
            </div>
            <a href="" target="_blank" rel="noreferrer">
                <img src="" alt="" className="p-img" />
            </a>
        </div>
    );
};
