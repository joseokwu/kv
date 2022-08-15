import React, { useEffect, useState } from "react";
import { HeaderModal, ModalForm } from "./teams.styled";
import { ModalCus } from "../../../../Startupcomponents/modal/Modal";
import { DatePicker, Form, Select } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../../hooks/useAuth";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";
import { degreeList } from "../../../../constants/arrays";
import { TextField } from "../../../../Startupcomponents";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { letterOnly } from "../../../../utils/helpers";

const { Option } = Select;

export const TeamModal = ({
    handleClose,
    handleWorkDetails,
    editIndex,
    workExperience,
    isEditing,
    setIsEditing,
}) => {
    const [checked, setChecked] = useState(
        workExperience[editIndex]?.endDate === "present" ? true : false
    );
    const { updateProfile, stateAuth } = useAuth();

    const [startDate, setStartDate] = useState(
        workExperience[editIndex]?.startDate &&
            workExperience[editIndex]?.startDate !== "present"
            ? workExperience[editIndex]?.startDate
            : undefined
    );
    const [endDate, setEndDate] = useState(
        workExperience[editIndex]?.endDate &&
            workExperience[editIndex]?.endDate !== "present"
            ? workExperience[editIndex]?.endDate
            : undefined
    );

    const [formValues, setFormValues] = useState({
        companyName: isEditing ? workExperience[editIndex]?.companyName : "",
        location: isEditing ? workExperience[editIndex]?.location : "",
        position: isEditing ? workExperience[editIndex]?.position : "",
        responsibility: isEditing
            ? workExperience[editIndex]?.responsibility
            : "",
        startDate: isEditing ? workExperience[editIndex]?.startDate : "",
        endDate: isEditing ? workExperience[editIndex]?.endDate : "",
    });

    const onFinish = (values) => {
        if (isEditing) {
            const newList = [...stateAuth?.startupData?.team?.experience];

            newList[editIndex] = {
                ...values,
                index: editIndex,
                startDate: new Date(startDate).toISOString(),
                endDate: checked ? "present" : new Date(endDate).toISOString(),
                founder: true,
            };
            updateProfile("team", { experience: newList });
        } else {
            updateProfile("team", {
                experience: [
                    ...stateAuth?.startupData?.team?.experience,
                    {
                        ...values,
                        index: editIndex,
                        startDate: new Date(startDate).toISOString(),
                        endDate: checked
                            ? "present"
                            : new Date(endDate).toISOString(),
                        founder: true,
                    },
                ],
            });
        }

        handleClose(false);
    };

    return (
        <ModalCus
            closeModal={() => {
                setIsEditing(false);
                handleClose();
            }}
        >
            <div className="mx-2">
                <HeaderModal>
                    {isEditing ? "Edit Work Experience" : "Add Work Experience"}
                </HeaderModal>
                <hr style={{ background: "#323232" }} />
                <Form
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                >
                    <ModalForm className="row">
                        <div className="col-12 form-group">
                            <TextField
                                label="Company Name"
                                name={"companyName"}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        companyName: e.target.value,
                                    })
                                }
                                value={formValues.companyName}
                                required={true}
                                placeholder="eg; Knight Ventures"
                            />
                        </div>

                        <div className="col-12 form-group">
                            <TextField
                                label="Position"
                                name={"position"}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        position: e.target.value,
                                    })
                                }
                                value={formValues.position}
                                required={true}
                                placeholder="MD/CEO"
                            />
                        </div>
                        <div className="col-12 form-group">
                            <TextField
                                label="Location"
                                name={"location"}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        location: e.target.value,
                                    })
                                }
                                value={formValues.location}
                                required={true}
                                placeholder="United state of America"
                            />
                        </div>

                        <div className="col-12 form-group field">
                            <TextareaCustom
                                name={"responsibility"}
                                label={"Description"}
                                value={formValues.responsibility}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        responsibility: e.target.value,
                                    })
                                }
                                min={10}
                                maxLength={50}
                                onKeyPress={letterOnly}
                                placeholder="Description: 50 words maximum"
                            />
                        </div>
                        <div className="col-12 form-group">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>I currently work in this role</span>
                        </div>
                        <div className="col-6 form-group field">
                            <Form.Item
                                name="startDate"
                                label="Start Date"
                                initialValue={
                                    startDate ? moment(startDate) : undefined
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select the day you started",
                                    },
                                ]}
                            >
                                <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    className="date-input col-lg-12 ps-3 py-2"
                                    style={{ padding: "15px" }}
                                    // selected={startDate}
                                    value={
                                        startDate
                                            ? moment(startDate)
                                            : undefined
                                    }
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        setStartDate(
                                            dateString === ""
                                                ? null
                                                : dateString
                                        );
                                    }}
                                    // required={true}
                                />
                            </Form.Item>
                        </div>
                        {!checked && (
                            <div className="col-6 form-group field">
                                <Form.Item
                                    name="endDate"
                                    label="End Date"
                                    initialValue={
                                        endDate ? moment(endDate) : undefined
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select the day you ended",
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        id="endDate"
                                        name="endDate"
                                        className="date-input col-lg-12 ps-3 py-2"
                                        style={{ padding: "15px" }}
                                        // selected={endDate}
                                        value={
                                            endDate
                                                ? moment(endDate)
                                                : undefined
                                        }
                                        onChange={(date, dateString) => {
                                            console.log(dateString);
                                            setEndDate(
                                                dateString === ""
                                                    ? null
                                                    : dateString
                                            );
                                        }}
                                        // required={true}
                                    />
                                </Form.Item>
                            </div>
                        )}

                        <div
                            className="col-12 d-flex justify-content-end"
                            style={{ marginTop: "4rem" }}
                        >
                            <CustomButton
                                type="submit"
                                background="#021098"
                                // style={{ marginLeft: '7rem' }}
                            >
                                Save
                            </CustomButton>
                        </div>
                    </ModalForm>
                </Form>
            </div>
        </ModalCus>
    );
};

export const EducationModal = ({
    handleClose,
    handleWorkDetails,
    editIndex,
    isLocal = false,
    education,
    isEditing,
    setIsEditing,
}) => {
    const [checked, setChecked] = useState(
        education[editIndex]?.endDate === "present" ? true : false
    );
    const { updateProfile, stateAuth } = useAuth();
    const dateFormat = "YYYY-MM-DD";

    const [startDate, setStartDate] = useState(
        education[editIndex]?.startDate &&
            education[editIndex]?.startDate !== "present"
            ? education[editIndex]?.startDate
            : undefined
    );
    const [endDate, setEndDate] = useState(
        education[editIndex]?.endDate &&
            education[editIndex]?.endDate !== "present"
            ? education[editIndex]?.endDate
            : undefined
    );

    const [formValues, setFormValues] = useState({
        schoolName: isEditing ? education[editIndex]?.schoolName : "",
        course: isEditing ? education[editIndex]?.course : "",
        degreeType: isEditing
            ? education[editIndex]?.degreeType
            : degreeList[0].value,
        activities: isEditing ? education[editIndex]?.activities : "",
        startDate: isEditing ? education[editIndex]?.startDate : "",
        endDate: isEditing ? education[editIndex]?.endDate : "",
    });

    console.log(stateAuth?.startupData?.team?.education);

    const onFinish = (values) => {
        console.log(values);

        if (isEditing) {
            const newList = [...stateAuth?.startupData?.team?.education];
            newList[editIndex] = {
                ...values,
                index: editIndex,
                startDate: new Date(startDate).toISOString(),
                endDate: checked ? "present" : new Date(endDate).toISOString(),
                founder: true,
            };
            console.log(newList);
            updateProfile("team", { education: newList });
        } else {
            updateProfile("team", {
                education: [
                    ...stateAuth?.startupData?.team.education,
                    {
                        ...values,
                        index: editIndex,
                        startDate: new Date(startDate).toISOString(),
                        endDate: checked
                            ? "present"
                            : new Date(endDate).toISOString(),
                        founder: true,
                    },
                ],
            });
        }

        handleClose(false);
    };

    return (
        <ModalCus
            closeModal={() => {
                setIsEditing(false);
                handleClose();
            }}
        >
            <div className="mx-2">
                <HeaderModal>
                    {isEditing ? "Edit Education" : "Add Education"}
                </HeaderModal>
                <hr style={{ background: "#323232" }} />
                <Form
                    name="Education"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <ModalForm className="row">
                        <div className="col-12 form-group">
                            <TextField
                                label="School"
                                name={"schoolName"}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        schoolName: e.target.value,
                                    })
                                }
                                value={formValues.schoolName}
                                required={true}
                                placeholder="e.g. University of Glasgow"
                            />
                        </div>
                        <div className="col-12 form-group field">
                            <Form.Item
                                name="degreeType"
                                label="Degree"
                                initialValue={formValues.degreeType}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a degree type.",
                                    },
                                ]}
                            >
                                <Select
                                    id="degreeType"
                                    style={{ width: 200 }}
                                    placeholder="Enter Degree"
                                    name="degreeType"
                                    value={
                                        formValues.degreeType !== ""
                                            ? formValues.degreeType
                                            : degreeList[0].value
                                    }
                                    onChange={(e) => {
                                        console.log(e);
                                        setFormValues({
                                            ...formValues,
                                            degreeType: e,
                                        });
                                    }}
                                >
                                    {degreeList.map((item, i) => (
                                        <Option value={item.value} key={i}>
                                            {" "}
                                            {item.label}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="col-12 form-group">
                            <TextField
                                label="Field of study"
                                name={"course"}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        course: e.target.value,
                                    })
                                }
                                value={formValues.course}
                                required={true}
                                placeholder="e.g. Cyber Security"
                            />
                        </div>
                        <div className="col-12 form-group ">
                            <TextareaCustom
                                name={"activities"}
                                label={"Activities and societies"}
                                value={formValues.activities}
                                onChange={(e) =>
                                    setFormValues({
                                        ...formValues,
                                        activities: e.target.value,
                                    })
                                }
                                min={10}
                                maxLength={50}
                                onKeyPress={letterOnly}
                                placeholder="Enter Activities and Societies"
                            />
                        </div>
                        <div className="col-12 form-group">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <span>I currently school here.</span>
                        </div>

                        <div className="col-6 form-group field">
                            <Form.Item
                                name="startDate"
                                label="Entry Date"
                                initialValue={
                                    startDate ? moment(startDate) : undefined
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select the day you started",
                                    },
                                ]}
                            >
                                <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    className="date-input col-lg-12 ps-3 py-2"
                                    style={{ padding: "15px" }}
                                    // selected={startDate}
                                    value={
                                        startDate
                                            ? moment(startDate)
                                            : undefined
                                    }
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        setStartDate(
                                            dateString === ""
                                                ? null
                                                : dateString
                                        );
                                    }}
                                    // required={true}
                                />
                            </Form.Item>
                        </div>
                        {!checked && (
                            <div className="col-6 form-group field">
                                <Form.Item
                                    name="endDate"
                                    label="Graduation Date"
                                    initialValue={
                                        endDate ? moment(endDate) : undefined
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select the day you graduated",
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        id="endDate"
                                        name="endDate"
                                        className="date-input col-lg-12 ps-3 py-2"
                                        style={{ padding: "15px" }}
                                        // selected={endDate}
                                        value={
                                            endDate
                                                ? moment(endDate)
                                                : undefined
                                        }
                                        onChange={(date, dateString) => {
                                            console.log(dateString);
                                            setEndDate(
                                                dateString === ""
                                                    ? null
                                                    : dateString
                                            );
                                        }}
                                        // required={true}
                                    />
                                </Form.Item>
                            </div>
                        )}

                        <div
                            className="col-12 d-flex justify-content-end"
                            style={{ marginTop: "2rem" }}
                        >
                            <CustomButton
                                type="submit"
                                background="#021098"
                                // onClick={(e) => onSubmit(e)}
                                // style={{ marginLeft: '7rem' }}
                            >
                                Save
                            </CustomButton>
                        </div>
                    </ModalForm>
                </Form>
            </div>
        </ModalCus>
    );
};
