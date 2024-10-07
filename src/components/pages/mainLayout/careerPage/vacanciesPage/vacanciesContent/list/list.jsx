import classes from "./list.module.scss"

const List = ({ listItem, name }) => {

    const list = listItem?.[0]?.children
        ?.filter(item => item.type === "list-item")
        ?.flatMap(item => item.children)
        ?.filter(node => node.type === "text")
        ?.map(node => node.text) || [];

    return (
        <div className={classes.benefites}>
            <h3>{name}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;