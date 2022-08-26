import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = ({
    children,
    fetched,
    loading = false,
    height = 140,
    width = "100%",
    columns = 1,
    rows = 1,
}) => {
    return fetched ? children : <Skeleton width={width} height={height} />;
};
