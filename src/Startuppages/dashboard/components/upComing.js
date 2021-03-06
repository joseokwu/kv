import { HeadWrapper, UpcomingCard } from "./dash.component";
import { images } from "../../../constants/domiData";
import clock from "../../../assets/images/clock.svg";
import { useHistory } from "react-router-dom";
import { months } from "../../../utils/helpers";
import { EmptyState } from "../../../mentorComponents";


export const UpComing = ({ data = [] }) => {
  // const todoArr = [1, 2, 3];
  const history = useHistory();

  return (
    <div className="container">
      <HeadWrapper className="d-flex justify-content-between mt-5">
        <p className="text-nowrap">Upcoming Events</p>
        <span
          className="text-nowrap"
          onClick={() => history.push("/startup/events")}
        >
          See All
        </span>
      </HeadWrapper>

      {
        data == null && (<EmptyState />)
      }
        <div className="row ml-1" style={{ columnGap: 10 }}>
        {data && data.length > 0 ? data.map((d, i) => (
          <UpcomingCard key={i} className="col-lg-4 col-12 col-md-6">
            <div className="d-flex justify-content-between head">
              <h6>{d?.titleOfEvent}</h6>
              {/* <CustomThreeDots /> */}
            </div>

            <div className="d-flex justify-content-between my-4 date">
              <span>
                {new Date(d?.startDate).getDate()} |{" "}
                {months[new Date(d?.startTime).getMonth()]}
              </span>
              <article className="event_time">
                <img src={clock} alt="clock" /> {d?.period}
              </article>
              {/* <Tag name="Today" color="#120398" bg="#DEF6FF" fz="14px" /> */}
            </div>

            <div className="">
              <p>{d?.eventDescription}</p>
            </div>

            <div className="mt-4 mb-2 foot d-flex justify-content-between">
              <button onClick={() => history.push("/startup/events")}>View Details</button>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} alt="" />
                ))}
              </span>
            </div>
          </UpcomingCard>
        )
        ) : (
          <EmptyState message={"No Upcoming Events at the moment"} />
        )
      }
      </div>
    </div>
  );
};
