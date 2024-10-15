import { NavLink } from "react-router-dom";
import classes from "./projectNav.module.scss";


const ProjectNav = ({ sections }) => {

    return (
        <aside>
            <nav>
                {sections.map(section => (
                    <NavLink key={section.id} to={section.anchor}>
                        {section.title}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default ProjectNav;