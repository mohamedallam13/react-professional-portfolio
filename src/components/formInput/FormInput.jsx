import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { outrun, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            {inputProps.type != "text-area" ?
                <input
                    {...inputProps}
                    style={{ backgroundColor: outrun && "#333" }}
                    onChange={onChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                :
                <textarea
                    {...inputProps}
                    style={{ backgroundColor: outrun && "#333" }}
                    onChange={onChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
            }
            <span className="contactErrorSpan">{errorMessage}</span>
        </div>
    );
};

export default FormInput;