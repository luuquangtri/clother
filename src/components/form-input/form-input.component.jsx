import React from 'react';
import "./form-input.styles.scss";
function FormInput(props) {
    const { handleChange, label, ...ortherProps } = props;
    return (
        <div className="group">
            <input type="text" className="form-input" onChange={handleChange} {...ortherProps} />
            {
                label ? (<label className={`${ortherProps.value.length ? 'shrink' : ""} form-input-label`}>
                    {label}
                </label>)
                    : null
            }
        </div>
    );
}

export default FormInput;