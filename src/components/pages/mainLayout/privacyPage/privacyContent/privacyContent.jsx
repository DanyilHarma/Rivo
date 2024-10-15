import { renderNode } from "./renderNode";
import React from "react";

const PrivacyContent = React.memo(({ content }) => {

    if (!content) return null;

    return <>{renderNode(content)}</>
});

PrivacyContent.displayName = "PrivacyContent";

export default PrivacyContent;