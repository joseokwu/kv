import { useState } from "react";

export const SeeMore = ({ children, lessCount = 174 }) => {
    const [more, setMore] = useState(false);
    return (
        <div>
            {children?.substring(0, more ? children?.length - 1 : lessCount)}
            {children?.length > 0 && (
                <span className="ml-2 " onClick={() => setMore(!more)}>
                    {more ? "see less" : "read more"}
                </span>
            )}
        </div>
    );
};
