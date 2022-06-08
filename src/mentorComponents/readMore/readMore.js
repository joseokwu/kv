import React, { useState } from "react";
import "./readMore.css";

export const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            {children.length > 150 ? (
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? (
                        <span className="pl-1">More Details</span>
                    ) : (
                        <span className="pl-1">Less Details</span>
                    )}
                </span>
            ) : (
                <span />
            )}
        </p>
    );
};
