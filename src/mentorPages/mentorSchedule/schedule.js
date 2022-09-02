import React, { useEffect, useState } from "react";
import { Button, Calender, TextArea } from "../../mentorComponents";
import down from "../../assets/icons/downArrow.svg";
import "./schedule.css";
import { Form, DatePicker, TimePicker, Select } from "antd";
import { getAllSchedule } from "./../../services/schedule";
import { CircularLoader } from "../../components/CircluarLoader";
import { useAuth } from "../../hooks";
import moment from "moment";
import {
    TinyModal,
    Modal,
    ModalCus,
    SmallModal,
} from "../../Startupcomponents";
import { TextField } from "../../Startupcomponents";
import { zoomRegExp, googlemeetRegExp } from "../../utils/utils";

const { Option } = Select;

export const MentorSchedule = () => {
    const [schedules, setSchedule] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openAvailabilityModal, setopenAvailabilityModal] = useState(false);
    const [openCreateScheduleModal, setopenCreateScheduleModal] =
        useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await getAllSchedule();
            setSchedule(res?.dataSource);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();

        return () => {
            setSchedule();
        };
    }, []);

    return (
        <div className="px-4 pb-5 mx-3 my-4">
            {openAvailabilityModal && (
                <TinyModal
                    title="Add Availability"
                    closeModal={(val) => {
                        setopenAvailabilityModal(val);
                    }}
                >
                    <AddAvailability closeModal={setopenAvailabilityModal} />
                </TinyModal>
            )}

            {openCreateScheduleModal && (
                <SmallModal
                    title="Create Call Schedule"
                    closeModal={setopenCreateScheduleModal}
                >
                    <CreateCallSchedule
                        closeModal={setopenCreateScheduleModal}
                    />
                </SmallModal>
            )}

            <div className="row schedule  mb-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>My Schedule</h3>
                    </div>
                    <div className="d-flex">
                        <section className="mt-2 mr-3 my_add_ava">
                            <span
                                onClick={() => setopenAvailabilityModal(true)}
                            >
                                Add to Availability
                            </span>
                        </section>

                        <section className="mt-2 my_schedule_create">
                            <span
                                onClick={() => setopenCreateScheduleModal(true)}
                            >
                                Create Schedule
                            </span>
                        </section>
                    </div>
                </div>
            </div>

            <div>
                {loading ? (
                    <CircularLoader color="blue" />
                ) : (
                    <Calender data={schedules && schedules} />
                )}
            </div>
        </div>
    );
};

const AddAvailability = ({ closeModal }) => {
    const [formValues, setFormValues] = useState({
        date: "",
        startTime: "",
        endTime: "",
    });
    const onSubmit = () => {
        closeModal();
    };
    const { stateAuth } = useAuth();

    return (
        <Form
            name="Add-Availability"
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={onSubmit}
            // className="px-3"
        >
            <div className="pb-3">
                {/* <TextArea
                    label={"Date"}
                    placeholder={"Thursday 17th Oct 2021"}
                    rows={1}
                /> */}
                <Form.Item
                    name="date"
                    label="Date"
                    initialValue={
                        formValues?.date ? moment(formValues?.date) : undefined
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please select the date you are available",
                        },
                    ]}
                >
                    <DatePicker
                        className="col-md-12 py-2 px-2"
                        id="date"
                        // name="start"
                        defaultValue={
                            formValues?.date
                                ? moment(formValues?.date)
                                : undefined
                        }
                        format={"YYYY-MM-DD"}
                        onChange={(_, dateString) => {
                            console.log(dateString);
                            setFormValues({
                                ...formValues,
                                date: new Date(dateString).toISOString(),
                            });
                            return dateString;
                        }}
                        handleDateInput
                    />
                </Form.Item>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <Form.Item
                            name="startTime"
                            label="Start Time"
                            initialValue={
                                formValues?.startTime
                                    ? formValues?.startTime
                                    : undefined
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select the Start Time",
                                },
                            ]}
                        >
                            <TimePicker
                                className="col-md-12 py-2 px-2"
                                id="startTime"
                                // name="start"
                                defaultValue={
                                    formValues?.startTime
                                        ? formValues?.startTime
                                        : undefined
                                }
                                onChange={(_, timeString) => {
                                    console.log(timeString);
                                    setFormValues({
                                        ...formValues,
                                        startTime: timeString,
                                    });
                                    return timeString;
                                }}
                                handleDateInput
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6">
                        <Form.Item
                            name="endTime"
                            label="End Time"
                            initialValue={
                                formValues?.endTime
                                    ? formValues?.endTime
                                    : undefined
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select the End Time",
                                },
                            ]}
                        >
                            <TimePicker
                                className="col-md-12 py-2 px-2"
                                id="endTime"
                                // name="end"
                                defaultValue={
                                    formValues?.endTime
                                        ? formValues?.endTime
                                        : undefined
                                }
                                onChange={(_, timeString) => {
                                    console.log(timeString);
                                    setFormValues({
                                        ...formValues,
                                        endTime: timeString,
                                    });
                                    return timeString;
                                }}
                                handleDateInput
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="text-right mt-4">
                    <Button
                        variant={`btn_main btn_secondary`}
                        label={"Add"}
                        type="submit"
                    />
                </div>
            </div>
        </Form>
    );
};

const CreateCallSchedule = ({ closeModal }) => {
    const meetTypes = ["Google Meet", "Zoom"];
    const visibilities = ["Public", "Private"];
    const notifyTimes = [10, 30];

    const [formValues, setFormValues] = useState({
        date: "",
        startTime: "",
        endTime: "",
        meetType: "",
        visibility: "",
        // meetType: meetTypes[0],
    });
    const onSubmit = () => {
        closeModal();
    };
    return (
        <Form
            name="Create-Call-Schedule"
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={onSubmit}
            // className="px-3"
        >
            <div className="my-3">
                <section className="">
                    <TextField
                        label={"Event Title"}
                        placeholder={"Enter event title"}
                        required={true}
                        rows={"1"}
                        name="title"
                        value={formValues?.title}
                        // onChange={(e) => handleChange(e, "position")}
                    />
                </section>

                <section className="mt-4">
                    <TextField
                        label={"Description"}
                        placeholder={"Describe event"}
                        required={true}
                        rows={"1"}
                        name="description"
                        value={formValues?.Description}
                        // onChange={(e) => handleChange(e, "position")}
                    />
                </section>

                <section className="mt-4">
                    <TextField
                        label={"Invite"}
                        placeholder={"Choose a startup / Mentor / Investor"}
                        required={true}
                        rows={"1"}
                        name="invite"
                        value={formValues?.invite}
                        // onChange={(e) => handleChange(e, "position")}
                    />
                </section>

                <section className="mt-4">
                    <Form.Item
                        name="date"
                        label="Date"
                        initialValue={
                            formValues?.date
                                ? moment(formValues?.date)
                                : undefined
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please select the call date",
                            },
                        ]}
                    >
                        <DatePicker
                            className="col-md-12 py-2 px-2"
                            id="date"
                            // name="start"
                            defaultValue={
                                formValues?.date
                                    ? moment(formValues?.date)
                                    : undefined
                            }
                            format={"YYYY-MM-DD"}
                            onChange={(_, dateString) => {
                                console.log(dateString);
                                setFormValues({
                                    ...formValues,
                                    date: new Date(dateString).toISOString(),
                                });
                                return dateString;
                            }}
                            handleDateInput
                        />
                    </Form.Item>
                </section>

                <section className="row mt-4">
                    <div className="col-lg-6">
                        <Form.Item
                            name="startTime"
                            label="Start Time"
                            initialValue={
                                formValues?.startTime
                                    ? formValues?.startTime
                                    : undefined
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select the Start Time",
                                },
                            ]}
                        >
                            <TimePicker
                                className="col-md-12 py-2 px-2"
                                id="startTime"
                                // name="start"
                                defaultValue={
                                    formValues?.startTime
                                        ? formValues?.startTime
                                        : undefined
                                }
                                onChange={(_, timeString) => {
                                    console.log(timeString);
                                    setFormValues({
                                        ...formValues,
                                        startTime: timeString,
                                    });
                                    return timeString;
                                }}
                                handleDateInput
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6">
                        <Form.Item
                            name="endTime"
                            label="End Time"
                            initialValue={
                                formValues?.endTime
                                    ? formValues?.endTime
                                    : undefined
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select the End Time",
                                },
                            ]}
                        >
                            <TimePicker
                                className="col-md-12 py-2 px-2"
                                id="endTime"
                                // name="end"
                                defaultValue={
                                    formValues?.endTime
                                        ? formValues?.endTime
                                        : undefined
                                }
                                onChange={(_, timeString) => {
                                    console.log(timeString);
                                    setFormValues({
                                        ...formValues,
                                        endTime: timeString,
                                    });
                                    return timeString;
                                }}
                                handleDateInput
                            />
                        </Form.Item>
                    </div>
                </section>

                <section className="create_call_visibility mt-4">
                    <Form.Item
                        name="visibility"
                        label="Visibility:"
                        initialValue={formValues?.visibility}
                        rules={[
                            {
                                required: true,
                                message: "Please select a visibility",
                            },
                        ]}
                    >
                        <Select
                            id="visibility"
                            value={formValues?.visibility}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    visibility: e,
                                })
                            }
                        >
                            {visibilities.map((item, i) => (
                                <Option value={item} key={i}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </section>

                <section className="create_call_visibility mt-4">
                    <Form.Item
                        name="meetType"
                        label="Join with :"
                        initialValue={formValues?.meetType}
                        rules={[
                            {
                                required: true,
                                message: "Please select a meeting Platform",
                            },
                        ]}
                    >
                        <Select
                            id="meetType"
                            value={formValues?.meetType}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    meetType: e,
                                })
                            }
                        >
                            {meetTypes.map((item, i) => (
                                <Option value={item} key={i}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </section>

                <section className="create_call_visibility mt-4">
                    {formValues.meetType === "Google Meet" && (
                        <Form.Item
                            name="googlemeet"
                            label="Google Meet"
                            initialValue={formValues?.googlemeet}
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please enter a valid google meet link",
                                    pattern: googlemeetRegExp,
                                },
                            ]}
                        >
                            <TextField
                                // label={"Google Meet"}
                                type="text"
                                // name="googlemeet"
                                id="googlemeet"
                                value={formValues?.googlemeet}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        googlemeet: e,
                                    })
                                }
                                placeholder={"Enter Google Meet Link"}
                                required={true}
                            />
                        </Form.Item>
                    )}
                    {formValues.meetType === "Zoom" && (
                        <Form.Item
                            name="zoom"
                            label="Zoom Link"
                            initialValue={formValues?.zoom}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a valid Zoom link",
                                    pattern: zoomRegExp,
                                },
                            ]}
                        >
                            <TextField
                                // label={"Google Meet"}
                                type="text"
                                // name="zoom"
                                id="zoom"
                                value={formValues?.zoom}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        zoom: e,
                                    })
                                }
                                placeholder={"Enter Zoom Link"}
                                required={true}
                            />
                        </Form.Item>
                    )}
                </section>

                <section className="create_call_visibility mt-4">
                    <Form.Item
                        name="notifyMe"
                        label="Notify me:"
                        initialValue={formValues?.notifyMe}
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please select a notification alert method",
                            },
                        ]}
                    >
                        <Select
                            id="notifyMe"
                            value={formValues?.notifyMe}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    notifyMe: e,
                                })
                            }
                        >
                            {notifyTimes.map((item, i) => (
                                <Option value={item} key={i}>
                                    {`${item} minutes before`}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </section>

                <div className="text-right mt-4">
                    <Button
                        variant={`btn_main btn_secondary`}
                        label={"Create"}
                    />
                </div>
            </div>
        </Form>
    );
};
