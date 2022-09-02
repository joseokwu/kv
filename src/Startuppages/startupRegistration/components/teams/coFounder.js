import React, { useState } from "react";
import {
    ImageWrapper,
    CoInputWrapper,
    FormWrapper,
    HeaderModal,
    ModalForm,
} from "./teams.styled";
import { css } from "styled-components/macro";
import { AiOutlineUser } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import {
    SkillTab,
    WorkExperience,
    Education,
} from "../../../../Startupcomponents";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useActivity } from "../../../../hooks/useBusiness";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Select, DatePicker, Form } from "antd";
import { TeamModal, EducationModal } from "./teamModal";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { CircularLoader } from "../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { toast } from "react-hot-toast";
import { team } from "./../../../../services/startUpReg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { upload } from "../../../../services/utils";
import {
    CountryDropdown,
    RegionDropdown,
    CountryRegionData,
} from "react-country-region-selector";
import { TextField } from "../../../../Startupcomponents";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import moment from "moment";
import { useAuth } from "../../../../hooks/useAuth";
import { letterOnly } from "../../../../utils/helpers";
import { linkedinRegExp, twitterRegExp } from "../../../../utils/utils";

const { Option } = Select;

export const CoFounder = ({
    handleClose,
    handleWorkDetails,
    editIndex,
    setEditIndex,
    workExperienceCoFounder,
    educationCoFounder,
    isEditing,
    setIsEditing,
}) => {
    const [skills, setSkills] = useState([]);
    const [phone, setPhone] = useState();
    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [showEducation, setShowEducation] = useState(false);
    const [showEduForm, setShowEduForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eduStartDate, setEduStartDate] = useState(new Date());
    const [eduEndDate, setEduEndDate] = useState(new Date());
    const [checked, setChecked] = useState(false);
    const [displayWorkExperience, setDisplayWorkExperience] = useState();
    const [displayEducation, setDisplayEducation] = useState();
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [localEducation, setLocalEducation] = useState([]);
    const [localExperience, setLocalExperience] = useState([]);
    const [dob, setDob] = useState(moment());
    const [inVal, setVal] = useState("");

    console.log(stateAuth);

    const [generalValues, setGeneralValues] = useState({
        avatar: avatar,
        briefIntroduction: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: dob,
        linkedIn: "",
        twitter: "",
        website: "",
        country: "",
        position: "",
        state: "",
        city: "",
        skills: skills,
        mobile_number: "",
        education: localEducation,
        experience: localExperience,
    });

    const [currentEducationValues, setCurrentEducationValues] = useState({
        schoolName: "",
        course: "",
        degree: "",
        activities: "",
        startDate: "",
        endDate: checked ? "present" : "",
    });

    const [currentExperienceValues, setCurrentExperienceValues] = useState({
        companyName: "",
        location: "",
        position: "",
        responsibility: "",
        startDate: "",
        endDate: checked ? "present" : endDate,
    });

    const handleChangeVal = (e) => {
        setVal(e.target.value);
    };
    const handleKey = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            if (
                inVal.trim() === "" ||
                stateAuth.profileData?.startupRes.team.skills.indexOf(
                    inVal.trim()
                ) !== -1
            )
                return;
            setVal("");
            setSkills([...skills, inVal]);
        }
    };

    console.log(generalValues);

    // update functions
    const updateField = (name, value) => {
        setGeneralValues({ ...generalValues, [name]: value });
    };
    const updateEducationField = (name, value) => {
        setCurrentEducationValues({
            ...currentEducationValues,
            [name]: value,
        });
    };
    const updateExperienceField = (name, value) => {
        setCurrentExperienceValues({
            ...currentExperienceValues,
            [name]: value,
        });
    };

    const onDelete = (value) => {
        setSkills(skills.filter((item) => item !== value));
    };

    const onChangeImage = async (e) => {
        const { files } = e.target;
        const formData = new FormData();
        formData.append("type", "image");
        formData.append("file", files[0]);
        setLoading(true);
        try {
            const response = await upload(formData);
            setAvatar(response?.path);
        } catch (error) {
            console.log(error);
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
        setLoading(false);
        updateField("avatar", avatar);
    };

    const {
        changePath,
        state: { path },
    } = useActivity();

    const back = () => {
        changePath(path - 1);
    };

    const onSubmit = () => {
        updateProfile("team", {
            coFounder: [
                ...stateAuth?.profileData?.startupRes?.team.coFounder,
                generalValues,
            ],
        });

        handleClose(false);
    };

    const handleEduSubmit = () => {
        setLocalEducation([
            ...localEducation,
            {
                ...currentEducationValues,
                endDate: checked ? "present" : currentEducationValues.endDate,
            },
        ]);
        setGeneralValues({ ...generalValues, education: localEducation });
        setCurrentEducationValues({
            schoolName: "",
            course: "",
            degree: "",
            activities: "",
            startDate: "",
            endDate: checked ? "present" : "",
        });
    };

    const handleExpeSubmit = () => {
        setLocalExperience([
            ...localExperience,
            {
                ...currentExperienceValues,
                endDate: checked ? "present" : currentExperienceValues.endDate,
            },
        ]);
        setGeneralValues({ ...generalValues, experience: localExperience });
        setCurrentExperienceValues({
            companyName: "",
            location: "",
            position: "",
            responsibility: "",
            startDate: "",
            endDate: checked ? "present" : endDate,
        });
    };

    const [generalForm] = Form.useForm();
    const [educationForm] = Form.useForm();
    const [experienceForm] = Form.useForm();
    const [socialMediaForm] = Form.useForm();

    console.log(localExperience);
    console.log(localEducation);

    return (
        <div className="px-3">
            {show ? <TeamModal handleClose={setShow} /> : <span></span>}
            {showEducation ? (
                <EducationModal isLocal={true} handleClose={setShowEducation} />
            ) : (
                <span></span>
            )}

            <section>
                <Form
                    id="Cofounder-profile"
                    name="Cofounder-profile"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                    }}
                    form={generalForm}
                >
                    <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                        <div className="div">
                            <span>Co-Founder</span>
                            <p
                                onClick={() =>
                                    console.log(
                                        stateAuth.profileData?.startupRes.team
                                    )
                                }
                            >
                                A brief profile of co-founders
                            </p>
                        </div>

                        <div
                            style={{
                                marginTop: "10px",
                                marginLeft: "10px",
                                position: "relative",
                                width: "max-content",
                            }}
                        >
                            <ImageWrapper>
                                {avatar === null ? (
                                    loading ? (
                                        <CircularLoader color={"#000"} />
                                    ) : (
                                        <AiOutlineUser size={40} />
                                    )
                                ) : (
                                    <img
                                        className=""
                                        src={avatar}
                                        style={{
                                            borderRadius: "70px",
                                            width: "90px",
                                            height: "90px",
                                        }}
                                        alt=""
                                    />
                                )}
                            </ImageWrapper>

                            <CoInputWrapper for="found">
                                <input
                                    type="file"
                                    onChange={onChangeImage}
                                    id="found"
                                    hidden
                                    accept="image/*"
                                />
                                <PlusOutlined style={{ color: "#ffffff" }} />
                            </CoInputWrapper>
                        </div>

                        <div className="row my-3 mt-4">
                            <div className="form-group col-12">
                                <TextField
                                    label="Brief Introduction"
                                    name={"briefIntroduction"}
                                    value={generalValues.briefIntroduction}
                                    onChange={(e) => {
                                        updateField(
                                            "briefIntroduction",
                                            e.target.value
                                        );
                                    }}
                                    required={true}
                                    placeholder="Enter a brief introduction"
                                />
                            </div>
                            <div className="form-group col-lg-6 col-12">
                                <TextField
                                    label="First Name"
                                    name={"firstName"}
                                    value={generalValues.firstName}
                                    onChange={(e) => {
                                        updateField(
                                            "firstName",
                                            e.target.value
                                        );
                                    }}
                                    required={true}
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="form-group col-lg-6 col-12">
                                <TextField
                                    label="Last Name"
                                    name={"lastName"}
                                    value={generalValues.lastName}
                                    onChange={(e) => {
                                        updateField("lastName", e.target.value);
                                    }}
                                    required={true}
                                    placeholder="Enter last name"
                                />
                            </div>
                            <div className="form-group col-lg-6 col-12">
                                <TextField
                                    label="Email"
                                    name={"email"}
                                    value={generalValues.email}
                                    onChange={(e) => {
                                        updateField("email", e.target.value);
                                    }}
                                    type="email"
                                    required={true}
                                    placeholder="Enter an email"
                                />
                            </div>
                            <div className="form-group  col-lg-6 col-12">
                                <Form.Item
                                    name="dob"
                                    label="Date of Birth"
                                    initialValue={
                                        startDate ? moment(dob) : undefined
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select the date of birth",
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        className="custs p-2"
                                        style={{ padding: "15px" }}
                                        placeholderText="yyyy-mm-dd"
                                        value={
                                            startDate
                                                ? generalValues.dob
                                                : undefined
                                        }
                                        onChange={(date, dateString) => {
                                            updateField(
                                                "dob",
                                                dateString === ""
                                                    ? null
                                                    : new Date(
                                                          dateString
                                                      ).toISOString()
                                            );
                                            console.log(generalValues);
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-4 col-12">
                                <Form.Item
                                    name="country"
                                    label="Country"
                                    initialValue={generalValues.country}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select a country",
                                        },
                                    ]}
                                >
                                    <CountryDropdown
                                        className="form-control px-5 py-1 country-bg"
                                        value={generalValues.country}
                                        onChange={(value) => {
                                            updateField("country", value);
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-4 col-12">
                                <Form.Item
                                    name="region"
                                    label="State"
                                    initialValue={generalValues.state}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select a state",
                                        },
                                    ]}
                                >
                                    <RegionDropdown
                                        name="state"
                                        country={generalValues.country}
                                        value={generalValues.state}
                                        onChange={(value) => {
                                            updateField("state", value);
                                        }}
                                        className="form-control ps-3"
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group col-lg-4 col-12">
                                <TextField
                                    label="City"
                                    name={"city"}
                                    value={generalValues.city}
                                    onChange={(e) => {
                                        updateField("city", e.target.value);
                                        console.log(generalValues);
                                    }}
                                    required={true}
                                    placeholder="Enter a city"
                                />
                            </div>
                            <div className="form-group col-6 ">
                                <Form.Item
                                    name="phoneNumber"
                                    label="Mobile Number"
                                    initialValue={phone}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a mobile number.",
                                        },
                                    ]}
                                >
                                    <PhoneInput
                                        international
                                        name="phone"
                                        countryCallingCodeEditable={true}
                                        className="custs w-lg-50 ps-1"
                                        value={generalValues.mobile_number}
                                        onChange={(value) => {
                                            updateField("mobile_number", value);
                                        }}
                                        placeholder="+234 700 0000 000"
                                        MaxLength={17}
                                        style={{ padding: "5px" }}
                                    />
                                </Form.Item>
                            </div>

                            <div className="form-group col-lg-4 col-12">
                                <TextField
                                    label={`Position at ${stateAuth?.startupname}`}
                                    name={"position"}
                                    value={generalValues.position}
                                    onChange={(value) => {
                                        updateField("position", value);
                                    }}
                                    required={true}
                                    placeholder="Enter a position"
                                />
                            </div>
                        </div>
                    </FormWrapper>
                </Form>
                <Form
                    name="Cofounder-Experience"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    form={experienceForm}
                    onFinish={(values) => {
                        console.log(values);
                        handleExpeSubmit();
                        setDisplayWorkExperience(false);
                    }}
                >
                    <FormWrapper height="80%" style={{ padding: "0 0 1rem 0" }}>
                        <div>
                            <HeaderModal>Work Experience</HeaderModal>
                            <hr style={{ background: "#323232" }} />
                            {localExperience.length > 0 &&
                                localExperience.map((item, index) => {
                                    return (
                                        <WorkExperience
                                            key={index}
                                            {...item}
                                            showTeamModal={() =>
                                                setDisplayWorkExperience(false)
                                            }
                                            setEditIndex={setEditIndex}
                                            setIsEditing={setIsEditing}
                                            id={index}
                                        />
                                    );
                                })}
                            {!displayWorkExperience && (
                                <div className="col-7 my-4 px-0">
                                    <span
                                        style={{
                                            color: "#120297",
                                            borderBottom: "1px solid #120297",
                                            fontWeight: "600",
                                            marginTop: "10px",
                                        }}
                                        onClick={() =>
                                            setDisplayWorkExperience(true)
                                        }
                                    >
                                        Add another work experience +
                                    </span>
                                </div>
                            )}
                        </div>
                        {displayWorkExperience && (
                            <div>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <HeaderModal>
                                        {"Add Work Experience"}
                                    </HeaderModal>
                                    <IoClose
                                        size={32}
                                        css={css`
                                            cursor: pointer;
                                        `}
                                        onClick={() => {
                                            setDisplayWorkExperience(false);
                                        }}
                                    />
                                </div>
                                <hr style={{ background: "#323232" }} />
                                <ModalForm className="row">
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Company Name"
                                            name={"companyName"}
                                            value={
                                                currentExperienceValues.companyName
                                            }
                                            onChange={(e) => {
                                                updateExperienceField(
                                                    "companyName",
                                                    e.target.value
                                                );
                                            }}
                                            placeholder="e.g. Knight Ventures"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Location"
                                            name={"location"}
                                            value={
                                                currentExperienceValues.location
                                            }
                                            onChange={(e) => {
                                                updateExperienceField(
                                                    "location",
                                                    e.target.value
                                                );
                                            }}
                                            placeholder="e.g. United state of America"
                                            required={true}
                                        />
                                    </div>

                                    <div className="col-12 form-group">
                                        <TextareaCustom
                                            name={"responsibility"}
                                            label={"Description"}
                                            value={
                                                currentExperienceValues.responsibility
                                            }
                                            onChange={(e) => {
                                                updateExperienceField(
                                                    "responsibility",
                                                    e.target.value
                                                );
                                            }}
                                            min={10}
                                            maxLength={50}
                                            onKeyPress={letterOnly}
                                            placeholder="Tell us about your role"
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() =>
                                                setChecked(!checked)
                                            }
                                        />
                                        <span>I current work in this role</span>
                                    </div>
                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="startDate"
                                            label="Start Date"
                                            initialValue={
                                                currentExperienceValues.startDate
                                                    ? moment(
                                                          currentExperienceValues.startDate
                                                      )
                                                    : undefined
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
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                value={
                                                    currentExperienceValues.startDate
                                                }
                                                onChange={(
                                                    date,
                                                    dateString
                                                ) => {
                                                    updateExperienceField(
                                                        "startDate",
                                                        dateString === ""
                                                            ? null
                                                            : new Date(
                                                                  dateString
                                                              ).toISOString()
                                                    );
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                    {!checked && (
                                        <div className="col-6 form-group">
                                            <Form.Item
                                                name="endDate"
                                                label="End Date"
                                                initialValue={
                                                    currentExperienceValues.endDate
                                                        ? moment(
                                                              currentExperienceValues.endDate
                                                          )
                                                        : undefined
                                                }
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please select the day you left",
                                                    },
                                                ]}
                                            >
                                                <DatePicker
                                                    id="endDate"
                                                    name="endDate"
                                                    className="p-2"
                                                    style={{ padding: "15px" }}
                                                    value={
                                                        currentExperienceValues.endDate
                                                    }
                                                    onChange={(
                                                        date,
                                                        dateString
                                                    ) => {
                                                        updateExperienceField(
                                                            "endDate",
                                                            dateString === ""
                                                                ? null
                                                                : new Date(
                                                                      dateString
                                                                  ).toISOString()
                                                        );
                                                    }}
                                                />
                                            </Form.Item>
                                        </div>
                                    )}

                                    <div
                                        className="col-12 d-flex justify-content-between"
                                        style={{ marginTop: "1rem" }}
                                    >
                                        {/* {displayWorkExperience === false && (
                                            <CustomButton
                                                background="#D0D0D1"
                                                onClick={() =>
                                                    setDisplayWorkExperience(
                                                        true
                                                    )
                                                }
                                            >
                                                Cancel
                                            </CustomButton>
                                        )} */}

                                        <CustomButton
                                            type="submit"
                                            background="#021098"
                                            // onClick={() => {

                                            // }}
                                        >
                                            Save
                                        </CustomButton>
                                    </div>
                                </ModalForm>
                            </div>
                        )}
                    </FormWrapper>
                </Form>

                <Form
                    name="Cofounder-Education"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                        handleEduSubmit();
                        setDisplayEducation(false);
                    }}
                    form={educationForm}
                >
                    <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                        <div>
                            <HeaderModal>Education</HeaderModal>
                            <hr style={{ background: "#323232" }} />
                            {localEducation &&
                                localEducation.map((item, index) => {
                                    return (
                                        <Education
                                            key={index}
                                            {...item}
                                            showEducationModal={() =>
                                                setDisplayEducation(false)
                                            }
                                            setEditIndex={setEditIndex}
                                            setIsEditing={setIsEditing}
                                            id={index}
                                        />
                                    );
                                })}
                            {!displayEducation && (
                                <div className="mt-3">
                                    <span
                                        style={{
                                            color: "#120297",
                                            borderBottom: "1px solid #120297",
                                            fontWeight: "600",
                                            marginTop: "10px",
                                        }}
                                        onClick={() =>
                                            setDisplayEducation(true)
                                        }
                                    >
                                        Add another education +
                                    </span>
                                </div>
                            )}
                        </div>
                        {displayEducation && (
                            <div>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <HeaderModal>
                                        {/* {isEditing
                                            ? "Edit Education"
                                            : "Add Education"} */}
                                        Add Education
                                    </HeaderModal>
                                    <IoClose
                                        size={32}
                                        css={css`
                                            cursor: pointer;
                                        `}
                                        onClick={() => {
                                            setDisplayEducation(false);
                                        }}
                                    />
                                </div>
                                <hr style={{ background: "#323232" }} />
                                <ModalForm className="row">
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="School"
                                            name={"school"}
                                            value={
                                                currentEducationValues.schoolName
                                            }
                                            onChange={(e) => {
                                                updateEducationField(
                                                    "schoolName",
                                                    e.target.value
                                                );
                                            }}
                                            placeholder="Enter School name"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Degree"
                                            name={"degree"}
                                            value={
                                                currentEducationValues.degree
                                            }
                                            onChange={(e) => {
                                                updateEducationField(
                                                    "degree",
                                                    e.target.value
                                                );
                                            }}
                                            placeholder="Enter Degree"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Field of study"
                                            name={"course"}
                                            value={
                                                currentEducationValues.course
                                            }
                                            onChange={(e) => {
                                                updateEducationField(
                                                    "course",
                                                    e.target.value
                                                );
                                            }}
                                            placeholder="Enter filed of study"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextareaCustom
                                            name={"activities"}
                                            label={"Activities and societies"}
                                            value={
                                                currentEducationValues.activities
                                            }
                                            onChange={(e) => {
                                                updateEducationField(
                                                    "activities",
                                                    e.target.value
                                                );
                                            }}
                                            min={10}
                                            maxLength={50}
                                            onKeyPress={letterOnly}
                                            placeholder="Enter Activities and Societies"
                                            required={false}
                                        />
                                    </div>

                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="eduStartDate"
                                            label="Entry Date"
                                            initialValue={
                                                currentEducationValues.startDate
                                                    ? moment(
                                                          currentEducationValues.startDate
                                                      )
                                                    : undefined
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
                                                id="eduStartDate"
                                                name="eduStartDate"
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                selected={startDate}
                                                onChange={(
                                                    date,
                                                    dateString
                                                ) => {
                                                    updateEducationField(
                                                        "startDate",
                                                        dateString === ""
                                                            ? null
                                                            : new Date(
                                                                  dateString
                                                              ).toISOString()
                                                    );
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="eduEndDate"
                                            label="Graduation Date"
                                            initialValue={
                                                currentEducationValues.endDate
                                                    ? moment(
                                                          currentEducationValues.endDate
                                                      )
                                                    : undefined
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
                                                id="eduEndDate"
                                                name="eduEndDate"
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                selected={startDate}
                                                onChange={(
                                                    date,
                                                    dateString
                                                ) => {
                                                    updateEducationField(
                                                        "endDate",
                                                        dateString === ""
                                                            ? null
                                                            : new Date(
                                                                  dateString
                                                              ).toISOString()
                                                    );
                                                }}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div
                                        className="col-12 d-flex justify-content-between"
                                        style={{ marginTop: "1rem" }}
                                    >
                                        <CustomButton
                                            type="submit"
                                            background="#021098"
                                            style={
                                                {
                                                    // marginLeft: displayEducation
                                                    //     ? "7rem"
                                                    //     : "0rem",
                                                }
                                            }
                                        >
                                            Save
                                        </CustomButton>
                                    </div>
                                </ModalForm>
                            </div>
                        )}
                    </FormWrapper>
                </Form>

                <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                    <div className="div">
                        <span>Skills</span>
                    </div>
                    <hr />

                    <div className="form-group">
                        <div>
                            <label>What are your skills</label>
                        </div>
                        <input
                            onChange={handleChangeVal}
                            style={{
                                width: "100%",
                                outline: "none",
                                color: "purple",
                            }}
                            value={inVal}
                            type="text"
                            placeholder="Enter your skills and press the space button to add "
                            className="py-2 px-3"
                            // className='form-control ps-3'
                            onKeyDown={handleKey}
                        />
                        {skills &&
                            skills.map((item, i) => (
                                <SkillTab
                                    key={i}
                                    skill={item}
                                    onClick={() => onDelete(item)}
                                />
                            ))}
                    </div>
                </FormWrapper>

                <Form
                    name="Social-Media"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                        // handleEduSubmit();
                        // setDisplayEducation(true);
                    }}
                    form={socialMediaForm}
                >
                    <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                        <div className="div border-bottom pb-3">
                            <span>Web & Social Media</span>
                        </div>
                        <div className="row">
                            <div
                                className="form-group col-lg-6 col-12"
                                css={css`
                                    > * {
                                        margin-bottom: 0;
                                    }
                                `}
                            >
                                <Form.Item
                                    name="linkedin"
                                    label="Linkedin"
                                    initialValue={generalValues.linkedIn}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a valid linkedin url",
                                            pattern: linkedinRegExp,
                                        },
                                    ]}
                                >
                                    <TextField
                                        type={"text"}
                                        value={generalValues.linkedIn}
                                        onChange={(e) => {
                                            updateField(
                                                "linkedIn",
                                                e.target.value
                                            );
                                        }}
                                        placeholder="Enter Linkedin URL"
                                    />
                                </Form.Item>
                            </div>
                            <div
                                className="form-group col-lg-6 col-12"
                                css={css`
                                    > * {
                                        margin-bottom: 0;
                                    }
                                `}
                            >
                                <Form.Item
                                    name="twitter"
                                    label="Twitter"
                                    initialValue={generalValues.twitter}
                                    rules={[
                                        {
                                            required: false,
                                            message:
                                                "Please enter a valid twitter url",
                                            pattern: twitterRegExp,
                                        },
                                    ]}
                                >
                                    <TextField
                                        type={"text"}
                                        value={generalValues.twitter}
                                        onChange={(e) => {
                                            updateField(
                                                "twitter",
                                                e.target.value
                                            );
                                        }}
                                        placeholder="Enter twitter URL"
                                    />
                                </Form.Item>
                            </div>

                            <div
                                className="form-group col-lg-6 col-12"
                                css={css`
                                    > * {
                                        margin-bottom: 0;
                                    }
                                `}
                            >
                                <TextField
                                    label={"Website"}
                                    type="url"
                                    name="website"
                                    value={generalValues.website}
                                    onChange={(e) => {
                                        updateField("website", e.target.value);
                                    }}
                                    placeholder={"Enter Website link"}
                                    required={true}
                                />
                            </div>
                        </div>
                    </FormWrapper>
                </Form>

                <div className="row mb-5">
                    <div className="col-3">
                        <CustomButton
                            className=""
                            background="#D0D0D1"
                            onClick={back}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        {/* <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton> */}
                        <CustomButton
                            type="button"
                            onClick={() => {
                                if (
                                    generalForm.__INTERNAL__.name &&
                                    educationForm.__INTERNAL__.name &&
                                    experienceForm.__INTERNAL__.name &&
                                    socialMediaForm.__INTERNAL__.name
                                ) {
                                    generalForm.submit();
                                    experienceForm.submit();
                                    educationForm.submit();
                                    socialMediaForm.submit();
                                    updateProfile("team", {
                                        coFounder: [
                                            ...stateAuth?.profileData
                                                ?.startupRes?.team.coFounder,
                                            generalValues,
                                        ],
                                    });
                                    handleClose(false);
                                } else {
                                    console.log("form not connected");
                                }
                            }}
                            background="#00ADEF"
                        >
                            {"Save"}
                        </CustomButton>
                    </div>
                </div>
            </section>
        </div>
    );
};
