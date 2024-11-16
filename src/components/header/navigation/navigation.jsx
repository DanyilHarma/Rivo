import { NavLink, useLocation } from 'react-router-dom';
import classes from './navigation.module.scss'
import data from "./navigationData.json"
import MakeButton from './makeOrderButton/makeOrderButton';
import MenuButton from './menuButton/menuButton';
import { useEffect, useRef, useState } from 'react';
import { useGetExpertiseDataQuery } from '../../../redux/requests/apiSlice';
import { formatText } from '../../../utils/formatText';

const Navigation = () => {
    const [showExpertiseMenu, setShowExpertiseMenu] = useState(false);
    const { data: expertiseData, error, isLoading } = useGetExpertiseDataQuery();
    const expertiseMenuRef = useRef(null);
    const location = useLocation();


    const handleExpertiseClick = () => {
        setShowExpertiseMenu(true);
    }

    const handleClosePopup = () => {
        setShowExpertiseMenu(false);
    }

    useEffect(() => {
        handleClosePopup();
    }, [location]);

    return (
        <nav>
            <ul className={classes.headerListContainer}>
                {data.navigationData.map((item, index) => (
                    <li key={index} className={`${classes.headerList} ${item.class ? classes[item.class] : ''}`}>
                        {item.element === 'Expertise' ? (
                            <div onClick={handleExpertiseClick} className={classes.dropdownTrigger}>
                                <span>{item.element}</span>
                                {item.imgSrc && <img src={item.imgSrc} alt={item.element} className={`${classes.arrow}
                                    ${showExpertiseMenu ? classes.rotate : ""}`} />}

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
                    <div className={classes.dropdownMenu} ref={expertiseMenuRef} onMouseLeave={handleClosePopup}>
                        {isLoading && <p>Loading...</p>}
                        {error && <p>Error loading expertise data</p>}
                        {expertiseData?.data?.map((expertise) => {
                            const expertiseType = expertise.attributes.type;
                            if (!expertiseType || expertiseType.length === 0) return null;

                            // const expertiseId = expertiseType.id;
                            const formattedText = formatText(expertiseType);
                            if (!expertiseType) return null;

                            return (
                                <NavLink
                                    key={formattedText}
                                    to={`/expertises/${formattedText}`}
                                    className={classes.dropdownItem}
                                    onClick={handleClosePopup}
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