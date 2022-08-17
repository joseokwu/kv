/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import {
    Button,
    SmallModal,
    TextArea,
    TextField,
} from "../../../../Startupcomponents";
import { RoadMapTodo } from "./components/RoadMapTodo";
import { MapPoint } from "./components/MapPoint";
import "./roadMap.css";
import moment from "moment";
import { NewGoalModal } from "./roadMap.styled";
import close from "../../../../assets/icons/closesm.svg";
import girl from "../../../../assets/icons/person2.svg";
import guy from "../../../../assets/icons/person3.svg";
import { useAuth } from "./../../../../hooks/useAuth";
import { Select, Form, DatePicker } from "antd";
import { TextareaCustom } from "./../../../../components/textArea/cutstomTextarea";
const { Option } = Select;

export const RoadMap = () => {
    const [showModal, setShowModal] = useState(false);
    const [newGoal, setNewgOAL] = useState(false);
    const { stateAuth } = useAuth();
    const [dataIndex, setDataIndex] = useState(0);
    const [subVal, setSubVal] = useState({});

    // console.log(stateAuth?.startupData?.roadMap);

    return (
        <div>
            {showModal ? (
                <SmallModal
                    id="addNewGoalModal"
                    title=""
                    closeModal={setShowModal}
                >
                    <AddNewGoalModal
                        index={dataIndex}
                        data={subVal}
                        closeModal={setShowModal}
                    />
                </SmallModal>
            ) : (
                <span></span>
            )}
            {newGoal ? (
                <SmallModal id="GoalModal" title="" closeModal={setNewgOAL}>
                    <AddGoal closeModal={setNewgOAL} />
                </SmallModal>
            ) : (
                <span></span>
            )}
            <h3 className="tab-section-title">Product Roadmap</h3>
            <section className="row">
                <div className="col-xl-4 col-lg-5 mb-4">
                    <article className="road-map-card">
                        <Button
                            style={{ cursor: "pointer", marginTop: "-1rem" }}
                            onClick={() => setNewgOAL(true)}
                            label="Add new goal"
                        />
                        {stateAuth?.startupData?.roadMap?.map((item, i) => (
                            <div
                                className="d-flex mb-4 mt-3"
                                onClick={() => {
                                    setSubVal(item);
                                    setDataIndex(i);
                                }}
                                style={{ columnGap: "1rem", cursor: "pointer" }}
                            >
                                <MapPoint color="#35D662" />
                                <span>
                                    <p className="point-title">{item?.title}</p>
                                    <p className="point-desc">
                                        {" "}
                                        {item?.description}
                                    </p>
                                </span>
                            </div>
                        ))}
                    </article>
                </div>

                <div className="col-xl-8 col-lg-7 mb-4">
                    {Object.keys(subVal).length > 0 && (
                        <article
                            className="road-map-card"
                            style={{ background: "white" }}
                        >
                            <section
                                className="d-flex align-items-center justify-content-between flex-wrap mb-5"
                                style={{ rowGap: 10 }}
                            >
                                <div
                                    className="d-flex align-items-center flex-wrap"
                                    style={{ rowGap: 10, columnGap: "1rem" }}
                                >
                                    <span className="road-map-tag">
                                        <div></div> Ongoing
                                    </span>
                                    <Button
                                        label="Completed"
                                        className="transparent-btn"
                                    />
                                </div>

                                <Button
                                    style={{ cursor: "pointer" }}
                                    data-target="#addNewGoalModal"
                                    onClick={() => setShowModal(true)}
                                    label="Add sub goal"
                                />
                            </section>

                            <section>
                                {subVal?.subgoals?.length > 0 &&
                                    subVal?.subgoals?.map((item, i) => {
                                        return (
                                            <RoadMapTodo
                                                index={dataIndex}
                                                data={item}
                                                progress={item?.progress}
                                                key={i}
                                            />
                                        );
                                    })}
                            </section>
                        </article>
                    )}
                </div>
            </section>
        </div>
    );
};

const AddGoal = ({ closeModal }) => {
    const { callUpdateStartupData } = useAuth();

    const onFinish = async (values) => {
        callUpdateStartupData({
            type: "roadMap",
            values: {
                ...values,
                subgoals: [],
            },
        });
        closeModal(false);
    };

    return (
        <NewGoalModal>
            <Form
                name="Road New Map"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <div className="border-bottom pb-4">
                    <h4>Add new goal</h4>
                    <span>In Idea stage</span>
                </div>
                <div className="my-4">
                    <TextField name={"title"} label="Title" rows={1} />
                </div>
                <div className="">
                    <TextareaCustom
                        name={"description"}
                        label="Description"
                        min={0}
                        showCount={false}
                        required={false}
                    />
                    <div>
                        <button type="submit" className="createGoal">
                            Create goal
                        </button>
                    </div>
                </div>
            </Form>
        </NewGoalModal>
    );
};

export const AddNewGoalModal = ({ closeModal, data, index }) => {
    const { stateAuth, updateProfile, updateStartupInfo } = useAuth();
    const [teamMem, setTeamMem] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [activities, setActivites] = useState([]);
    const [activitiesValue, setActVal] = useState("");
    const [date, setDate] = useState();

    const searchTeam = (value) => {
        setTeamMem(
            stateAuth?.startupData?.team?.coFounder.filter((item) =>
                item.firstName.includes(value)
            )
        );
    };

    const handleDate = (value) => {
        setDate(moment(value).format("YYYY-MM-DD"));
        console.log(moment(value).format("YYYY-MM-DD"));
    };

    const handleChange = useCallback((e) => {
        const { value } = e.target;
        if (value.trim() !== "") {
            searchTeam(value);
        }
    }, []);

    const addMem = (value) => {
        setTeamData([
            ...teamData.filter((item) => item.firstName !== value.firstName),
            value,
        ]);
    };
    const addActivities = () => {
        if (activitiesValue.trim() !== "") {
            setActivites([
                ...activities.filter(
                    (item) => item?.name.trim() !== activitiesValue
                ),
                { checked: false, name: activitiesValue },
            ]);
            setActVal("");
        }
    };

    const deleteItem = (value, type) => {
        switch (type) {
            case "Team":
                return setTeamData(
                    teamData.filter(
                        (item) => item.firstName !== value.firstName
                    )
                );
            case "Activities":
                return setActivites(
                    activities.filter((item) => item.name !== value.name)
                );
            default:
                return;
        }
    };

    const chekActivities = (value) => {
        console.log(value);
        setActivites(
            activities.map((item) => {
                if (item.name === value.name) {
                    item.checked = !item.checked;
                }
                return item;
            })
        );
    };

    const progressCheck = () => {
        let progress = activities.length;
        let completed = activities.filter(
            (item) => item.checked === true
        ).length;
        console.log(completed);
        if (progress < 10) {
            console.log(10 - progress);
            completed += 10 - progress;
            progress += 10 - progress;
        }
        return { progress, completed: completed * 10 };
    };

    const onFinish = async (values) => {
        const { progress, completed } = progressCheck();
        const newVal = {
            ...stateAuth.startupData,
            roadMap: stateAuth.startupData.roadMap?.map((item) => {
                if (item?.title === data?.title) {
                    item.subgoals = [
                        ...item.subgoals,
                        {
                            ...values,
                            activities,
                            team: teamData,
                            progress,
                            dueDate: date,
                            completed,
                        },
                    ];
                }
                return item;
            }),
        };
        console.log(stateAuth.startupData);
        // updateProfile('roadMap', newVal?.roadMap);
        updateStartupInfo();
        closeModal(false);
    };

    return (
        <NewGoalModal>
            <Form
                name="Road Map"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <div className="mx-3">
                    <div className="border-bottom pb-4">
                        <h4>Add new goal</h4>
                        <span> {data?.title} </span>
                    </div>
                    <div className="my-4">
                        <TextField name={"title"} label="Title" rows={1} />
                    </div>
                    <div className="">
                        <TextareaCustom
                            name={"description"}
                            label="Description"
                            min={0}
                            showCount={false}
                            required={false}
                        />
                    </div>
                    <div className="my-4 form-group">
                        <div>
                            <label> Search team members </label>
                        </div>
                        <TextField
                            name={"search"}
                            required={false}
                            onChange={handleChange}
                            placeholder={"Search for team members"}
                        />
                    </div>

                    <div className="my-4 form-group">
                        {teamMem.length > 0 && (
                            <ul className="">
                                {teamMem.map((item, i) => (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            addMem(item);
                                            setTeamMem([]);
                                        }}
                                    >
                                        {item?.firstName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {teamData.map((item, i) => (
                        <div
                            key={i}
                            className="d-flex justify-content-between mb-2"
                        >
                            <div className="d-flex">
                                <img
                                    src={item?.avatar}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "60px",
                                    }}
                                    alt="girl"
                                />
                                <article className="pt-2 ps-3">
                                    {" "}
                                    {`${item?.firstName} ${item?.lastName}`}{" "}
                                </article>
                            </div>
                            <div className="mt-2">
                                <img
                                    src={close}
                                    onClick={() => deleteItem(item, "Team")}
                                    alt="close"
                                    role="button"
                                />
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 mb-3">
                        <DatePicker
                            onChange={handleDate}
                            label="Due Date"
                            name={"dueDate"}
                        />
                    </div>
                    <div className="mt-4 mb-3">
                        <h6>Activities</h6>
                    </div>
                    <div className="d-flex activities">
                        <div className="my-4 form-group">
                            <TextField
                                required={false}
                                value={activitiesValue}
                                onChange={(e) => setActVal(e.target.value)}
                            />
                        </div>
                        <div className="w-25 my-4 mx-2">
                            <button type="button" onClick={addActivities}>
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="mt-4">
                        {activities.map((item, i) => (
                            <div
                                key={i}
                                className="d-flex justify-content-between mt-2"
                            >
                                <div className="d-flex">
                                    <input
                                        className="mt-2"
                                        onChange={() => {}}
                                        onClick={() => chekActivities(item)}
                                        type="radio"
                                        checked={item?.checked}
                                    />
                                    <p className="pt-1 ps-3">{item.name}</p>
                                </div>
                                <div className="mt-1">
                                    <img
                                        src={close}
                                        onClick={() =>
                                            deleteItem(item, "Activities")
                                        }
                                        alt="close"
                                        role="button"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between my-5">
                        <button className="can">Cancel</button>
                        <button type="submit" className="createGoal">
                            Create goal
                        </button>
                    </div>
                </div>
            </Form>
        </NewGoalModal>
    );
};
