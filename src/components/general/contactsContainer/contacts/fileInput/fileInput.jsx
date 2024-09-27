import React, { useState } from "react";
import classes from "./fileInput.module.scss";

const FileInput = React.forwardRef(({ name, value, onChange, placeholder, errors, title }, ref) => {
    const [fileName, setFileName] = useState("")

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : "");
        onChange(file || null);
    };

    const isError = !!errors[name];
    const isValid = !errors[name];

    return (
        <div className={classes.fileInputWrapper}>
            <span>{title}</span>
            <input ref={ref} type="file" id="file" name={name} placeholder={placeholder} onChange={handleFileChange} />
            <div className={classes.fileInputContent}>
                <span className={`${fileName ? classes.fileName : classes.placeholder}`} htmlFor="file">{fileName || placeholder}</span>
                {isError ? null
                    : <label className={classes.inputLabel} htmlFor="file"><img src="http://localhost:1338/uploads/attachment_1_9ac535ac23.png?updatedAt=2024-09-25T09%3A35%3A51.784Z" alt="" /></label>}
            </div>
            {isError && (<div className={classes.errorMessage}><span>{errors[name]?.message}</span><img src="http://localhost:1338/uploads/Info_icon_9df4e366d8.png?updatedAt=2024-09-24T14%3A30%3A42.084Z" /></div>)}
        </div>
    );
})
FileInput.displayName = "FileInput";
export default FileInput;