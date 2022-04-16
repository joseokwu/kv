import React from "react";
import bigClock from "../../../assets/icons/bigclock.svg";
import demo from "../../../assets/images/vidDemo.svg";
import doc from "../../../assets/images/doc.svg";
import { Modal, Select, TextField , Button } from "../../../Startupcomponents";
import { formatTime, months, formatAMPM } from "../../../utils/helpers";
import down from "../../../assets/icons/downArrow.svg";
import location from "../../../assets/icons/locationSm.svg";
import name from "../../../assets/icons/initial.svg";
import moment from 'moment';

export const SelectionDay = ({ data = [] }) => {
  return (
    <div className="row" style={{ columnGap: 10 }}>
     
      {data?.length > 0 && (
        <div className="col-lg-5 col-12 events_card_bg py-4 mt-4 ml-lg-4 px-4">
        <Modal id={`dem${data[0]?._id}`} withHeader={false}>
        <EventScheduleModal data={data[0]} />
      </Modal>
          <section className="events_card d-flex justify-content-between">
            <h3>{data[0]?.titleOfEvent}</h3>
            {/* <img src={dots} alt="" /> */}
          </section>

          <section className="d-flex justify-content-between mt-2">
            <p className="pending_date pr-4">
              <span>{new Date(data[0]?.startDate).getDate()}</span>{" "}
              {months[new Date(data[0]?.startDate).getMonth()]}
            </p>

            {new Date().getTime() >= new Date(data[0]?.startTime) &&
            new Date().getTime() <= new Date(data[0]?.endTime).getTime() ? (
              <span className="accepted_tag">Ongoing</span>
            ) : (
              <p className="pending_time pt-1">
                <img src={bigClock} alt="clock" />{" "}
                {formatTime(data[0]?.startTime)}-{formatTime(data[0]?.endTime)}
              </p>
            )}
          </section>

          <section className="mt-4">
            <img
              src={data[0]?.eventPicture}
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
              {new Date().getTime() >= new Date(data[0]?.startDate).getTime() &&
              new Date().getTime() <= new Date(data[0]?.endDate).getTime() ? (
                <button className="se_join">Join Event</button>
              ) : (
                new Date().getTime() < new Date(data[0]?.endDate).getTime() && (
                  <button className="se_join">Add Schedule</button>
                  // <button className="se_join">Join Event</button>
                )
              )}
              <button
               data-target={`#dem${data[0]?._id}`} 
                  data-toggle='modal'
               className="se_view">View details</button>
              {/* <Button label="View details" variant="secondary" /> */}
              <Button
              label="Add to schedule"
              data-toggle={'modal'}
              data-target={`#${data[0]?._id}`}
            />
            </div>

            {/* <section className="event_people">
              <img src={doc} alt="doc" />
              <img src={doc} alt="doc" />
              <img src={doc} alt="doc" />
            </section> */}
          </section>
        </div>
      )}

      <div className="col-lg-6 col-12">
        {data?.length > 1 && (
          <div className=" events_card_bg py-4 px-4 mt-4">
          <Modal id={data[1]?._id} withHeader={false}>
        <EventScheduleModal data={data[1]} />
      </Modal>
            <section className="events_card d-flex justify-content-between">
              <h3>{data[1]?.titleOfEvent}</h3>
              {/* <img src={dots} alt="" /> */}
            </section>

            <section className="d-flex justify-content-between mt-2">
              <p className="pending_date pr-4">
                <span>{new Date(data[1]?.startDate).getDate()}</span>{" "}
                {months[new Date(data[1]?.startDate).getMonth()]}
              </p>
              {new Date().getTime() >= new Date(data[1]?.startTime) &&
              new Date().getTime() <= new Date(data[1]?.endTime).getTime() ? (
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
                new Date().getTime() <= new Date(data[1]?.endDate).getTime() ? (
                  <button className="se_join">Join Event</button>
                ) : (
                  new Date().getTime() <
                    new Date(data[1]?.endDate).getTime() && (
                    <button className="se_join">Add Schedule</button>
                  )
                )}
                <button
                  data-target={`#${data[1]?._id}`} 
                  data-toggle='modal'
                 className="se_view">View details</button>
              </div>
{/* 
              <section className="event_people">
                <img src={doc} alt="doc" />
                <img src={doc} alt="doc" />
                <img src={doc} alt="doc" />
              </section> */}
            </section>
          </div>
        )}

        {data?.length > 2 && (
          <div className="events_card_bg py-4 px-4 mt-4">
          <Modal id={data[2]?._id} withHeader={false}>
        <EventScheduleModal data={data[2]} />
      </Modal>
            <section className="events_card d-flex justify-content-between">
              <h3>{data[2]?.titleOfEvent}</h3>
              {/* <img src={dots} alt="" /> */}
            </section>

            <section className="d-flex justify-content-between mt-2">
              <p className="pending_date pr-4">
                <span>{new Date(data[2]?.startDate).getDate()}</span>{" "}
                {months[new Date(data[2]?.startDate).getMonth()]}{" "}
              </p>

              {new Date().getTime() >= new Date(data[2]?.startTime).getTime() &&
              new Date().getTime() <= new Date(data[2]?.endTime).getTime() ? (
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
                new Date().getTime() <= new Date(data[2]?.endDate).getTime() ? (
                  <button className="se_join">Join Event</button>
                ) : (
                  new Date().getTime() <
                    new Date(data[2]?.endDate).getTime() && (
                    <button className="se_join">Add Schedule</button>
                  )
                )}
                <button className="se_view">View details</button>
              </div>

              {/* <section className="event_people">
                <img src={doc} alt="doc" />
                <img src={doc} alt="doc" />
                <img src={doc} alt="doc" />
              </section> */}
            </section>
          </div>
        )}
      </div>
      <div className="row">
        {data?.length > 0 &&
          data?.slice(3, data?.length - 1).map((d, i) => {
            return (
              <section className="col-lg-6">
              <Modal id="eventScheduleModal" withHeader={false}>
        <EventScheduleModal data={d} />
      </Modal>
                <div className=" events_card_bg py-4 px-4 mt-4">
                  <section className="events_card d-flex justify-content-between">
                    <h3>{d?.titleOfEvent}</h3>
                    {/* <img src={dots} alt="" /> */}
                  </section>

                  <section className="d-flex justify-content-between mt-2">
                    <p className="pending_date pr-4">
                      <span>{new Date(d?.startDate).getDate()}</span>{" "}
                      {months[new Date(d?.startDate).getMonth()]}
                    </p>
                    {new Date().getTime() >= new Date(d?.startTime) &&
                    new Date().getTime() <= new Date(d?.endTime).getTime() ? (
                      <span className="accepted_tag">Ongoing</span>
                    ) : (
                      <p className="pending_time pt-1">
                        <img src={bigClock} alt="clock" />{" "}
                        {formatTime(d?.startTime)}-{formatTime(d?.endTime)}
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
                      {new Date().getTime() >= new Date(d?.startDate) &&
                      new Date().getTime() <= new Date(d?.endDate).getTime() ? (
                        <button className="se_join">Join Event</button>
                      ) : (
                        new Date().getTime() <
                          new Date(d?.endDate).getTime() && (
                          <button className="se_join">Add Schedule</button>
                        )
                      )}
                      <button className="se_view">View details</button>
                    </div>

                    {/* <section className="event_people">
                      <img src={doc} alt="doc" />
                      <img src={doc} alt="doc" />
                      <img src={doc} alt="doc" />
                    </section> */}
                  </section>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};

const EventScheduleModal = ({data}) => {
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
        { `${formatAMPM(new Date(data?.startTime))} - ${formatAMPM(new Date(data?.endTime))}`  }
        </p>

        <section className="d-flex program_modal_head mt-4">
          <h3 className="pr-3"> { data?.titleOfEvent } </h3>
          
        </section>

        <section className="d-flex mt-3">
        <p className="pending_date pr-4">
              <span>{new Date(data?.startDate).getDate()}</span>{" "}
              {months[new Date(data?.startDate).getMonth()]}
            </p>

          <p className="pending_time pt-1">
            <img src={bigClock} alt="clock" /> { `${formatAMPM(new Date(data?.startTime))} - ${formatAMPM(new Date(data?.endTime))}`  }
          </p>
        </section>

        <section className="event_schedule_modal_desc mt-5 p-4">
          <h4 className="pb-3">Description</h4>
          <p>
            { data?.eventDescription }
          </p>
        </section>

        <section className="event_schedule_visibility mt-4 mb-3">
          <p>
            Visibility : <span>Public</span> <img src={down} alt="down arrow" />
          </p>
        </section>

        <section className="mb-3">
          <button className="back-btn">Join Event</button>
        </section>

        <section className="event_link">
          <a href={data?.joinWith} target="_blank">
            <img className="pr-3" src={location} alt="location" />{" "}
            { data?.joinWith }
          </a>
        </section>

        <section className="mt-5">
          <p>Attendees</p>
          <div className="d-flex mt-4">
          {
            data?.attendees.map((item , i) => (
              <p className="col-lg-6 col-6"
               key={i}
               style={{width:'100%'}}
               >
              <img className="pr-3 rounded-circle" 
              style={{width:'60px', height:'60px', borderRadius:'60px'}}
               src={`https://ui-avatars.com/api/?name=${item?.name}`} alt="initial" /> { item?.name}
            </p>
            ))
          }
           
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
          <TextField label={"Day"} placeholder={moment(data?.endTime).format("MMM Do YY")} />
        </section>

        <section className="row mt-5">
          <div className="col-lg-5">
            <Select label={"Start time"} placeholder={moment(data?.startTime).format("MMM Do YY")} />
          </div>
          <div className="col-lg-5">
            <Select label={"End time"} placeholder={moment(data?.endTime).format("MMM Do YY")} />
          </div>
        </section>

        <section className="send_request mt-5">
          <a href="#!">Send Request</a>
        </section>

        <section className="mt-5 event_card_footer">
          <a href="#!">Add to schedule</a>
        </section>
      </section>
    </div>
  );
};




// addLocation: "adeneka"
// attendees: Array(2)
// 0:
// name: "Winner Airlines"
// profileId: "62585391a5101dc3e84a7c72"
// typeAcc: "startup"
// _id: "625a0e88dea2b329e70d9eb6"
// [[Prototype]]: Object
// 1: {profileId: '62401b6c823102167a32a885', name: 'zoeee', typeAcc: 'startup', _id: '625a0e88dea2b329e70d9eb7'}
// length: 2
// [[Prototype]]: Array(0)
// endDate: "Mon Mar 28 2022 21:24:48 GMT+0100 (West Africa Standard Time)"
// endTime: "Mon Mar 28 2022 21:24:48 GMT+0100 (West Africa Standard Time)"
// eventDescription: "Come and play"
// eventPicture: "https://ik.imagekit.io/er9sori5c2z/avatar_qhUBGX8bp?ik-sdk-version=javascript-1.4.3&updatedAt=1648773916584"
// joinWith: "https://meet.google.com/mer-thuh-cqr?pli=1&authuser=1"
// notifyMe: "Yes"
// startDate: "Mon Mar 28 2022 21:24:48 GMT+0100 (West Africa Standard Time)"
// startTime: "Mon Mar 28 2022 21:24:48 GMT+0100 (West Africa Standard Time)"
// titleOfEvent: "Meeting with client"
// visibility: "Yes"