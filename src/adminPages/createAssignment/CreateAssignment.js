import React, { useState } from "react";
import { Form } from "antd";
import { Button, GoBack, Select, TextArea, TextField } from "../../components";
import download from "../../assets/icons/download.svg";
import apple from "../../assets/icons/appleSmall.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import styles from "./createAssignment.module.css";
// import { debounce } from "lodash";
import { search, createPrograms } from "../../services";
import { mergeDateTime } from "../../utils/helpers";
import { UploadProgramInfo } from "../programs/components/UploadProgramInfo";

export const CreateAssignment = () => {
    const [programs, setPrograms] = useState("Meeting");
    const [file, setFile] = useState("");
    const [sub, setSub] = useState([]);

    const [mentorInput, setMentorInput] = useState("");
    const [mentorArr, setMentorArr] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState({});

    const [startupInput, setStartupInput] = useState("");
    const [startupArr, setStartupArr] = useState([]);
    const [selectedstartups, setSelectedStartups] = useState({});

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
        // setMentorArr(res?.data);
    };

    return (
        <div className="py-5 px-5">
            <GoBack />
            <Form
                onFinish={(values) => {
                    values.programs = programs;
                    values.deadlineTime = mergeDateTime(
                        values.deadlineDay,
                        values.deadlineTime
                    );
                    values.assignmentFile = file;
                    createPrograms(values);
                    console.log(values);
                }}
            >
                <section className={`mt-4 ${styles.createProgram}`}>
                    <h3 className="border-bottom pb-4">Create Assignment</h3>

                    {/* <Select
                        label="Programs"
                        className="max_fill mb-4"
                        name="programs"
                        options={["Meeting", "Stand-up", "Board-meeting"]}
                        required={true}
                        defaultValue={programs}
                        onChange={(ev) => console.log(ev.target.value)}
                    /> */}
                    <div>
                        Mentor:
                        <div className="d-flex flex-row align-items-center gap-3">
                            <img
                                src={selectedMentor?.personalDetail?.logo}
                                alt="logo"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                }}
                            />
                            <p className="w-100 p-3">
                                {Object.entries(selectedMentor).length > 0
                                    ? `${selectedMentor?.personalDetail?.firstname} ${selectedMentor?.personalDetail?.lastname}`
                                    : " "}
                            </p>
                        </div>
                    </div>

                    <section className="search-input mb-3">
                        <input
                            type="search"
                            placeholder="Search mentor list"
                            value={mentorInput}
                            onChange={(ev) => setMentorInput(ev.target.value)}
                        />
                        <Button
                            label="Search"
                            type="button"
                            className="mt-3"
                            loading={false}
                            onClick={async () => {
                                await searchMentor(mentorInput);
                                console.log("fetched");
                            }}
                        />
                    </section>
                    {mentorArr?.map((mentor, i) => {
                        return (
                            <section
                                className={styles.mentor}
                                ke={`invites-${i}`}
                                onClick={() => {
                                    setSelectedMentor(mentor);
                                    setMentorArr([]);
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

                    <TextField
                        label="Topic"
                        className="max_fill mb-4"
                        name="topic"
                        required={true}
                    />

                    <TextArea
                        label="Description"
                        className="max_fill mb-4"
                        rows="4"
                        name="description"
                    />
                    <div className={`mb-4 ${styles.wrapInputFile}`}>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={(ev) => {
                                setFile(ev.target.files[0].name);
                            }}
                        />
                        <img src={download} alt="download" className="mb-3" />
                        <p className={styles.drag}>Drag & Drop</p>
                        <p className={styles.info}>
                            Drag files or click here to upload
                        </p>
                        <Button label="Upload Files" onClick={() => {}} />
                    </div>

                    {/* <UploadProgramInfo /> */}

                    <TextField
                        label="Deadline (day)"
                        className="mb-4"
                        type="date"
                        name="deadlineDay"
                        required={true}
                    />

                    <article className="row">
                        <div className="col-lg-4">
                            <TextField
                                type="time"
                                className="max_fill mb-4"
                                label="Deadline Time"
                                name="deadlineTime"
                            />
                        </div>
                    </article>

                    <div
                        className="d-flex align-items-center justify-content-end space-out"
                        style={{ marginBottom: -30 }}
                    >
                        <label>
                            <input
                                type="checkbox"
                                name="all"
                                id="all"
                                className="mr-1"
                            />
                            Add all
                        </label>
                    </div>
                    {/* <Select
                        label="Add Startups"
                        className="max_fill mb-4"
                        placeholder="Enter email address"
                        options={onChange()}
                    /> */}
                    <div>
                        Startup:
                        <div className="d-flex flex-row align-items-center gap-3">
                            <img
                                src={selectedMentor?.personalDetail?.logo}
                                alt="logo"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                }}
                            />
                            <p className="w-100 p-3">
                                {Object.entries(selectedMentor).length > 0
                                    ? `${selectedMentor?.personalDetail?.firstname} ${selectedMentor?.personalDetail?.lastname}`
                                    : " "}
                            </p>
                        </div>
                    </div>

                    <section className="search-input mb-3">
                        <input
                            type="search"
                            placeholder="Search mentor list"
                            value={startupInput}
                            onChange={(ev) => setStartupInput(ev.target.value)}
                        />
                        <Button
                            label="Search"
                            type="button"
                            className="mt-3"
                            loading={false}
                            onClick={async () => {
                                await searchStartup(startupInput);
                                console.log("fetched");
                            }}
                        />
                    </section>
                    {mentorArr?.map((mentor, i) => {
                        return (
                            <section
                                className={styles.mentor}
                                ke={`invites-${i}`}
                                onClick={() => {
                                    setSelectedMentor(mentor);
                                    setMentorArr([]);
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
                </section>

                <section
                    className={`d-flex justify-content-end ${styles.btnWrapper}`}
                >
                    <Button label="Cancel" variant="gray" />
                    <Button
                        label="Create Assignment"
                        variant="secondary"
                        type="Submit"
                    />
                </section>
            </Form>
        </div>
    );
};
