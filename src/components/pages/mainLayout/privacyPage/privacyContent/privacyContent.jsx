import { renderNode } from "./renderNode";
import React from "react";

const PrivacyContent = React.memo(({ content }) => {
    if (!content) return null;

    return <>{content.map((node, index) => renderNode(node, index))}</>
});

PrivacyContent.displayName = "PrivacyContent";

export default PrivacyContent;