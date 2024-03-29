import React, { useEffect, useState } from "react";
// import { Tabs } from "../../Startupcomponents";
import { Tabs, Select } from "../../mentorComponents";
import "./mentorEvents.css";
import down from "../../assets/icons/downArrow.svg";
import { SelectionDay } from "./components/selectionDay";
import { getEvents } from "../../services/events";
import { PageLoader } from "../../components";

export const MentorEvents = ({ history }) => {
    const {
        location: { hash },
    } = history;

    const industry = [
        "Category: All",
        "Accounting",
        "Analytics",
        "Bike Rentals",
        "Cloud Computing",
        "Cloud Telephony",
        "Content Services",
        "CRM",
        "Customer Engagement",
        "Customer Support",
        "E-Learning",
        "Email Marketing",
        "Employee Benefit",
        "Finance",
        "Fitness",
        "Food and Beverages",
        "Garage Services",
        "Gifts and Confectionery",
        "Health and Wellness",
        "Home and Furnishing",
        "Hospitality",
        "Human Resources",
        "Insurance",
        "Investments",
        "IT Rentals",
        "Legal",
        "Loans",
        "Marketing",
        "Merchandise",
        "Messaging",
        "Personal Finance",
        "Printing",
        "Sales Support",
        "Salons and Spas",
        "Signing Solutions",
        "Travel",
        "Virtual Assistant",
    ];

    const [events, setEvents] = useState([]);
    const [selectionEvents, setSelectionEvents] = useState([]);
    const [demoEvents, setDemoEvents] = useState([]);
    const [pitchEvents, setPitchEvents] = useState([]);
    const [otherEvents, setOtherEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await getEvents();
            setEvents(res?.data);
            setSelectionEvents(() =>
                res?.data?.filter((x) => x.eventType === "selectionDay")
            );
            setDemoEvents(() =>
                res?.data?.filter((x) => x.eventType === "demoDay")
            );
            setPitchEvents(() =>
                res?.data?.filter((x) => x.eventType === "pitchSession")
            );
        } catch (e) {
            console.log(e);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderContent = () => {
        switch (hash) {
            case "#Selection Day":
                return <SelectionDay data={selectionEvents} />;

            case "#Demo Day":
                return <SelectionDay data={demoEvents} />;

            case "#Pitching Events":
                return <SelectionDay data={pitchEvents} />;

            case "#Other Events":
                return <SelectionDay data={events} />;

            default:
                return <SelectionDay data={selectionEvents} />;
        }
    };

    const tabItems = [
        "Selection Day",
        "Demo Day",
        "Pitching Events",
        "Other Events",
    ];

    if (loading) {
        return (
            <PageLoader
                dashboard={true}
                num={[selectionEvents, demoEvents, pitchEvents, events]}
            />
        );
    }
    return (
        <div className="mb-5">
            <div className="col-lg-12">
                <section className="container d-flex align-items-center justify-content-end mb-4">
                    {/* <p className="event_title">Events</p> */}
                    {/* <img src={searchIcon} alt="search" /> */}
                </section>
            </div>

            <div className="container row d-flex justify-content-between">
                <div className="col d-flex justify-content-between">
                    <Tabs tabItems={tabItems} />

                    <div className="mx-4">
                        {/* <button
              className="d-flex align-items-center sort-btn"
              style={{ columnGap: 7 }}
              data-toggle="dropdown"
            > */}
                        <Select
                            placeholder={"Sort by: Industry"}
                            options={industry}
                        />
                        {/* <span>
                <span>Sort by: </span> Industry
              </span>
              <img src={down} alt="down" /> */}
                        {/* </button> */}
                    </div>
                </div>
            </div>

            <div className="col-lg-12 col-xl-12 pt-3">
                <section className="mt-1">{renderContent()}</section>
            </div>
        </div>
    );
};
