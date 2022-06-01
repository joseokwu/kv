import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = ({
    children,
    fetched,
    height = 140,
    width = "100%",
}) => {
    return fetched ? children : <Skeleton width={width} height={height} />;
};
