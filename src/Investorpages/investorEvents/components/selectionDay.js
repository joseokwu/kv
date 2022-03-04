import React from "react";
import dots from "../../../assets/icons/3dots.svg";
import bigClock from "../../../assets/icons/bigclock.svg";
import demo from "../../../assets/images/vidDemo.svg";
import doc from "../../../assets/images/doc.svg";
import { Button, Modal, Select, TextField } from "../../../Startupcomponents";
import down from "../../../assets/icons/downArrow.svg";
import location from "../../../assets/icons/locationSm.svg";
import name from "../../../assets/icons/initial.svg";
import { months } from "../../../utils/helpers";
import { ExceptionMap } from "antd/lib/result";

export const SelectionDay = ({data}) => {

  console.log(data)

  const dte = new Date();

  return (
    <div className="row" style={{ columnGap: 10 }}>
      <Modal id="eventScheduleModal" withHeader={false}>
        <EventScheduleModal />
      </Modal>
    
    {

      data && data.map((item, i) =>{
        let compareDate = new Date(item?.startTime)
        let endTime = new Date(item?.endTime) 
        return (

<div key={i} className={`col-lg-5 col-12   events_card_bg py-4 mt-4 ml-lg-4 px-4`}>
<section className="events_card d-flex justify-content-between">
<h3> { item?.titleOfEvent } </h3>
{/* <img src={dots} alt="" /> */}
</section>

<section className="d-flex justify-content-between mt-2">
<p className="pending_date pr-4">
<span>{ compareDate.getDate() } </span> <em className="mx-2" >{months[compareDate.getMonth()] }</em>
</p>

<p className="pending_time pt-1">
 { dte.getDate() === compareDate.getDate() ? ( <span class="accepted_tag">Ongoing</span>) : (<> <img src={bigClock} alt="clock" /> { `${compareDate.getHours()}:00${compareDate.getHours() >= 12 ? 'PM' : 'AM'} ` + "-" +  `${endTime.getHours()}:00${endTime.getHours() >=12 ? 'PM' : 'AM'} ` }  </> ) }
</p>
</section>

<section className="mt-4">
{  item?.image ? (<img
src={item?.image}
alt="demo"
style={{ width: "100%", height: "100%" }}
/>) : <span/> }
</section>

<section className="event_card_body mt-5">
<p>
  {
    item?.eventDescription
  }
</p>
</section>

{
 dte.getHours() === compareDate.getHours() ? (
  <section
  className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
  style={{ rowGap: 10 }}
>
  <div
    className="d-flex align-items-center"
    style={{ columnGap: 10 }}
  >
    <button className="se_join">Join Event</button>
    <button className="se_view">View details</button>
  </div>

  <section className="event_people">
    <img src={doc} alt="doc" />
    <img src={doc} alt="doc" />
    <img src={doc} alt="doc" />
  </section>
</section>
  ):(
  <section
className="d-flex align-items-center justify-content-between mt-3 event_card_footer flex-wrap"
style={{ rowGap: 10 }}
>
<div className="d-flex align-items-center" style={{ columnGap: 10 }}>
<button className="se_view">View details</button>

</div>

<section className="event_people">
<img src={doc} alt="doc" />
<img src={doc} alt="doc" />
<img src={doc} alt="doc" />
</section>
</section>
 )

}
 
</div> 
        )
       
      })
      
    }

    </div>
  );  
};

const EventScheduleModal = () => {
  return (
    <div className="px-4 pb-5">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal"
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
            <span>50</span> | September
          </p>

          <p className="pending_time pt-1">
            <img src={bigClock} alt="clock" /> 10:00pm - 12pm
          </p>
        </section>

        <section className="event_schedule_modal_desc mt-5 p-4">
          <h4 className="pb-3">Description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
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
          <a href="https://www.yebox.io/" target="_blank">
            <img className="pr-3" src={location} alt="location" />{" "}
            meet.google.com/jce-wata-fux
          </a>
        </section>

        <section className="mt-5">
          <p>Attendees</p>
          <div className="d-flex mt-4">
            <p className="pr-5">
              <img className="pr-3" src={name} alt="initial" /> Micheal Smith
            </p>
            <p className="pl-5">
              <img className="pr-3" src={name} alt="initial" /> Micheal Smith
            </p>
          </div>

          <div className="d-flex mt-4">
            <p className="pr-5">
              <img className="pr-3" src={name} alt="initial" /> Micheal Smith
            </p>
            <p className="pl-5">
              <img className="pr-3" src={name} alt="initial" /> Micheal Smith
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
          <TextField label={"Day"} placeholder={"Thursday 17th Oct 2021"} />
        </section>

        <section className="row mt-5">
          <div className="col-lg-5">
            <Select label={"Start time"} placeholder={"Time"} />
          </div>
          <div className="col-lg-5">
            <Select label={"End time"} placeholder={"Time"} />
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
