import classes from "../privacyPage.module.scss";

export const renderNode = (node, index, depth = 0) => {
    switch (node.type) {
        case "heading": {
            const HeadingTag = `h${node.level || 2}`;
            return (
                <HeadingTag key={index}>
                    {node.children && node.children.map((child, i) => renderNode(child, i, depth))}
                </HeadingTag>
            )
        };
        case "paragraph":
            return (
                <p key={index}>{node.children && node.children.map((child, i) => renderNode(child, i, depth))}</p>
            );
        case "list": {
            const ListTag = node.formate === "ordered" ? "ol" : "ul";
            return (
                <ListTag key={index} className={`${classes.list} ${classes[`depth${depth}`]} ${classes[node.format]}`}>
                    {node.children && node.children.map((child, i) => renderNode(child, i, depth + 1))}
                </ListTag>
            )
        };
        case "list-item":
            return (
                <li className={`list-item depth-${depth}`} key={index}>{node.children && node.children.map((child, i) => renderNode(child, i, depth))}</li>
            );
        case "text":
            return node.text;
        default:
            return null;
    }
}