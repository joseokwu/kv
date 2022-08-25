import React, { useState } from "react";
import { Modal, Button } from "../../../components";
import { css } from "styled-components/macro";
import { Form, DatePicker, TimePicker, Select } from "antd";
import { TextField } from "../../../Startupcomponents";
import close from "../../../assets/icons/grayClose.svg";
import copy from "../../../assets/icons/copy.svg";
import { GuestItem } from "./ScheduleModal";
import moment from "moment";
import { googlemeetRegExp, zoomRegExp } from "../../../utils/utils";

const { Option } = Select;

export const CreateCallSchedule = () => {
    const meetTypes = ["Zoom", "Google Meet"];
    const notifyOptions = ["30 minutes", "1 hour"];

    const [searchInput, setSearchInput] = useState("");
    const [formValues, setFormValues] = useState({
        date: undefined,
        startTime: undefined,
        endTime: undefined,
        meetType: meetTypes[0],
        googlemeet: "",
        zoom: "",
        notifyMe: notifyOptions[0],
    });

    const onFinish = () => {};

    return (
        <div>
            <Modal title="Create Call Schedule" id="createCallScheduleModal">
                <Form
                    name="contact"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <section className="px-4">
                        <div className="mb-4">
                            <TextField
                                label="Title of Schedule"
                                placeholder="Enter event title"
                                className="create-text-field"
                                name="title"
                                required={true}
                            />
                        </div>

                        <div className="mb-4">
                            <TextField
                                name="description"
                                label="Description"
                                placeholder="Describe event"
                                className="create-text-field"
                            />
                        </div>

                        <div className="mb-4">
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
                                        message: "Please select the date",
                                    },
                                ]}
                            >
                                <DatePicker
                                    id="endDate"
                                    name="endDate"
                                    className="date-input col-lg-12 ps-3 py-2"
                                    style={{ padding: "15px" }}
                                    value={
                                        formValues?.date
                                            ? moment(formValues?.date)
                                            : undefined
                                    }
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        setFormValues({
                                            ...formValues,
                                            date:
                                                dateString === ""
                                                    ? null
                                                    : dateString,
                                        });
                                    }}
                                    // required={true}
                                />
                            </Form.Item>
                        </div>

                        <article className="row">
                            <div className="col-lg-6 mb-4">
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
                                            message:
                                                "Please select the Start Time",
                                        },
                                    ]}
                                >
                                    <TimePicker
                                        className="col-md-12 py-2 px-2"
                                        id="startTime"
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

                            <div className="col-lg-6 mb-4">
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
                                            message:
                                                "Please select the End Time",
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
                        </article>

                        <div className="mb-4">
                            <p className="schedule-underlined">
                                Add another day
                            </p>
                        </div>

                        <div className="mb-4 pb-4 border-bottom">
                            <TextField
                                placeholder="Search startup list"
                                className="edit-schedule-input mb-3"
                                label="Add Attendees"
                                onChange={(e) => setSearchInput(e.target.value)}
                            />

                            {searchInput.length > 0 && (
                                <>
                                    {/* <span className="flex-align justify-content-between mb-3">
                                        <GuestItem name="Grace Winner" />
                                        <img src={close} alt="close" />
                                    </span>

                                    <span className="flex-align justify-content-between mb-3">
                                        <GuestItem name="Eric Isaac" />
                                        <img src={close} alt="close" />
                                    </span> */}
                                </>
                            )}
                        </div>

                        <div
                            className="d-flex align-items-center mb-4 w-100"
                            css={css`
                                > * {
                                    width: 100%;
                                }
                            `}
                        >
                            <Form.Item
                                name="meetType"
                                label="Join with :"
                                initialValue={formValues?.meetType}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select a meeting Platform",
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
                        </div>

                        <div className="copy-text-input mb-4">
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
                                        onChange={(e) => {
                                            setFormValues({
                                                ...formValues,
                                                googlemeet: e.target.value,
                                            });
                                            console.log(formValues);
                                        }}
                                        placeholder={"Enter Google Meet Link"}
                                        suffix={
                                            <img
                                                src={copy}
                                                alt="copy"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        formValues?.googlemeet
                                                    );
                                                }}
                                            />
                                        }
                                        // required={true}
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
                                            message:
                                                "Please enter a valid Zoom link",
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
                                        suffix={
                                            <img
                                                src={copy}
                                                alt="copy"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        formValues?.zoom
                                                    );
                                                }}
                                            />
                                        }
                                    />
                                </Form.Item>
                            )}
                        </div>

                        <div className="d-flex align-items-center mb-4">
                            <p className="mb-0 mr-2">Notify me:</p>
                            <div className="mr-3">
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
                                    {notifyOptions.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {item}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            {/* <Select options={["Minutes", "Hours"]} /> */}
                        </div>

                        <div className="mb-4 text-right">
                            <Button label="Create" variant="secondary" />
                        </div>
                    </section>
                </Form>
            </Modal>
        </div>
    );
};
