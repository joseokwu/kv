import React, { useState } from "react";
import { Modal, Select, TextField, Button } from "../../../components";
import { SmallModal } from "../../../Startupcomponents";
import edit from "../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import { Form, DatePicker, TimePicker } from "antd";
import moment from "moment";

export const AddAvailability = ({
    openAvailabilityModal,
    setopenAvailabilityModal,
}) => {
    const [availabilityList, setAvailabilityList] = useState([]);
    const [formValues, setFormValues] = useState({
        date: undefined,
        startTime: undefined,
        endTime: undefined,
    });
    const onSubmit = () => {
        console.log(formValues);
        setAvailabilityList([...availabilityList, formValues]);
        // setFormValues({
        //     date: undefined,
        //     startTime: undefined,
        //     endTime: undefined,
        // });
        // closeModal();
    };

    return (
        <div>
            {openAvailabilityModal && (
                <SmallModal
                    title="Add Availability"
                    id="addAvailable"
                    closeModal={(val) => {
                        setopenAvailabilityModal(val);
                    }}
                >
                    <Form
                        name="Add-Availability"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={onSubmit}
                        style={{ height: "calc(100% - 88px)" }}
                    >
                        <section className="row h-100">
                            <div className="px-0">
                                <div className="mb-0 col-lg-6 mb-4">
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

                                <div className="mb-0 col-lg-6 mb-4">
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

                                <div className="col-12 mb-4">
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
                                                message:
                                                    "Please select the date you are available",
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
                                                    date: new Date(
                                                        dateString
                                                    ).toISOString(),
                                                });
                                                return dateString;
                                            }}
                                            handleDateInput
                                        />
                                    </Form.Item>
                                </div>

                                <div className="col-12 border-top py-4">
                                    {availabilityList?.map((item) => (
                                        <AddedAvailability data={item} />
                                    ))}
                                    {/* <AddedAvailability /> */}
                                    {/* <AddedAvailability />
                        <AddedAvailability /> */}
                                </div>
                            </div>
                            <div className="mb-4 text-right mt-auto">
                                <Button label="Add" variant="secondary" />
                            </div>
                        </section>
                    </Form>
                </SmallModal>
            )}
        </div>
    );
};

const AddedAvailability = ({ data }) => {
    return (
        <div className="d-flex align-items-center justify-content-between availability mb-3">
            <p className="mb-0">
                {new Date(data?.date)?.toDateString()} (From{" "}
                {new Date(
                    "2022-01-01T" + data?.startTime + "Z"
                ).toLocaleTimeString("en-us", {
                    timeZone: "UTC",
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                })}{" "}
                - To{" "}
                {new Date(
                    "2022-01-01T" + data?.endTime + "Z"
                ).toLocaleTimeString("en-us", {
                    timeZone: "UTC",
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                })}
                )
            </p>
            <section>
                <img src={edit} alt="edit" className="mr-2" />
                <img src={deleteIcon} alt="delete" />
            </section>
        </div>
    );
};
