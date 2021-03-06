import React , {useEffect, useState} from "react";
import { Button } from "../../components";
import { Calender } from "../../Startupcomponents/index";
import { AddAvailability } from "../investorSchedule/components/AddAvailability";
import { CreateCallSchedule } from "../investorSchedule/components/CreateCallSchedule";
import { getAllSchedule } from './../../services/schedule';

export const InvestorScheduleCalendar = () => {


  const [schedules, setSchedule] = useState(null);

  const fetchData = async() =>{
    const res = await getAllSchedule();
  
    setSchedule(res?.dataSource);
  }


useEffect(() =>{

  fetchData();

  return () =>{
    setSchedule()
  }

},[])

//console.log(schedules)

  return (
    <div className="wrapper">
      <CreateCallSchedule />
      <AddAvailability />
      <section className="d-flex align-items-center justify-content-end mb-4">
        {/* <h1 className="page-title">My Schedule</h1> */}
        <div
          className="d-flex align-items-center"
          style={{ columnGap: "1rem" }}
        >
          <Button
            label="Add Availability"
            data-toggle="modal"
            data-target="#addAvailable"
          />
          <Button
            label="Create Events"
            variant="secondary"
            data-toggle="modal"
            data-target="#createCallScheduleModal"
          />
        </div>
      </section>

      <section>
        <Calender data={schedules && schedules } />
      </section>
    </div>
  );
};
