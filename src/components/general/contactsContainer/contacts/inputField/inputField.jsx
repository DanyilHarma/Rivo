import React from "react";
import classes from "./inputField.module.scss";

const InputField = React.forwardRef(({ name, value, onChange, onBlur, type = "text", placeholder, errors, title, touchedFields }, ref) => {
    const isError = !!errors[name];
    const isTouched = !!touchedFields[name];
    const isValid = !errors[name] && isTouched;

    return (
        <div className={classes.inputWrapper}>
            <span className={classes.inputLabel}>{title}</span>
            <input
                ref={ref}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`${isError ? classes.error : ""} ${isValid ? classes.valid : ""}`}
            />
            {isError && (
                <div className={classes.errorMessage}>
                    <span>{errors[name]?.message}</span>
                    <img src="http://localhost:1338/uploads/Info_icon_9df4e366d8.png?updatedAt=2024-09-24T14%3A30%3A42.084Z" alt="Error icon" />
                </div>
            )}
        </div>
    );
});
InputField.displayName = "InputField";
export default InputField;
