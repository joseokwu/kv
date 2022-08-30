import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventRequest } from "../../../services/events";
import { EventCard } from "../../events/components";
import styles from "../dashboard.module.css";
import { EmptyState } from "../../../mentorComponents";

export const EventDashboard = () => {
    const [eventData, setEventData] = useState([]);
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

    useEffect(() => {
        const fetchData = async () => {
            // const res = await eventRequest("allEvents", {
            //     page: 1,
            //     limit: 5,
            // });
            // console.log(res);
            // const tempEventsList = [];
            // res?.data?.data?.forEach((item) => {
            //     if (new Date() < new Date(item?.startTime))
            //         tempEventsList.push(item);
            // });
            // setEventData(tempEventsList);
        };

        fetchData();
    }, []);

    return (
        <div>
            <section
                className={`d-flex align-items-center justify-content-between ${styles.dash_event_header}`}
            >
                <h5>Upcoming Events</h5>
                <Link to="/admin/events">See All</Link>
            </section>
            {eventData?.length === 0 ? (
                <EmptyState message="There are no upcoming events." />
            ) : (
                <section className="row">
                    {eventData?.map((x, i) => {
                        return (
                            <div
                                className="col-lg-6 px-2 my-2"
                                key={`event-${i}`}
                            >
                                <EventCard data={x} onDashboard={true} />
                            </div>
                        );
                    })}
                </section>
            )}
        </div>
    );
};
