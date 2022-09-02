import React from "react";
import { LoaderWrapper, Loading } from "./SpinLoader.styled";

export const SpinLoader = ({
    color,
    children,
    loading = false,
    height = 140,
    bg = "transparent",
}) => {
    return loading ? (
        <LoaderWrapper height={height}>
            <Loading color={color} />
        </LoaderWrapper>
    ) : (
        children
    );
};
