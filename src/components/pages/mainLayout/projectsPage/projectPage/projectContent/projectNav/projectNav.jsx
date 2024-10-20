import { NavLink } from "react-router-dom";
import classes from "./projectNav.module.scss";


const ProjectNav = ({ sections }) => {

    return (
        <aside >
            <div className={classes.aside}>
                <nav>
                    <ul>
                        {sections.map(section => (
                            <li key={section.id}>
                                <NavLink to={section.anchor}>
                                    {section.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default ProjectNav;