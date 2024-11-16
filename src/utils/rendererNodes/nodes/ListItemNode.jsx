import { renderNode } from "../renderNode";

const ListItemNode = ({ node, index, depth }) => {
    return (
        <li className={`list-item depth-${depth}`}>{node.children && node.children.map((child, i) => renderNode(child, i, depth))}</li>
    );
}

export default ListItemNode;