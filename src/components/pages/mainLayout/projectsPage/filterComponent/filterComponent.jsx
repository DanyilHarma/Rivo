import { NavLink } from "react-router-dom";
import classes from "./filterComponent.module.scss";

const FilterComponent = ({ categories, selectedCategory }) => {

    return (
        <div className={classes.filterContainer}>
            <NavLink to="/projects">
                <button className={selectedCategory === null ? classes.active : ""}><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H7.5L11 3.5H21C22.1046 3.5 23 4.39543 23 5.5V15C23 16.1046 22.1046 17 21 17Z" stroke="#B6B6B6" strokeWidth="1.5" />
                </svg> All categories</button>
            </NavLink>
            {categories.map(category => (
                <NavLink key={category} to={`/projects/category/${category}`}>
                    <button className={selectedCategory === category ? classes.active : ""}>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H7.5L11 3.5H21C22.1046 3.5 23 4.39543 23 5.5V15C23 16.1046 22.1046 17 21 17Z" stroke="#B6B6B6" strokeWidth="1.5" />
                        </svg>{category}
                    </button>
                </NavLink>
            ))}
        </div>
    )
}

export default FilterComponent;