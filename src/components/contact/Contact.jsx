import './contact.css'
import { ThemeContext } from "../../context";
import { useContext } from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


export default function Contact({ contacts }) {

    const theme = useContext(ThemeContext);
    const outrun = theme.state.outrun;
    const formRef = useRef();
    const [done, setDone] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_t56l6am",
                "template_7vfhqx8",
                formRef.current,
                "p21b-cgK9stAjae-8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }


    return (
        <div className="ct" id="ct">
            <div className="ct-bg"></div>
            <div className="ct-wrapper">
                <div className="ct-left">
                    <h1 className="ct-title">Let's discuss your project</h1>
                    <div className="ct-info">
                        {contacts.map((contact) => (
                            <div className="ct-info-item">
                                <a href={contact.hyperlink} className="ct-link">
                                    <img src={require("../../images/" + contact.img)} alt="" className="ct-icon" />
                                    <p>{contact.text}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ct-right">
                    <p className="ct-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: outrun && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: outrun && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: outrun && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: outrun && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    )
}
