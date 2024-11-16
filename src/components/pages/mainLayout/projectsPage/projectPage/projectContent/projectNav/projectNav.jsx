import classes from "./projectNav.module.scss";

const ProjectNav = ({ sections, activeSectionIndices }) => {

    return (
        <aside >
            <div className={classes.aside}>
                <nav>
                    <ul>
                        {sections.map((section, index) =>
                            section.title && (<li key={section.id}>
                                <a href={`#${section.anchor}`} className={`${activeSectionIndices.includes(index) ? classes.active : ""}`}>
                                    {section.title}
                                </a>
                            </li>)
                        )}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default ProjectNav;