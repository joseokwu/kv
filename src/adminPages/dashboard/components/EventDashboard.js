import { Link } from "react-router-dom";
import { EventCard } from "../../events/components";
import styles from "../dashboard.module.css";

export const EventDashboard = () => {
  const data = [
    {
      name: "Appleiine House Demo",
      startDate: new Date(2021, 5, 20, 2, 10),
      endDate: new Date(2021, 5, 23, 5, 0),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Appleiine House Demo",
      startDate: new Date(2021, 5, 20, 2, 10),
      endDate: new Date(2021, 5, 23, 5, 0),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div>
      <section
        className={`d-flex align-items-center justify-content-between ${styles.dash_event_header}`}
      >
        <h5>Upcoming Events</h5>
        <Link to="/admin/events">See All</Link>
      </section>
      <section className="row">
        {[...data, ...data].map((x, i) => {
          return (
            <div className="col-lg-6 px-2 my-2" key={`event-${i}`}>
              <EventCard data={x} onDashboard={true} />
            </div>
          );
        })}
      </section>
    </div>
  );
};
