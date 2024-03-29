import React from "react";
import "./tag.css";

export const Tag = ({ name = "tag", color = "#058DC1" }) => {
    return (
        <span
            className="tag-main"
            style={{ backgroundColor: `${color}20`, color: color }}
        >
            {name}
        </span>
    );
};

export const Tag2 = ({ name = "tag", color = "#058DC1" }) => {
    return (
        <span
            className="tag-sec"
            style={{ backgroundColor: `${color}20`, color: color }}
        >
            {name}
        </span>
    );
};
