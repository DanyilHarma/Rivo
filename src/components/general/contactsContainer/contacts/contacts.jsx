import { useForm } from "react-hook-form";
import classes from "./contacts.module.scss";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "./inputField/inputField";
import MakeButton from "../../../header/navigation/makeOrderButton/makeOrderButton";

const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <InputField name="Name" placeholder="Type your name here" register={register} errors={errors} />
            <InputField name="Email" type="email" placeholder="Type your email here" register={register} errors={errors} />
            <InputField name="Phone" placeholder="Type your phone here" register={register} errors={errors} />
            <InputField name="Message" placeholder="Type your message here" register={register} errors={errors} />
            <MakeButton text="SEND MESSAGE" />
        </form>
    );

}

export default Contacts;