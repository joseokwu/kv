import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { Button, GoBack, Select, TextArea, TextField } from "../../components";
import { sectors } from "../../utils/utils";
import searchIcon from "../../assets/icons/searchSm.svg";
import { search, createPrograms } from "../../services";
import closeIcon from "../../assets/icons/closesm.svg";
import { mergeDateTime } from "../../utils/helpers";
import apple from "../../assets/icons/appleSmall.svg";
import mentorPic from "../../assets/images/teamMember.svg";
import copyIcon from "../../assets/icons/copy.svg";
import styles from "./createProgram.module.css";

export const CreateProgram = () => {
    const [sector, setSector] = useState(sectors[0]);
    const [notifyMe, setNotifyMe] = useState("30 minutes");
    const [eventDate, setEventDate] = useState("");

    const [mentorInput, setMentorInput] = useState("");
    const [mentorArr, setMentorArr] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState({});
    const [selectedMentorObj, setSelectedMentorObj] = useState({});

    const [startupInput, setStartupInput] = useState("");
    const [startupArr, setStartupArr] = useState([]);
    const [selectedStartups, setSelectedStartups] = useState([]);
    const [selectedStartupsArr, setSelectedStartupsArr] = useState([]);

    const searchMentor = async (value) => {
        const res = await search({
            value,
            type: "mentor_search",
        });
        setMentorArr(res?.data);
    };

    const searchStartup = async (value) => {
        const res = await search({
            value,
            type: "startup_search",
        });
        console.log(res);
        setStartupArr(res?.data);
    };

    const newMentorObj = ({ userId, personalDetail }) => ({
        profileId: userId,
        name: `${personalDetail?.firstname} ${personalDetail?.lastname}`,
        email: personalDetail?.email,
        logo: personalDetail?.logo,
    });

    const newStartupObj = ({ _id, startUpProfile }) => ({
        profileId: _id,
        name: startUpProfile?.startupName,
        email: startUpProfile?.contactInfo?.companyEmail,
        logo: startUpProfile?.logo,
    });

    useEffect(() => {
        console.log(selectedMentor);
        console.log("newMentorObj", newMentorObj(selectedMentor));
        setSelectedMentorObj(newMentorObj(selectedMentor));
    }, [selectedMentor?.userId]);

    useEffect(() => {
        selectedStartups?.forEach((selectedStartup) => {
            console.log(newStartupObj(selectedStartup));
            setSelectedStartupsArr([
                ...selectedStartupsArr,
                newStartupObj(selectedStartup),
            ]);
        });
        console.log(selectedStartupsArr);
    }, [Object.entries(selectedStartups)?.length]);

    return (
        <div className="py-5 px-5">
            <GoBack />
            <Form
                onFinish={async (values) => {
                    values.sector = sector;
                    values.notifyMe = notifyMe;
                    values.startTime = mergeDateTime(
                        eventDate,
                        values.startTime
                    );
                    values.endTime = mergeDateTime(eventDate, values.endTime);
                    values.duration = 2;
                    values.guest = selectedMentorObj;
                    values.attendees = selectedStartupsArr;
                    console.log(values);
                    await createPrograms(values);
                }}
            >
                <section className={`mt-4 ${styles.createProgram}`}>
                    <h3 className="border-bottom pb-4">Create Program</h3>

                    <Select
                        label="Choose sector from sector list"
                        className="max_fill mb-4"
                        options={sectors}
                        name="sector"
                        defaultValue={sector}
                        onChange={(ev) => setSector(ev.target.value)}

                    />

                    <TextField
                        label="Topic"
                        className="max_fill mb-4"
                        name="topic"
                        required={true}

                    />

    
                    <Form.Item name="description">
                        <TextArea
                            label="Session Description"
                            rows={4}
                            className="max_fill mb-4"
                            name="session_description"
                        />
                    </Form.Item>
                    <div className="mb-4">
                        <div className="mb-3">
                            Invite Mentor:
                            {Object.entries(selectedMentor)?.length > 0 && (
                                <div className="d-flex flex-row align-items-center gap-3">
                                    <img
                                        src={
                                            selectedMentor?.personalDetail?.logo
                                        }
                                        alt="logo"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <p className="w-100 p-3">
                                        {Object.entries(selectedMentor).length >
                                        0
                                            ? `${selectedMentor?.personalDetail?.firstname} ${selectedMentor?.personalDetail?.lastname}`
                                            : " "}
                                    </p>
                                </div>
                            )}
                        </div>
                        <section className="d-flex flex-row align-items-center gap-3 mb-3">
                            <div className="search-input">
                                <img src={searchIcon} alt="search" />
                                <input
                                    type="search"
                                    placeholder="Search for mentor"
                                    value={mentorInput}
                                    onChange={(ev) =>
                                        setMentorInput(ev.target.value)
                                    }
                                />
                            </div>
                            <Button
                                label="Search"
                                type="button"
                                loading={false}
                                onClick={async () => {
                                    await searchMentor(mentorInput);
                                    console.log("fetched");
                                }}

                    <TextArea
                        label="Session Description"
                        rows={4}
                        className="max_fill mb-4"
                        name="description"
                        onChange={(ev) => {
                            setSessionDesc(ev.target.value);
                        }}
                    />
                    <div className="mb-4 pb-3 ">
                        <p className="mb-3">Invite Mentor</p>
                        <section className="search-input mb-3">
                            <img src={searchIcon} alt="search" />
                            <input
                                type="search"
                                placeholder="Search for mentor"

                            />
                        </section>
                    </div>

                    <div id="added-mentors" className={styles.mentorList}>
                        {mentorArr?.map((mentor, i) => {
                            return (
                                <section
                                    className={styles.mentor}
                                    ke={`invites-${i}`}
                                    onClick={() => {
                                        setSelectedMentor(mentor);
                                        setMentorArr([]);
                                        console.log(selectedMentor);
                                    }}
                                >
                                    <div className="d-flex align-items-center space-out">
                                        <img
                                            src={mentor?.personalDetail?.logo}
                                            alt="logo"
                                        />
                                        <h5 className="mb-0">
                                            {`${mentor?.personalDetail?.firstname} ${mentor?.personalDetail?.lastname}`}
                                        </h5>
                                    </div>
                                    <img src={closeIcon} alt="close" />
                                </section>
                            );
                        })}
                    </div>

                    <div className="mb-4">
                        <div className="mb-3">
                            Invite Startups:
                            {selectedStartups.map((startup) => (
                                <div className="d-flex flex-row align-items-center gap-3">
                                    <img
                                        src={startup?.startUpProfile?.logo}
                                        alt="logo"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <p className="w-100 p-3">
                                        {Object.entries(startup).length > 0
                                            ? startup?.startUpProfile
                                                  ?.startupName
                                            : " "}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <section className="d-flex flex-row align-items-center gap-3 mb-3">
                            <div className="search-input">
                                <img src={searchIcon} alt="search" />
                                <input
                                    type="search"
                                    placeholder="Search for startup"
                                    value={startupInput}
                                    onChange={(ev) =>
                                        setStartupInput(ev.target.value)
                                    }
                                />
                            </div>
                            <Button
                                label="Search"
                                type="button"
                                loading={false}
                                onClick={async () => {
                                    await searchStartup(startupInput);
                                }}
                            />
                        </section>
                    </div>

                    <div id="added-startups" className={styles.startupList}>
                        {startupArr?.map((startup, i) => {
                            return (
                                <section
                                    className={styles.mentor}
                                    ke={`invites-${i}`}
                                    onClick={() => {
                                        if (
                                            selectedStartups.filter(
                                                (star) =>
                                                    star._id === startup._id
                                            ).length === 0
                                        )
                                            setSelectedStartups([
                                                ...selectedStartups,
                                                startup,
                                            ]);
                                        setStartupArr([]);
                                    }}
                                >
                                    <div className="d-flex align-items-center space-out">
                                        <img
                                            src={startup?.startUpProfile?.logo}
                                            alt="logo"
                                        />
                                        <h5 className="mb-0">
                                            {
                                                startup?.startUpProfile
                                                    ?.startupName
                                            }
                                        </h5>
                                    </div>
                                    <img src={closeIcon} alt="close" />
                                </section>
                            );
                        })}
                    </div>

                    <TextField
                        label="Event Date"
                        className="mb-4"
                        type="date"
                        required={true}
                        onChange={(ev) => {
                            setEventDate(ev.target.value);
                        }}
                    />

                    <div className="row">
                        <article className="col-lg-4">
                            <TextField
                                type="time"
                                className="max_fill mb-4"
                                label="Start Time"
                                name="startTime"
                            />
                        </article>

                        <article className="col-lg-4">
                            <TextField
                                type="time"
                                className="max_fill mb-4"
                                label="End Time"
                                name="endTime"
                            />
                        </article>
                    </div>

                    <div className="d-flex align-items-center space-out mb-4">
                        <p>Join with:</p>
                        <Select
                            options={["Zoom", "Google Meet", "Skype"]}
                            defaultValue="Zoom"
                            name="meetOption"
                        />
                    </div>

                    <div
                        className={`d-flex align-items-center justify-content-between mb-4 ${styles.copyLink}`}
                    >
                        <TextField
                            // label="Workshop Title"
                            className="max_fill mb-4"
                            name="joinWith"
                            placeholder="meet.google.com/jce-wata-fux"
                            required={true}
                        />

                        <img src={copyIcon} alt="copy" />
                    </div>

                    <Select
                        label="Notify me"
                        className="mb-4"
                        placeholder="Select"
                        options={["10 minutes", "30 minutes", "1 hr"]}
                        defaultValue="30 minutes"
                        onChange={(ev) => setNotifyMe(ev.target.value)}
                    />

                    <div className="d-flex align-items-center justify-content-between">
                        <p>How often is this program?</p>

                        <article className="d-flex align-items-center space-out">
                            <label>
                                <input
                                    type="radio"
                                    name="occurrence"
                                    id="Once"
                                    className="mr-1"
                                />
                                Once
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="occurrence"
                                    id="Weekly"
                                    className="mr-1"
                                />
                                Weekly
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="occurrence"
                                    id="Monthly"
                                    className="mr-1"
                                />
                                Monthly
                            </label>
                        </article>
                    </div>
                </section>

                <section
                    className={`d-flex justify-content-end ${styles.btnWrapper}`}
                >
                    <Button label="Cancel" variant="gray" />
                    <Button label="Create Program" variant="secondary" />
                </section>
            </Form>
        </div>
    );
};
