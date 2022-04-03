import './contact.css'
import { ThemeContext } from "../../context";
import { useContext } from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import FormInput from "../formInput/FormInput";

import {
    allInfo
} from "../../allInfo";

const { contacts } = allInfo;

const EMAIL_PATTERN = `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`

const FORM_INPUTS = [
    {
        id: 1,
        name: "user_name",
        type: "text",
        placeholder: "Name",
        errorMessage: "Required Field",
        required: true,
    },
    {
        id: 2,
        name: "user_subject",
        type: "text",
        placeholder: "Subject",
        errorMessage: "Required Field",
        required: true,
    },
    {
        id: 3,
        name: "user_email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Please provide a valid Email Address",
        pattern: EMAIL_PATTERN,
        required: true,
    },
    {
        id: 4,
        name: "message",
        type: "text-area",
        rows: 5,
        placeholder: "Message",
        errorMessage: "Required Field",
        required: true,
    }
]
export default function Contact() {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const outrun = theme.state.outrun;
    const [done, setDone] = useState(false);
    const [values, setValues] = useState({
        user_name: "",
        user_subject: "",
        user_email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formRef.current)
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
                    e.target.reset()
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    };

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
                        {FORM_INPUTS.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                outrun={outrun}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <button>Submit</button>
                        {done && "Your message has been submitted!"}
                    </form>
                </div>
            </div>
        </div>
    )
}
