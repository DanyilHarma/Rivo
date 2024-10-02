import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./contacts.module.scss";
import { schema } from "./schema";
import InputField from "./inputField/inputField";
import MakeButton from "../../../header/navigation/makeOrderButton/makeOrderButton";
import FileInput from "./fileInput/fileInput";
import { useSendContactsFormMutation } from "../../../../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../../redux/reducers/formDataReducer";

const Contacts = () => {
    const dispatch = useDispatch()
    const {
        control,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [sendContactsForm] = useSendContactsFormMutation();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await sendContactsForm(data).unwrap();
            const { file, ...dataWithoutFile } = data;
            dispatch(setFormData(dataWithoutFile));
            navigate("/response/success")
        } catch (err) {
            navigate("/response/error")
            console.error("Ошибка при отправке формы:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <InputField
                        {...field}
                        errors={errors}
                        touchedFields={touchedFields}
                        title="Name"
                        placeholder="Type your name here"
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <InputField
                        {...field}
                        errors={errors}
                        touchedFields={touchedFields}
                        title="Email"
                        placeholder="Type your email here"
                        type="email"
                    />
                )}
            />
            <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <InputField
                        {...field}
                        errors={errors}
                        touchedFields={touchedFields}
                        title="Phone"
                        placeholder="Type your phone here"
                    />
                )}
            />
            <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <InputField
                        {...field}
                        errors={errors}
                        touchedFields={touchedFields}
                        title="Message"
                        placeholder="Type your message here"
                    />
                )}
            />
            <Controller
                name="file"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <FileInput
                        {...field}
                        errors={errors}
                        title="Attach file"
                        placeholder="Attach your file here"
                    />
                )}
            />
            <MakeButton text="SEND MESSAGE" isForm={true} />
        </form>
    );
};

export default Contacts;
