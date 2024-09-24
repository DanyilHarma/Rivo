import classes from "./inputField.module.scss";

const InputField = ({ name, type = "text", placeholder, register, errors }) => {
    const isError = !!errors[name];
    const isValid = !errors[name];

    return (
        <div className={classes.inputWrapper}>
            <span className={classes.inputLabel}>{name}</span>
            <input type={type} name={name} placeholder={placeholder} {...register(name)} className={`${isError ? classes.error : ""} ${isValid ? classes.valid : ""}`} />
            {isError && (<div className={classes.errorMessage}><span>{errors[name]?.message}</span><img src="http://localhost:1338/uploads/Info_icon_9df4e366d8.png?updatedAt=2024-09-24T14%3A30%3A42.084Z" /></div>)}
        </div>
    );
}

export default InputField;