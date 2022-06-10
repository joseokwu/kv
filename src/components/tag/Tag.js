import React from "react";
import "./tag.css";

export const Tag = ({
    name = "tag",
    color = "#058DC1",
    className = "",
    ...rest
}) => {
    return (
        <span
            className={`tag-main ${className}`}
            style={{
                backgroundColor: color === "#235405" ? "#F2FEF2" : `${color}20`,
                color: color,
            }}
            {...rest}
        >
            {name}
        </span>
    );
};
