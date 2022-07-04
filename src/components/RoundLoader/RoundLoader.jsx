import React from "react";
import { LoaderWrapper, Loading } from "./RoundLoader.styled";

export const RoundLoader = ({ color, children, fetched, height = 140 }) => {
    return (
        <LoaderWrapper height={height}>
            {fetched ? children : <Loading color={color} />}
        </LoaderWrapper>
    );
};
