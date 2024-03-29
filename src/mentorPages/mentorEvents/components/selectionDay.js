import React from "react";
import dots from "../../../assets/icons/3dots.svg";
import bigClock from "../../../assets/icons/bigclock.svg";
import demo from "../../../assets/images/vidDemo.svg";
import doc from "../../../assets/images/doc.svg";
import { Button, Modal, Select, TextField } from "../../../mentorComponents";
import { formatTime, months } from "../../../utils/helpers";
import down from "../../../assets/icons/downArrow.svg";
import location from "../../../assets/icons/locationSm.svg";
import name from "../../../assets/icons/initial.svg";
import { EmptyState } from "../../../mentorComponents";

export const SelectionDay = ({ data = [] }) => {
    if (data.length === 0) return <EmptyState />;

    return (
        <div className="row" style={{ columnGap: 10 }}>
            <Modal id="eventScheduleModal" withHeader={false}>
                <EventScheduleModal />
            </Modal>
            {data?.length > 0 && (
                <div className="col-lg-5 col-12 events_card_bg py-4 mt-4 ml-lg-4 px-4">
                    <section className="events_card d-flex justify-content-between">
                        <h3>{data[0]?.titleOfEvent}</h3>
                        {/* <img src={dots} alt="" /> */}
                    </section>

                    <section className="d-flex justify-content-between mt-2">
                        <p className="pending_date pr-4">
                            <span>
                                {new Date(data[0]?.startDate).getDate()}
                            </span>{" "}
                            {months[new Date(data[0]?.startDate).getMonth()]}
                        </p>

                        {new Date().getTime() >= new Date(data[0]?.startTime) &&
                        new Date().getTime() <=
                            new Date(data[0]?.endTime).getTime() ? (
                            <span className="accepted_tag">Ongoing</span>
                        ) : (
                            <p className="pending_time pt-1">
                                <img src={bigClock} alt="clock" />{" "}
                                {formatTime(data[0]?.startTime)}-
                                {formatTime(data[0]?.endTime)}
                            </p>
                        )}
                    </section>

                    <section className="mt-4">
                        <img
                            src={demo}
                            alt="demo"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </section>

                    <section className="event_card_body mt-5">
                        <p>{data[0]?.eventDescription}</p>
                    </section>

                    <section
                        className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
                        style={{ rowGap: 10 }}
                    >
                        <div
                            className="d-flex align-items-center"
                            style={{ columnGap: 10 }}
                        >
                            {new Date().getTime() >=
                                new Date(data[0]?.startDate).getTime() &&
                            new Date().getTime() <=
                                new Date(data[0]?.endDate).getTime() ? (
                                <button className="se_join">Join Event</button>
                            ) : (
                                <button
                                    className="se_join"
                                    data-target="#eventScheduleModal"
                                    data-toggle={"modal"}
                                >
                                    Add Schedule
                                </button>
                            )}
                            <button className="se_view">View details</button>
                            {/* <Button label="View details" variant="secondary" /> */}
                            {/* <Button
              label="Add to schedule"
              data-toggle={'modal'}
              data-target="#eventScheduleModal"
            /> */}
                        </div>

                        <section className="event_people">
                            <img src={doc} alt="doc" />
                            <img src={doc} alt="doc" />
                            <img src={doc} alt="doc" />
                        </section>
                    </section>
                </div>
            )}

            <div className="col-lg-6 col-12">
                {data?.length > 1 && (
                    <div className=" events_card_bg py-4 px-4 mt-4">
                        <section className="events_card d-flex justify-content-between">
                            <h3>{data[1]?.titleOfEvent}</h3>
                            {/* <img src={dots} alt="" /> */}
                        </section>

                        <section className="d-flex justify-content-between mt-2">
                            <p className="pending_date pr-4">
                                <span>
                                    {new Date(data[1]?.startDate).getDate()}
                                </span>{" "}
                                {
                                    months[
                                        new Date(data[1]?.startDate).getMonth()
                                    ]
                                }
                            </p>
                            {new Date().getTime() >=
                                new Date(data[1]?.startTime) &&
                            new Date().getTime() <=
                                new Date(data[1]?.endTime).getTime() ? (
                                <span className="accepted_tag">Ongoing</span>
                            ) : (
                                <p className="pending_time pt-1">
                                    <img src={bigClock} alt="clock" />{" "}
                                    {formatTime(data[1]?.startTime)}-
                                    {formatTime(data[1]?.endTime)}
                                </p>
                            )}{" "}
                        </section>

                        <section className="event_card_body mt-3">
                            <p>{data[1]?.eventDescription}</p>
                        </section>

                        <section
                            className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
                            style={{ rowGap: 10 }}
                        >
                            <div
                                className="d-flex align-items-center"
                                style={{ columnGap: 10 }}
                            >
                                {new Date().getTime() >=
                                    new Date(data[1]?.startDate).getTime() &&
                                new Date().getTime() <=
                                    new Date(data[1]?.endDate).getTime() ? (
                                    <button className="se_join">
                                        Join Event
                                    </button>
                                ) : (
                                    new Date().getTime() <
                                        new Date(
                                            data[1]?.endDate
                                        ).getTime() && (
                                        <button className="se_join">
                                            Add Schedule
                                        </button>
                                    )
                                )}
                                <button className="se_view">
                                    View details
                                </button>
                            </div>

                            <section className="event_people">
                                <img src={doc} alt="doc" />
                                <img src={doc} alt="doc" />
                                <img src={doc} alt="doc" />
                            </section>
                        </section>
                    </div>
                )}

                {data?.length > 2 && (
                    <div className="events_card_bg py-4 px-4 mt-4">
                        <section className="events_card d-flex justify-content-between">
                            <h3>{data[2]?.titleOfEvent}</h3>
                            {/* <img src={dots} alt="" /> */}
                        </section>

                        <section className="d-flex justify-content-between mt-2">
                            <p className="pending_date pr-4">
                                <span>
                                    {new Date(data[2]?.startDate).getDate()}
                                </span>{" "}
                                {
                                    months[
                                        new Date(data[2]?.startDate).getMonth()
                                    ]
                                }{" "}
                            </p>

                            {new Date().getTime() >=
                                new Date(data[2]?.startTime).getTime() &&
                            new Date().getTime() <=
                                new Date(data[2]?.endTime).getTime() ? (
                                <span className="accepted_tag">Ongoing</span>
                            ) : (
                                <p className="pending_time pt-1">
                                    <img src={bigClock} alt="clock" />{" "}
                                    {formatTime(data[2]?.startTime)}-
                                    {formatTime(data[2]?.endTime)}
                                </p>
                            )}
                        </section>

                        <section className="event_card_body mt-3">
                            <p>{data[2]?.eventDescription}</p>
                        </section>

                        <section
                            className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
                            style={{ rowGap: 10 }}
                        >
                            <div
                                className="d-flex align-items-center"
                                style={{ columnGap: 10 }}
                            >
                                {new Date().getTime() >=
                                    new Date(data[2]?.startDate).getTime() &&
                                new Date().getTime() <=
                                    new Date(data[2]?.endDate).getTime() ? (
                                    <button className="se_join">
                                        Join Event
                                    </button>
                                ) : (
                                    new Date().getTime() <
                                        new Date(
                                            data[2]?.endDate
                                        ).getTime() && (
                                        <button className="se_join">
                                            Add Schedule
                                        </button>
                                    )
                                )}
                                <button className="se_view">
                                    View details
                                </button>
                            </div>

                            <section className="event_people">
                                <img src={doc} alt="doc" />
                                <img src={doc} alt="doc" />
                                <img src={doc} alt="doc" />
                            </section>
                        </section>
                    </div>
                )}
            </div>
            <div className="row">
                {data?.length > 0 &&
                    data?.slice(3, data?.length - 1).map((d, i) => {
                        return (
                            <section className="col-lg-6">
                                <div className=" events_card_bg py-4 px-4 mt-4">
                                    <section className="events_card d-flex justify-content-between">
                                        <h3>{d?.titleOfEvent}</h3>
                                        {/* <img src={dots} alt="" /> */}
                                    </section>

                                    <section className="d-flex justify-content-between mt-2">
                                        <p className="pending_date pr-4">
                                            <span>
                                                {new Date(
                                                    d?.startDate
                                                ).getDate()}
                                            </span>{" "}
                                            {
                                                months[
                                                    new Date(
                                                        d?.startDate
                                                    ).getMonth()
                                                ]
                                            }
                                        </p>
                                        {new Date().getTime() >=
                                            new Date(d?.startTime) &&
                                        new Date().getTime() <=
                                            new Date(d?.endTime).getTime() ? (
                                            <span className="accepted_tag">
                                                Ongoing
                                            </span>
                                        ) : (
                                            <p className="pending_time pt-1">
                                                <img
                                                    src={bigClock}
                                                    alt="clock"
                                                />{" "}
                                                {formatTime(d?.startTime)}-
                                                {formatTime(d?.endTime)}
                                            </p>
                                        )}{" "}
                                    </section>

                                    <section className="event_card_body mt-3">
                                        <p>{d?.eventDescription}</p>
                                    </section>

                                    <section
                                        className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
                                        style={{ rowGap: 10 }}
                                    >
                                        <div
                                            className="d-flex align-items-center"
                                            style={{ columnGap: 10 }}
                                        >
                                            {new Date().getTime() >=
                                                new Date(d?.startDate) &&
                                            new Date().getTime() <=
                                                new Date(
                                                    d?.endDate
                                                ).getTime() ? (
                                                <button className="se_join">
                                                    Join Event
                                                </button>
                                            ) : (
                                                new Date().getTime() <
                                                    new Date(
                                                        d?.endDate
                                                    ).getTime() && (
                                                    <button className="se_join">
                                                        Add Schedule
                                                    </button>
                                                )
                                            )}
                                            <button className="se_view">
                                                View details
                                            </button>
                                        </div>

                                        <section className="event_people">
                                            <img src={doc} alt="doc" />
                                            <img src={doc} alt="doc" />
                                            <img src={doc} alt="doc" />
                                        </section>
                                    </section>
                                </div>
                            </section>
                        );
                    })}
            </div>
        </div>
    );
};

const EventScheduleModal = () => {
    return (
        <div className="px-4 pb-5">
            <section className="pt-2">
                <button
                    type="button"
                    className="close close-founder-modal"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    {/* <img className="pr-2" src={pen} alt="edit" />
          <img className="pr-2" src={trash} alt="trash" /> */}
                    <span aria-hidden="true">&times;</span>
                </button>
            </section>

            <section className="mt-2">
                <p className="" style={{ color: "#E21919" }}>
                    2 days : 30mins : 05 secs
                </p>

                <section className="d-flex program_modal_head mt-4">
                    <h3 className="pr-3">Appleiine House Demo</h3>
                    <p className="pt-2">Host: Applean Industry</p>
                </section>

                <section className="d-flex mt-3">
                    <p className="pending_date pr-5">
                        <span>50</span> September
                    </p>

                    <p className="pending_time pt-1">
                        <img src={bigClock} alt="clock" /> 10:00pm - 12pm
                    </p>
                </section>

                <section className="event_schedule_modal_desc mt-5 p-4">
                    <h4 className="pb-3">Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim lectus morbi elementum eu.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Enim lectus morbi
                        elementum eu.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </section>

                {/* <section className="event_schedule_visibility mt-4 mb-3">
          <p>
            Visibility : <span>Public</span>
          </p>
        </section> */}

                {/* <section className="mb-3">
          <button className="back-btn">Join Event</button>
        </section> */}
                <div className="justify-content-between">
                    <section className="event_link">
                        <a href="!#" target="_blank">
                            <img
                                className="pr-3"
                                src={location}
                                alt="location"
                            />{" "}
                            meet.google.com/jce-wata-fux
                        </a>
                    </section>

                    <section className="event_schedule_visibility mt-4 mb-3">
                        <p>
                            Visibility : <span>Public</span>
                        </p>
                    </section>
                </div>

                <section className="mt-5">
                    <p>Attendees</p>
                    <div className="d-flex mt-4">
                        <p className="pr-5">
                            <img className="pr-3" src={name} alt="initial" />{" "}
                            Micheal Smith
                        </p>
                        <p className="pl-5">
                            <img className="pr-3" src={name} alt="initial" />{" "}
                            Micheal Smith
                        </p>
                    </div>

                    <div className="d-flex mt-4">
                        <p className="pr-5">
                            <img className="pr-3" src={name} alt="initial" />{" "}
                            Micheal Smith
                        </p>
                        <p className="pl-5">
                            <img className="pr-3" src={name} alt="initial" />{" "}
                            Micheal Smith
                        </p>
                    </div>
                </section>

                <section className="event_schedule_availability mt-5">
                    <p>Availability</p>
                    <div className="mt-3 mb-4">
                        <button className="mr-3">Yes</button>
                        <button className="mr-3">No</button>
                        <button className="mr-4">Maybe</button>
                        <span>
                            Request to reschedule{" "}
                            <img className="pl-2" src={down} alt="arrow down" />
                        </span>
                    </div>
                </section>

                <section className="mt-5">
                    <TextField
                        type="date"
                        label={"Day"}
                        placeholder={"Thursday 17th Oct 2021"}
                    />
                </section>

                <section className="row mt-5">
                    <div className="col-lg-5">
                        <Select
                            label={"Start time"}
                            placeholder={"Time"}
                            options={["12pm"]}
                        />
                    </div>
                    <div className="col-lg-5">
                        <Select
                            label={"End time"}
                            placeholder={"Time"}
                            options={["2pm"]}
                        />
                    </div>
                </section>

                <section className="send_request mt-5">
                    <span>Send Request</span>
                </section>

                <section className="mt-5 event_card_footer">
                    <span>Add to schedule</span>
                </section>
            </section>
        </div>
    );
};
