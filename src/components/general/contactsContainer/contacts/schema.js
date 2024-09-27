import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Email must be a valid email")
        .required("Email is required"),
    phone: yup
        .string()
        .matches(/^\+?[0-9\s-]{10,15}$/, "Phone number is not valid")
        .required("Phone number is required"),
    file: yup.mixed()
        .nullable()
        .notRequired()
        .test("fileSize", "The file is too large", (value) => {
            if (!value) return true;
            return value.size <= 1024 * 1024;
        })
        .test("fileFormat", "Unsupported format", (value) => {
            if (!value) return true;
            return ["image/jpeg", "image/png"].includes(value.type);
        }),
    message: yup.string().required("Message is required")
})