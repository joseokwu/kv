import React from "react";
import { LoaderWrapper, Loading } from "./RoundLoader.styled";

export const RoundLoader = ({ color, children, fetched, height = 140 }) => {
    return fetched ? (
        children
    ) : (
        <LoaderWrapper height={height}>
            <Loading color={color} />
        </LoaderWrapper>
    );
};
