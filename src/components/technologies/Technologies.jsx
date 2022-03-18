import './technologies.css'

export default function Technologies({ technologies }) {
    return (
        <div className="t" id="t">
            <div className="t-texts">
                <h1 className="t-title">Technologies & Skills</h1>
                <p className="t-desc">
                    Some of the main technologies I work with
                </p>
            </div>
            <div className="t-list">
                {technologies.map((technology) => (
                    <div className="t-card">

                        {/* <div className="t-card-title">
                            {technology.title}
                        </div> */}


                        <a href="" target="_blank" rel="noreferrer">
                            <img src={require("../../images/" + technology.img)} alt="" className="t-card-img" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
