import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PageLoader = ({ dashboard = false , num , big=true }) => {

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
          <section className="row py-4">
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
          {
          big ? (
            <div className=" d-flex" >
            <div  className="col-lg-6  mb-3 ">
              <Skeleton width={290} height={190} />
            </div>
            <div className="col-lg-6  mb-3 mx-1">
              <Skeleton width={290} height={190} />
            </div>
            </div>
          ): (<Skeleton count={7} height={25} className="mb-3" />)
          }
          
          </section>
          <section>
          <Skeleton count={3} height={25} className="mb-3" />
          </section>
        </article>
      ) : (
        <article>
          <section className="p-4">
            <Skeleton count={12} height={20} className="mb-3" />
          </section>
        </article>
      )}
    </div>
  );
};
