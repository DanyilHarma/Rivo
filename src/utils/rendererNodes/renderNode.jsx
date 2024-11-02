import classes from "../../components/pages/mainLayout/privacyPage/privacyPage.module.scss";
import HeadingNode from "./nodes/HeadingNode.jsx";
import ImageNode from "./nodes/ImageNode.jsx";
import LinkNode from "./nodes/LinkNode.jsx";
import ListItemNode from "./nodes/ListItemNode.jsx";
import ListNode from "./nodes/ListNode.jsx";
import ParagraphNode from "./nodes/ParagraphNode.jsx";
import TextNode from "./nodes/TextNode.jsx";

export const renderNode = (node, index, depth = 0) => {

    const nodeProps = { node, index, depth }

    switch (node.type) {
        case "heading": {
            return <HeadingNode key={index} {...nodeProps} />
        };
        case "paragraph": {
            return <ParagraphNode key={index} {...nodeProps} />
        };
        case "list": {
            return <ListNode key={index}  {...nodeProps} />
        };
        case "list-item": {
            return <ListItemNode key={index} {...nodeProps} />
        };
        case "image": {
            return <ImageNode key={index} {...nodeProps} />
        };
        case "link": {
            return <LinkNode key={index} {...nodeProps} />
        };
        case "text": {
            return <TextNode key={index}  {...nodeProps} />
        };
        default:
            return null;
    }
}