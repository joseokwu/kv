import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Button, GoBack, Select, TextArea, TextField } from "../../components";
import download from "../../assets/icons/download.svg";
import searchIcon from "../../assets/icons/searchSm.svg";
import apple from "../../assets/icons/appleSmall.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import styles from "./createAssignment.module.css";
// import { debounce } from "lodash";
import { search, createAssignment } from "../../services";
import { mergeDateTime } from "../../utils/helpers";
import { useAuth } from "../../hooks";
import { UploadFile } from "../../components";
import { UploadProgramInfo } from "../programs/components/UploadProgramInfo";
import { upload } from "../../services";
// import updateProfile

export const CreateAssignment = () => {
    const { stateAuth } = useAuth();
    const [programs, setPrograms] = useState("Meeting");
    const [file, setFile] = useState("");
    const [sub, setSub] = useState([]);

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
                    values.programs = programs;
                    values.deadlineTime = mergeDateTime(
                        values.deadlineDay,
                        values.deadlineTime
                    );
                    values.assignmentFile = file;
                    values.mentor = selectedMentorObj;
                    values.assignees = selectedStartupsArr;
                    console.log(values);
                    await createAssignment(values);
                }}
            >
                <section className={`mt-4 ${styles.createProgram}`}>
                    <h3 className="border-bottom pb-4">Create Assignment</h3>

                    <Select
                        label="Programs"
                        className="max_fill mb-4"
                        name="programs"
                        options={["Meeting", "Stand-up", "Board-meeting"]}
                        required={true}
                        defaultValue={programs}
                        onChange={(ev) => setPrograms(ev.target.value)}
                    />
                    <div className="mb-3">
                        Invite Mentor:
                        {Object.entries(selectedMentor)?.length > 0 && (
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

                    <TextField
                        label="Topic"
                        className="max_fill mb-4"
                        name="topic"
                        required={true}
                    />

                    <Form.Item name="description">
                        <TextArea
                            label="Description"
                            className="max_fill mb-4"
                            rows="4"
                        />
                    </Form.Item>
                    <UploadFile
                        data={{
                            maxFiles: 1,
                            supportedMimeTypes: ["application/pdf"],
                            maxFileSize: 400,
                            extension: "KB",
                        }}
                        initData={[]}
                        onUpload={async (filesInfo) => {
                            const formData = new FormData();
                            formData.append("dir", "kv");
                            formData.append("ref", stateAuth.user?.userId);
                            formData.append("type", "pdf");
                            formData.append(0, filesInfo[0]?.file);

                            const response = await upload(formData);
                            console.log(response);
                            setFile(response?.path);
                        }}
                    />

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
                                        ? startup?.startUpProfile?.startupName
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
                    {startupArr?.map((startup, i) => {
                        return (
                            <section
                                className={styles.mentor}
                                ke={`invites-${i}`}
                                onClick={() => {
                                    if (
                                        selectedStartups.filter(
                                            (star) => star._id === startup._id
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
                                        {startup?.startUpProfile?.startupName}
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
