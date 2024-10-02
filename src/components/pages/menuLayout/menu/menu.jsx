import { useGetHomepageDataQuery } from "../../../../redux/apiSlice";
import BootstrapContainer from "../../../general/bootstrapContainer/bootstrapContainer";
import ContactsInfo from "../../../general/contactsContainer/contactsInfo/contactsInfo";
import classes from "./menu.module.scss"

const Menu = () => {
    const { data: homepageData, error, isLoading } = useGetHomepageDataQuery();
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных!</p>;
    const infoData = homepageData?.data?.attributes?.contactsHomepageData.contactsInfo;

    return (
        <div>
            <BootstrapContainer>
                <div className={classes.container}>
                    <ContactsInfo infoData={infoData} />
                </div>
            </BootstrapContainer>
        </div>
    )
}

export default Menu;