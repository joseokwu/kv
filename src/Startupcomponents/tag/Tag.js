import React from "react";
import "./tag.css";

export const Tag = ({
    name = "tag",
    color = "#058DC1",
    bg,
    fz = "12px",
    className,
    onClick,
    fontWeight = "normal",
    padding = "4px 10px",
    style = {},
}) => {
    return (
        <div onClick={onClick} style={style}>
            <span
                className={`tag-main ${className} `}
                style={{
                    backgroundColor: `${bg}`,
                    color: color,
                    fontSize: fz,
                    fontWeight: fontWeight,
                    padding: padding,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "21px",
                }}
            >
                {name}
            </span>
        </div>
    );
};
