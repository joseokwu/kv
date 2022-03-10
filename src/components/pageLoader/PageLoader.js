import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PageLoader = ({ dashboard = false , num }) => {

  const renderCard =(num) =>{
    num.map(item => {
      return (
        <div key={item} className="col-lg-3 mb-3">
      <Skeleton width={160} height={120} />
    </div>
      )
    })
  }

  return (
    <div className="mx-1">
      {dashboard ? (
        <article>
          <section className="row ">
            {
              num.map((item, i) => {
              return (
                <div key={i} className="col-lg-2 mb-3 mx-4">
              <Skeleton width={160} height={120} />
            </div>
              )
            })
            }
            
           
          </section>
          <section>

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
