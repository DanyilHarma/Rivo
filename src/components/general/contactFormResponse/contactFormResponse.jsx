import { useNavigate, useParams } from "react-router-dom";
import BootstrapContainer from "../bootstrapContainer/bootstrapContainer";
import classes from "./contactFormResponse.module.scss"
import { useGetContactsFormDataQuery } from "../../../redux/requests/apiSlice";
import { useEffect } from "react";

const ContactFormResponse = (props) => {
    const { type } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/")
        }, 5000)
        return () => clearTimeout(timeout)
    }, [navigate])

    const { data: contactFormData, error, isLoading } = useGetContactsFormDataQuery()
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;

    return (
        <BootstrapContainer>
            <div className={classes.responseContainer}>
                {type === "success" ? (<div className={classes.successMessage}>
                    <img src="http://localhost:1338/uploads/chinchilla_illustration_0211921de6.svg?updatedAt=2024-09-26T13%3A25%3A17.602Z" alt="" />
                    <div className={classes.successText}>
                        <span>Thank You {contactFormData?.data?.attributes?.name}!</span>
                        <p>Our manager will contact you soon Our manager will contact you shortly via this email {contactFormData?.data?.attributes?.email}</p>
                    </div></div>)
                    : (<div className={classes.errorMessage}>
                        <img src="http://localhost:1338/uploads/Vector_77_c4d4d9486a.png?updatedAt=2024-09-26T12%3A33%3A49.296Z" alt="" />
                        <div className={classes.errorText}>
                            <span>Kaput! Error 404</span>
                            <p>Unfortunately, the page youre looking for doesnt exist or there was an error in <br /> the link you followed or typed.</p>
                        </div>
                    </div>)
                }
                {contactFormData?.data?.attributes?.backgroundImages.map((image, index) => (
                    <img key={index} src={image.imgSrc} style={{ top: image.top, left: image.left, right: image.right, width: image.width, maxWidth: image.maxWidth }} />
                ))}
            </div>
        </BootstrapContainer>
    )
}

export default ContactFormResponse;
