import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PageLoader = ({ dashboard = false }) => {
  return (
    <div className="mx-5">
      {dashboard ? (
        <article>
          <section className="row p-4">
            <div className="col-lg-3 mb-3">
              <Skeleton height={120} />
            </div>
            <div className="col-lg-3 mb-3">
              <Skeleton height={120} />
            </div>
            <div className="col-lg-3 mb-3">
              <Skeleton height={120} />
            </div>
            <div className="col-lg-3 mb-3">
              <Skeleton height={120} />
            </div>
          </section>
          <section className="px-4">
            <Skeleton width={300} />
          </section>
          <section className="row p-4">
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 mb-3">
              <Skeleton height={300} />
            </div>
          </section>
        </article>
      ) : (
        <article>
          <section className="p-4">
            <Skeleton count={12} height={40} className="mb-3" />
          </section>
        </article>
      )}
    </div>
  );
};
