import './contact.css'
const darkMode = false
const done = 'done'
const handleSubmit = () => {

}

export default function Contact({ contacts }) {


    return (
        <div className="ct" id="ct">
            <div className="ct-bg"></div>
            <div className="ct-wrapper">
                <div className="ct-left">
                    <h1 className="ct-title">Let's discuss your project</h1>
                    <div className="ct-info">
                        {contacts.map((contact) => (
                            <div className="ct-info-item">
                                <img src={require("../../images/" + contact.img)} alt="" className="ct-icon" />
                                <a href={contact.hyperlink} className="ct-link">{contact.text}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ct-right">
                    <p className="ct-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form >
                        <input type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    )
}
