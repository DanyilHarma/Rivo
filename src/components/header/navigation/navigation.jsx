import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss'
import data from "./navigationData.json"
import MakeButton from './makeOrderButton/makeOrderButton';
import MenuButton from './menuButton/menuButton';
import { useState } from 'react';
import { useGetExpertiseDataQuery } from '../../../redux/requests/apiSlice';

const Navigation = () => {
    const [showExpertiseMenu, setShowExpertiseMenu] = useState(false);
    const { data: expertiseData, error, isLoading } = useGetExpertiseDataQuery();

    const handleExpertiseClick = () => {
        setShowExpertiseMenu((prevState) => !prevState);
    }

    return (
        <nav>
            <ul className={classes.headerListContainer}>
                {data.navigationData.map((item, index) => (
                    <li key={index} className={`${classes.headerList} ${item.class ? classes[item.class] : ''}`}>
                        {item.element === 'Expertise' ? (
                            <div onClick={handleExpertiseClick} className={classes.dropdownTrigger}>
                                <span>{item.element}</span>
                                {item.imgSrc && <img src={item.imgSrc} alt={item.element} />}

                            </div>
                        ) : (
                            <NavLink
                                className={`${classes.headerLink} ${item.class ? classes[item.class] : ''}`}
                                to={item.href}
                            >
                                <span>{item.element}</span>
                                {item.imgSrc && <img src={item.imgSrc} alt={item.element} />}
                            </NavLink>
                        )}
                    </li>

                ))}
                {showExpertiseMenu && (
                    <div className={classes.dropdownMenu}>
                        {isLoading && <p>Loading...</p>}
                        {error && <p>Error loading expertise data</p>}
                        {expertiseData?.data?.map((expertise) => {
                            const expertiseItems = expertise.attributes.expertiseData;
                            if (!expertiseItems || expertiseItems.length === 0) return null;


                            const expertiseItem = expertiseItems[0];
                            const expertiseType = expertiseItem.type;
                            const expertiseId = expertiseItem.id;

                            if (!expertiseType || !expertiseId) return null;

                            return (
                                <NavLink
                                    key={expertiseId}
                                    to={`/expertise/${expertiseId}`}
                                    className={classes.dropdownItem}
                                >
                                    {expertiseType}
                                </NavLink>
                            );
                        })}
                    </div>
                )}
                <MakeButton text="MORE ORDER" />
                <MenuButton />
            </ul>
        </nav>
    )
}

export default Navigation;